"use client";

import { useState, type CSSProperties } from "react";
import { profile } from "@/data/profile";

type Line = { key: string; value: string; highlight?: boolean };

const headers: Line[] = [
  { key: "x-name", value: profile.name },
  { key: "x-role", value: "full-stack developer" },
  { key: "x-location", value: "beirut, lebanon" },
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

export default function Inspector() {
  const [tab, setTab] = useState<"headers" | "body">("headers");

  return (
    <figure className="inspector" aria-label="Profile shown as an HTTP response">
      <div className="inspector__bar">
        <span className="inspector__method">GET</span>
        <span className="inspector__path">/saleh-haydar</span>
        <span className="inspector__status">200 OK</span>
      </div>

      <div className="inspector__tabs" role="tablist" aria-label="Response view">
        <button
          role="tab"
          aria-selected={tab === "headers"}
          aria-controls="inspector-panel"
          onClick={() => setTab("headers")}
        >
          Headers
        </button>
        <button
          role="tab"
          aria-selected={tab === "body"}
          aria-controls="inspector-panel"
          onClick={() => setTab("body")}
        >
          Body
        </button>
      </div>

      <div id="inspector-panel" role="tabpanel" className="inspector__panel">
        {tab === "headers" ? (
          <ul className="inspector__lines" key="headers">
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
