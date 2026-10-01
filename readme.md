# NeuroHCI in Practice · CHI 2027

Website for **NeuroHCI in Practice: Connecting a Growing Community**, a proposed meet-up at CHI 2027 in Pittsburgh, USA. Conference dates: May 10–14, 2027. Acceptance, session time, and room have not yet been confirmed.

Adapted from the [CHI 2026 meet-up website](https://neurohci.github.io/CHI2026/) using Astro and Tailwind CSS.

## Development

Use Node.js 22 and Yarn 1.22. Run yarn install --frozen-lockfile, then yarn dev.
Local preview: http://localhost:4321/CHI2027/
Validation: yarn run check followed by yarn build. Preview the production build with yarn preview.

## Content

- Main content: src/content/homepage/-index.md.
- Community link: src/content/sections/call-to-action.md.
- Site configuration: src/config/config.json and astro.config.mjs.
- Image assets: public/images/.

The header photographs are from CHI 2026. The sticker sheet presents initial concepts. Organizer details follow the CHI 2027 proposal. Paul Strohmeier and Michael T. Knierim portraits are sourced from their linked institutional profiles.

## Publishing

The workflow checks and builds on pushes to main. Publication is a separate manual action: enable GitHub Pages with GitHub Actions as its source, then run the workflow with the publish option selected. The site is intended for https://neurohci.github.io/CHI2027/.

Before confirming the event publicly, update the proposed status, assigned session date/time, and room. Slack access is requested through the access form; the site does not expose a direct workspace invitation.
