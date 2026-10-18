import Inspector from "@/components/Inspector";
import ProjectRow from "@/components/ProjectRow";
import ThemeToggle from "@/components/ThemeToggle";
import { experience, profile, projects, skills } from "@/data/profile";

const nav = [
  { href: "#work", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#security", label: "Security" },
  { href: "#contact", label: "Contact" },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="wrap site-header__inner">
          <a href="#top" className="brand" aria-label={`${profile.name}, back to top`}>
            <span className="brand__mark" aria-hidden="true">
              SH
            </span>
            <span className="brand__name">{profile.name}</span>
          </a>
          <nav aria-label="Sections">
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href}>{n.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="hero">
          <div className="wrap hero__grid">
            <h1 className="hero__name">
              <span>{profile.firstName}</span>
              <span>{profile.lastName}</span>
            </h1>
            <div className="hero__copy">
              <p className="hero__role">
                {profile.role} in {profile.location.split(",")[0]}
              </p>
              <p className="hero__intro">{profile.intro}</p>
              <div className="hero__cta">
                <a className="btn btn--solid" href="#projects">
                  See my projects
                </a>
                <a className="btn" href={`mailto:${profile.email}`}>
                  Email me
                </a>
                <a className="btn btn--quiet" href={profile.cv} download>
                  Download CV
                </a>
              </div>
            </div>
            <Inspector />
          </div>
        </section>

        {/* Experience */}
        <section id="work" className="section">
          <div className="wrap">
            <h2 className="section__title">Work</h2>
            {experience.map((job) => (
              <article key={job.company} className="job">
                <div className="job__meta">
                  <h3>
                    <a href={job.href} target="_blank" rel="noopener noreferrer">
                      {job.company}
                    </a>
                  </h3>
                  <p>{job.role}</p>
                  <p className="muted">
                    {job.place}, {job.duration}
                  </p>
                </div>
                <ul className="job__points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section">
          <div className="wrap">
            <div className="section__head">
              <h2 className="section__title">Projects</h2>
              <p className="muted">Live work, built and shipped. Open any project for the technical details.</p>
            </div>
            <ul className="projects">
              {projects.map((p) => (
                <ProjectRow key={p.name} project={p} />
              ))}
            </ul>
          </div>
        </section>

        {/* Security */}
        <section id="security" className="security">
          <div className="wrap security__grid">
            <div>
              <h2 className="section__title">Security from the first commit</h2>
              <p className="security__lead">
                My background is in web penetration testing and HackerOne research. Knowing how real attacks start
                shapes how I build, so the code is production-ready from day one.
              </p>
            </div>
            <dl className="security__list">
              <div>
                <dt>Inputs are validated</dt>
                <dd>Forms check what users send and handle errors clearly instead of failing silently.</dd>
              </div>
              <div>
                <dt>Routes are protected</dt>
                <dd>Authentication and authorization guard what signed-in users can see and change.</dd>
              </div>
              <div>
                <dt>The OWASP Top 10 is the checklist</dt>
                <dd>Injection, broken access control and misconfiguration are reviewed as part of building a feature.</dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="section">
          <div className="wrap">
            <div className="section__head">
              <h2 className="section__title">Skills</h2>
              <p className="muted">
                Most experienced with <strong>Next.js</strong>. Comfortable across the rest.
              </p>
            </div>
            <div className="skills">
              {skills.map((s) => (
                <div key={s.group} className="skills__group">
                  <h3>{s.group}</h3>
                  <ul>
                    {s.items.map((item) => (
                      <li key={item} className={item === "Next.js" ? "is-primary" : undefined}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <div className="wrap">
            <h2 className="section__title">Have a project in mind?</h2>
            <p className="muted contact__lead">
              I&apos;m open to frontend and full-stack roles and freelance work. Email is the fastest way to reach me.
            </p>
            <a className="contact__email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div className="contact__rows">
              <p>
                <span className="muted">Phone</span>
                <a href={profile.phoneHref}>{profile.phone}</a>
              </p>
              <p>
                <span className="muted">Based in</span>
                <span>{profile.location}</span>
              </p>
              <p>
                <span className="muted">Elsewhere</span>
                <span className="contact__socials">
                  {profile.socials.map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                      {s.label}
                    </a>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="wrap site-footer__inner">
          <p>
            © {new Date().getFullYear()} {profile.name}
          </p>
          <p className="muted">Built with Next.js and TypeScript</p>
        </div>
      </footer>
    </>
  );
}
