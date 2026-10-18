"use client";

import Image from "next/image";
import { useId, useState } from "react";
import ExternalIcon from "@/components/ExternalIcon";
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
            <ExternalIcon />
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
          <div className={`project__body${project.image ? " has-image" : ""}`}>
            {project.image ? (
              <a
                className="project__shot"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.name} live site`}
              >
                <span className="project__shot-bar" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <span>{host}</span>
                </span>
                <Image
                  src={project.image}
                  alt={`Screenshot of the ${project.name} website`}
                  width={1600}
                  height={1000}
                  sizes="(max-width: 960px) 100vw, 560px"
                />
              </a>
            ) : null}
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
      </div>
    </li>
  );
}
