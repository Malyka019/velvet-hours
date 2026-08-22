# Moonlit

A single-page nostalgia site for the "Moonlit" playlist, built with Next.js 15 (App Router), TypeScript, and Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000. (`npm run build` needs a real connection to
`fonts.googleapis.com` to pull Fraunces / IBM Plex — that's blocked in the
sandbox this was built in, but works anywhere with normal internet access,
including Vercel.)

## What's here

- `app/page.tsx` — background photo, film grain, top row (clock / listener
  count / Spotify link), and the player. Server component.
- `app/layout.tsx` — fonts (Fraunces for display, IBM Plex Sans for body,
  IBM Plex Mono for numbers) and metadata.
- `app/globals.css` — the `@theme` token system (colors, fonts, the glass
  recipe, the seek-bar styling, the grain keyframes).
- `components/Player.tsx` — the player.
- `components/Clock.tsx`, `components/ListenerCount.tsx` — the two live bits
  of the top row.
- `lib/tracks.ts` — the 100 tracks pulled from your PDF export, plus the
  playlist URI/URL. Not used for playback — see below.
- `public/bg-scene-wide.jpg`, `public/bg-scene-tall.jpg` — generated from
  your uploaded still. See "About the background" below.

## Three deliberate deviations from the brief, and why

**1. The player embeds real Spotify playback instead of faking custom
transport.** The original spec described a fully custom pill: your own
seek bar, your own prev/play/next buttons, driven by real audio. Spotify's
public embed API doesn't expose per-track skip or track metadata — only
play/pause/resume/seek on whatever's loaded, plus playback position. Building
custom buttons that *looked* functional but silently did nothing felt worse
than being upfront: I wrapped the real Spotify embed (the iframe you sent) in
the glass-pill chrome, kept a decorative vinyl that spins in real sync with
play/pause (via Spotify's iFrame API events), and left the actual transport —
play, pause, seek, next, previous, volume — to Spotify's own controls inside
that frame. It's a visual compromise; it's not a functional one.

**2. One responsive player, not two separately-mounted ones.** The brief
asked for a `hidden sm:flex` / `sm:hidden` pair — two independent blocks. If
both had their own live Spotify embed, you'd risk two audio streams
existing at once (one hidden, potentially still playable). Instead there's a
single Player instance whose *chrome* reflows between a pill and a stacked
card at the `sm` breakpoint, with one underlying embed. If you want strictly
independent mobile/desktop instances later, say so and I'll split them with a
shared "currently active" lock so only one can ever hold the audio.

**3. One background photo instead of two.** You uploaded one landscape
still. I generated `bg-scene-tall.jpg` by center-cropping and upscaling it
for portrait, but it's the same photo, not a separately composed portrait
shot — so faces/signage sit slightly differently than a true portrait
photograph would. Swap in a real portrait-oriented image at
`public/bg-scene-tall.jpg` any time; nothing else needs to change.

## Track list

`lib/tracks.ts` holds the 100 songs your PDF captured (your export note said
Spotify's lazy-loading meant the final 8 of 108 didn't make it into the
scrape). It currently powers only the small "108 tracks, curated by
Its.lyka" caption — not a visible tracklist UI, since the brief didn't ask
for one. Say the word if you want a scrollable list, credits screen, or
now-playing ticker built from it.
