"use client";

import { useEffect, useState } from "react";

export default function CopyEmail({ email }: { email: string }) {
  const [state, setState] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 2200);
    return () => clearTimeout(t);
  }, [state]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("failed");
    }
  }

  return (
    <button type="button" className={`copy-email is-${state}`} onClick={copy}>
      <svg viewBox="0 0 16 16" aria-hidden="true">
        {state === "copied" ? (
          <path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
        ) : (
          <>
            <rect x="5" y="5" width="8.5" height="8.5" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
            <path d="M10.5 3V2.5A1 1 0 0 0 9.5 1.5h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1H4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </>
        )}
      </svg>
      <span aria-live="polite">
        {state === "copied" ? "Copied" : state === "failed" ? "Copy failed, select the address instead" : "Copy email"}
      </span>
    </button>
  );
}
