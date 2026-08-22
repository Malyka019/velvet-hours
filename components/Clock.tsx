"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  // Render nothing until mounted so the server/client markup matches
  // (server has no notion of the visitor's clock).
  if (!now) {
    return <span className="font-mono text-[13px] tabular-nums text-paper/70">--:--:--</span>;
  }

  const time = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  return (
    <span className="font-mono text-[13px] tabular-nums text-paper/70">
      {time}
    </span>
  );
}
