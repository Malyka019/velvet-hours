"use client";

import { useEffect, useState } from "react";

// There's no real presence channel behind this — it's an ambient, slowly
// drifting number in the spirit of an old internet radio "tuned in" counter.
// It starts from a plausible baseline and takes a small random step every
// few seconds so it never feels static or fake-precise.
export default function ListenerCount() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    setCount(Math.floor(140 + Math.random() * 60));
    const id = setInterval(() => {
      setCount((c) => {
        if (c === null) return c;
        const step = Math.round((Math.random() - 0.5) * 6);
        return Math.max(12, c + step);
      });
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center gap-2 text-paper/70">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lantern/70" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-lantern" />
      </span>
      <span className="font-mono text-[13px] tabular-nums">
        {count ?? "···"}
      </span>
      <span className="hidden text-[13px] sm:inline">listening now</span>
    </div>
  );
}
