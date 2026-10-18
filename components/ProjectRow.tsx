"use client";

import { useId, useState } from "react";
import type { Project } from "@/data/profile";

export default function ProjectRow({ project }: { project: Project }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const host = project.href.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <li className={`project${open ? " is-open" : ""}`}>
      <div className="project__head">
        <div className="project__title">
          <h3>{project.name}</h3>
          <p className="project__kind">
            {project.kind}
            {project.duration ? `, ${project.duration}` : ""}
          </p>
        </div>

        <p className="project__summary">{project.summary}</p>

        <div className="project__actions">
          <a className="project__live" href={project.href} target="_blank" rel="noopener noreferrer">
            {host}
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <button
            type="button"
            className="project__toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? "Hide details" : "Show details"}
            <svg viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 4.5 6 8.5 10 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
      </div>

      <ul className="project__stack" aria-label={`${project.name} stack`}>
        {project.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>

      <div id={panelId} className="project__details" inert={!open}>
        <div>
          <dl>
            {project.details.map((d) => (
              <div key={d.title}>
                <dt>{d.title}</dt>
                <dd>{d.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </li>
  );
}
