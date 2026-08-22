"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";
import { PLAYLISTS, Track } from "@/lib/tracks";

declare global {
  interface Window {
    onSpotifyIframeApiReady?: (IFrameAPI: SpotifyIFrameAPI) => void;
  }
}

type SpotifyIFrameAPI = {
  createController: (
    element: HTMLElement,
    options: { uri: string; width?: string | number; height?: string | number },
    callback: (controller: SpotifyEmbedController) => void
  ) => void;
};

type SpotifyEmbedController = {
  addListener: (event: string, cb: (e: { data: PlaybackUpdate }) => void) => void;
  play: () => void;
  pause: () => void;
  togglePlay: () => void;
  seek: (seconds: number) => void;
  loadUri: (uri: string) => void;
};

type PlaybackUpdate = {
  isPaused: boolean;
  isBuffering: boolean;
  duration: number; // in milliseconds
  position: number; // in milliseconds
  playingURI?: string;
};

export default function Player() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const controllerRef = useRef<SpotifyEmbedController | null>(null);
  const [activePlaylist, setActivePlaylist] = useState(PLAYLISTS[0]);
  const [currentTrack, setCurrentTrack] = useState<Track>(PLAYLISTS[0].tracks[0]);
  const [isPaused, setIsPaused] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const [ready, setReady] = useState(false);
  const [progress, setProgress] = useState(0); // in seconds
  const [duration, setDuration] = useState(0); // in seconds
  const [isSeekingState, setIsSeekingState] = useState(false);
  const [albumArtUrl, setAlbumArtUrl] = useState<string>(PLAYLISTS[0].coverArt);

  // Sync track metadata when the active track changes
  useEffect(() => {
    let active = true;
    async function fetchArt() {
      try {
        const res = await fetch(`/api/album-art?id=${currentTrack.id}`);
        if (!res.ok) throw new Error("Failed to fetch artwork");
        const data = await res.json();
        if (active && data.thumbnail) {
          setAlbumArtUrl(data.thumbnail);
        }
      } catch (err) {
        // Fallback to active playlist cover art on error
        if (active) {
          setAlbumArtUrl(activePlaylist.coverArt);
        }
      }
    }
    fetchArt();
    return () => {
      active = false;
    };
  }, [currentTrack.id, activePlaylist.coverArt]);

  useEffect(() => {
    function boot(IFrameAPI: SpotifyIFrameAPI) {
      (window as unknown as { __spotifyIFrameAPI?: SpotifyIFrameAPI }).__spotifyIFrameAPI = IFrameAPI;
      if (!mountRef.current || controllerRef.current) return;
      IFrameAPI.createController(
        mountRef.current,
        { uri: activePlaylist.uri, width: "100%", height: "80" },
        (controller) => {
          controllerRef.current = controller;
          setReady(true);

          const handleStateUpdate = (e: { data: PlaybackUpdate }) => {
            setIsPaused(e.data.isPaused);
            setIsBuffering(e.data.isBuffering);
            setDuration(e.data.duration / 1000);
            
            if (!isSeekingState) {
              setProgress(e.data.position / 1000);
            }

            if (e.data.playingURI) {
              const trackId = e.data.playingURI.split(":").pop();
              
              // Search both playlists for the currently playing track
              for (const pl of PLAYLISTS) {
                const matchedTrack = pl.tracks.find((t) => t.id === trackId);
                if (matchedTrack) {
                  setCurrentTrack(matchedTrack);
                  setActivePlaylist(pl);
                  break;
                }
              }
            }
          };

          controller.addListener("playback_update", handleStateUpdate);
          
          controller.addListener("playback_started", (e) => {
            if (e.data.playingURI) {
              const trackId = e.data.playingURI.split(":").pop();
              for (const pl of PLAYLISTS) {
                const matchedTrack = pl.tracks.find((t) => t.id === trackId);
                if (matchedTrack) {
                  setCurrentTrack(matchedTrack);
                  setActivePlaylist(pl);
                  break;
                }
              }
            }
          });
        }
      );
    }

    if (window.onSpotifyIframeApiReady === undefined) {
      window.onSpotifyIframeApiReady = boot;
    }
    const existing = (window as unknown as { __spotifyIFrameAPI?: SpotifyIFrameAPI }).__spotifyIFrameAPI;
    if (existing) boot(existing);
  }, [isSeekingState, activePlaylist.uri]);

  const handlePlaylistChange = (playlist: typeof PLAYLISTS[0]) => {
    if (playlist.id === activePlaylist.id) return;
    setActivePlaylist(playlist);
    setCurrentTrack(playlist.tracks[0]);
    setAlbumArtUrl(playlist.coverArt);
    setProgress(0);
    setDuration(0);
    if (ready && controllerRef.current) {
      controllerRef.current.loadUri(playlist.uri);
    }
  };

  const handlePlayPause = () => {
    if (!ready || !controllerRef.current) return;
    controllerRef.current.togglePlay();
  };

  const handleNext = () => {
    if (!ready || !controllerRef.current) return;
    const currentIndex = activePlaylist.tracks.findIndex((t) => t.id === currentTrack.id);
    const nextIndex = (currentIndex + 1) % activePlaylist.tracks.length;
    const nextTrack = activePlaylist.tracks[nextIndex];
    
    setCurrentTrack(nextTrack);
    setProgress(0);
    
    controllerRef.current.loadUri(`spotify:track:${nextTrack.id}`);
    
    setTimeout(() => {
      if (controllerRef.current) {
        controllerRef.current.play();
      }
    }, 200);
  };

  const handlePrev = () => {
    if (!ready || !controllerRef.current) return;
    const currentIndex = activePlaylist.tracks.findIndex((t) => t.id === currentTrack.id);
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = activePlaylist.tracks.length - 1;
    const prevTrack = activePlaylist.tracks[prevIndex];
    
    setCurrentTrack(prevTrack);
    setProgress(0);
    
    controllerRef.current.loadUri(`spotify:track:${prevTrack.id}`);

    setTimeout(() => {
      if (controllerRef.current) {
        controllerRef.current.play();
      }
    }, 200);
  };

  const handleSeekChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(parseFloat(e.target.value));
  };

  const handleSeekEnd = (e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>) => {
    setIsSeekingState(false);
    if (!ready || !controllerRef.current) return;
    const seekVal = parseFloat((e.target as HTMLInputElement).value);
    controllerRef.current.seek(seekVal);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds) || seconds === null) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className="w-full max-w-xl flex flex-col items-center">
      <Script
        src="https://open.spotify.com/embed/iframe-api/v1"
        strategy="afterInteractive"
      />

      {/* Playlist Selector Bar matching mockup design */}
      <div className="glass mb-5 flex w-fit items-center gap-1.5 rounded-full p-1.5 shadow-lg">
        {PLAYLISTS.map((pl) => {
          const isActive = pl.id === activePlaylist.id;
          return isActive ? (
            <button
              key={pl.id}
              className="rounded-full bg-lantern px-4 py-1.5 text-[13px] font-semibold text-ink shadow-[0_2px_8px_rgba(238,174,87,0.3)] transition cursor-pointer"
            >
              {pl.name}
            </button>
          ) : (
            <button
              key={pl.id}
              onClick={() => handlePlaylistChange(pl)}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] text-paper/70 hover:text-paper hover:bg-white/5 transition cursor-pointer"
            >
              <img
                src={pl.coverArt}
                alt={pl.name}
                className="h-4.5 w-4.5 rounded-full object-cover"
              />
              <span>{pl.name}</span>
            </button>
          );
        })}
      </div>

      {/* Hidden Spotify embed iframe container */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "1px",
          height: "1px",
          opacity: 0.01,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <div ref={mountRef} />
      </div>

      {/* Custom Player UI */}
      <div className="glass flex w-full items-center justify-between gap-4 rounded-full p-3 px-5 shadow-2xl">
        {/* Left: Spinning cover art disc */}
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full shadow-[0_4px_18px_rgba(0,0,0,0.55)]">
          <img
            src={albumArtUrl}
            alt="Album Artwork"
            className="h-full w-full object-cover"
            style={{
              animation: "spin 8s linear infinite",
              animationPlayState: isPaused ? "paused" : "running",
            }}
          />
          {/* CD center spindle hole */}
          <div className="absolute inset-0 m-auto flex h-3.5 w-3.5 items-center justify-center rounded-full bg-[#0c1119] shadow-inner">
            <div className="h-1.5 w-1.5 rounded-full bg-paper/40" />
          </div>
        </div>

        {/* Center: Track title, artist, seek slider, and times */}
        <div className="min-w-0 flex-1 flex flex-col justify-center">
          <span className="truncate font-sans text-[14px] font-semibold text-paper leading-tight">
            {currentTrack.song}
          </span>
          <span className="truncate font-sans text-[12px] text-paper/70 leading-normal">
            {currentTrack.artists}
          </span>

          <div className="mt-1 flex flex-col gap-0.5">
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={progress}
              onChange={handleSeekChange}
              onMouseDown={() => setIsSeekingState(true)}
              onMouseUp={handleSeekEnd}
              onTouchStart={() => setIsSeekingState(true)}
              onTouchEnd={handleSeekEnd}
              disabled={!ready}
              className="seek"
              style={{
                "--seek-pct": `${duration ? (progress / duration) * 100 : 0}%`,
              } as React.CSSProperties}
            />
            <div className="flex justify-between text-[10px] text-paper/50 font-mono -mt-1.5">
              <span>{formatTime(progress)}</span>
              <span>{formatTime(duration)}</span>
            </div>
          </div>
        </div>

        {/* Right: Custom playback controls */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Previous Track Button */}
          <button
            onClick={handlePrev}
            disabled={!ready}
            className="text-paper/70 hover:text-lantern disabled:opacity-30 transition p-1 cursor-pointer"
            aria-label="Previous track"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M6 6h2v12H6V6zm3.5 6l8.5 6V6l-8.5 6z" />
            </svg>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={handlePlayPause}
            disabled={!ready}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-paper text-ink hover:scale-105 active:scale-95 disabled:opacity-30 disabled:hover:scale-100 transition shadow-[0_2px_8px_rgba(0,0,0,0.3)] p-0 cursor-pointer"
            aria-label={isPaused ? "Play" : "Pause"}
          >
            {isPaused ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current ml-0.5">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            )}
          </button>

          {/* Next Track Button */}
          <button
            onClick={handleNext}
            disabled={!ready}
            className="text-paper/70 hover:text-lantern disabled:opacity-30 transition p-1 cursor-pointer"
            aria-label="Next track"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M6 18l8.5-6L6 6v12zM16 6h2v12h-2V6z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
