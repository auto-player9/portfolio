"use client";

import { useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { profile } from "@/data/profile";

type Line = { key: string; value: string; highlight?: boolean };

const headers: Line[] = [
  { key: "x-name", value: profile.name },
  { key: "x-role", value: "full-stack developer" },
  { key: "x-location", value: "Deir Ammar, lebanon" },
  { key: "x-stack", value: "next.js, react, typescript, node.js, express, mongodb" },
  { key: "x-security", value: "owasp-top-10; web-pentesting; hackerone", highlight: true },
  { key: "content-security-policy", value: "default-src 'self'" },
  { key: "x-contact", value: profile.email },
];

const body = {
  name: profile.name,
  role: "Full-stack developer",
  location: profile.location,
  experienced: ["Next.js"],
  skilled: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "Sanity"],
  security: ["OWASP Top 10", "Web penetration testing", "HackerOne"],
};

const tabs = [
  { id: "headers", label: "Headers" },
  { id: "body", label: "Body" },
] as const;

type Tab = (typeof tabs)[number]["id"];

export default function Inspector() {
  const [tab, setTab] = useState<Tab>("headers");
  const [run, setRun] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  // Arrow keys move between tabs, as in the WAI-ARIA tabs pattern.
  function onTabKey(e: KeyboardEvent<HTMLButtonElement>, index: number) {
    const keys: Record<string, number> = {
      ArrowRight: (index + 1) % tabs.length,
      ArrowLeft: (index - 1 + tabs.length) % tabs.length,
      Home: 0,
      End: tabs.length - 1,
    };
    const next = keys[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setTab(tabs[next].id);
    tabRefs.current[next]?.focus();
  }

  function replay() {
    setTab("headers");
    setRun((r) => r + 1);
  }

  return (
    <figure className="inspector" aria-label="Profile shown as an HTTP response">
      <div className="inspector__bar">
        <span className="inspector__method">GET</span>
        <span className="inspector__path">/saleh-haydar</span>
        <span className="inspector__status" key={`status-${run}`}>
          200 OK
        </span>
        <button type="button" className="inspector__replay" onClick={replay} aria-label="Send the request again">
          <svg viewBox="0 0 16 16" aria-hidden="true">
            <path d="M13 8a5 5 0 1 1-1.5-3.6M13 2.5v3h-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      <div className="inspector__tabs" role="tablist" aria-label="Response view">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`inspector-tab-${t.id}`}
            role="tab"
            aria-selected={tab === t.id}
            aria-controls="inspector-panel"
            tabIndex={tab === t.id ? 0 : -1}
            onClick={() => setTab(t.id)}
            onKeyDown={(e) => onTabKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        id="inspector-panel"
        role="tabpanel"
        aria-labelledby={`inspector-tab-${tab}`}
        className="inspector__panel"
        tabIndex={0}
      >
        {tab === "headers" ? (
          <ul className="inspector__lines" key={`headers-${run}`}>
            <li style={{ "--i": 0 } as CSSProperties}>
              <span className="k">HTTP/2</span> <span className="ok">200</span>
            </li>
            {headers.map((h, i) => (
              <li
                key={h.key}
                className={h.highlight ? "is-marked" : undefined}
                style={{ "--i": i + 1 } as CSSProperties}
              >
                <span className="k">{h.key}:</span> <span className="v">{h.value}</span>
              </li>
            ))}
          </ul>
        ) : (
          <pre className="inspector__json" key="body">
            {JSON.stringify(body, null, 2)}
          </pre>
        )}
      </div>
    </figure>
  );
}
