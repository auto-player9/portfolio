# Saleh Haydar — Portfolio

Personal portfolio built with Next.js (App Router), React and TypeScript. Plain CSS with design tokens, light and dark themes, no UI libraries.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

All text lives in `data/profile.ts`: intro, experience, projects, skills and links. Change it there and the page updates.

The downloadable CV is `public/saleh-haydar-cv.pdf`. Replace that file to update it.

## Structure

```
app/
  layout.tsx        fonts, metadata, theme script
  page.tsx          all sections
  globals.css       tokens, layout, responsive rules
  icon.svg          favicon
components/
  Inspector.tsx     hero panel (profile as an HTTP response)
  ProjectRow.tsx    expandable project row
  ThemeToggle.tsx   light / dark switch
data/
  profile.ts        content
next.config.ts      security headers
```

## Deploy

Push to GitHub and import the repo on Vercel. No environment variables needed.
