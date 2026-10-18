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

### Project screenshots

Each project can show a screenshot when its details are opened. Save an image in `public/projects/` (1600x1000 works well) and add it to that project in `data/profile.ts`:

```ts
image: "/projects/devflow.png",
```

Projects without an image just show the details text.

### Share preview

`app/opengraph-image.tsx` creates the image people see when your link is shared on LinkedIn, WhatsApp or X. After deploying, set `NEXT_PUBLIC_SITE_URL` (for example `https://salehhaydar.com`) in Vercel so the preview uses your real domain.

## Structure

```
app/
  layout.tsx        fonts, metadata, theme script
  page.tsx          all sections
  globals.css       tokens, layout, responsive rules
  icon.svg          favicon
  opengraph-image.tsx  share preview image
  not-found.tsx     404 page
components/
  SiteHeader.tsx    sticky nav, active section, mobile menu
  Inspector.tsx     hero panel (profile as an HTTP response)
  CopyEmail.tsx     copy-to-clipboard button
  ExternalIcon.tsx  icon for links that open a new tab
  ProjectRow.tsx    expandable project row
  ThemeToggle.tsx   light / dark switch
data/
  profile.ts        content
next.config.ts      security headers
```

## Deploy

Push to GitHub and import the repo on Vercel. No environment variables needed.
