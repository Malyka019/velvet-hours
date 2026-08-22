import Clock from "@/components/Clock";
import ListenerCount from "@/components/ListenerCount";
import Player from "@/components/Player";
import { PLAYLISTS } from "@/lib/tracks";

const GRAIN_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'>
      <filter id='n'>
        <feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/>
        <feColorMatrix type='saturate' values='0'/>
      </filter>
      <rect width='100%' height='100%' filter='url(#n)'/>
    </svg>`
  );

export default function Home() {
  return (
    <main className="relative flex h-dvh w-full flex-col items-center justify-between overflow-hidden bg-ink isolate">
      {/* 1. fixed background photo — swaps crop by orientation */}
      <div
        className="fixed inset-0 -z-20 hidden bg-cover bg-center landscape:block animate-bg-sway"
        style={{ backgroundImage: "url(/bg-scene-wide.jpg)" }}
      />
      <div
        className="fixed inset-0 -z-20 hidden bg-cover bg-center portrait:block animate-bg-sway"
        style={{ backgroundImage: "url(/bg-scene-tall.jpg)" }}
      />
      <div className="fixed inset-0 -z-20 bg-gradient-to-b from-black/35 via-black/10 to-black/55" />

      {/* 2. film grain */}
      <div
        className="pointer-events-none fixed inset-0 -z-10 opacity-[0.07] mix-blend-overlay"
        style={{
          backgroundImage: `url("${GRAIN_SVG}")`,
          animation: "grain 8s steps(10) infinite",
        }}
      />

      {/* 3. top row: clock / listener count / links */}
      <div className="safe-inset relative z-30 grid w-full grid-cols-3 items-center">
        <div className="justify-self-start">
          <Clock />
        </div>
        <div className="justify-self-center">
          <ListenerCount />
        </div>
        <div className="justify-self-end">
          <a
            href={PLAYLISTS[0].url}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-1.5 text-paper/70 transition hover:text-lantern"
            aria-label="Open Moonlit on Spotify"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm4.59 14.44a.62.62 0 0 1-.86.21c-2.36-1.44-5.33-1.77-8.83-.97a.62.62 0 1 1-.28-1.22c3.83-.88 7.13-.5 9.76 1.11.3.19.4.58.21.87Zm1.22-2.72a.78.78 0 0 1-1.07.26c-2.7-1.66-6.82-2.14-10.02-1.17a.78.78 0 1 1-.45-1.49c3.66-1.11 8.2-.57 11.28 1.32.37.23.49.71.26 1.08Zm.1-2.84C14.8 8.98 9.4 8.8 6.23 9.77a.93.93 0 1 1-.54-1.78c3.64-1.11 9.63-.9 13.42 1.38a.93.93 0 0 1-.96 1.6Z" />
            </svg>
            <span className="hidden text-[13px] sm:inline">Spotify</span>
          </a>
        </div>
      </div>

      {/* Center/Top Title */}
      <div className="absolute top-[25dvh] left-1/2 -translate-x-1/2 z-30 flex flex-col items-center select-none text-center w-full">
        <h1 className="font-boldonse text-3xl sm:text-4xl md:text-5xl font-normal tracking-wide text-white drop-shadow-lg flex flex-col items-center gap-2.5 leading-none">
          <span>Velvet</span>
          <span>Hours</span>
        </h1>
      </div>

      {/* 4. the player, bottom-anchored */}
      <div className="safe-inset relative z-30 flex w-full justify-center">
        <Player />
      </div>

      {/* 5. footer attribution */}
      <div className="absolute bottom-4 right-4 z-30 select-none text-[11px] sm:text-[12px] font-mono text-paper/40 tracking-wider">
        made by lyka
      </div>
    </main>
  );
}
