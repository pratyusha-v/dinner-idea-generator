## Quick context

This repository is a small, static single-page site that helps users pick a dinner idea.
Files of interest: `index.html` (app markup) and `styles.css` (visual design and theme variables).

Keep changes minimal and focused: this project currently has no JS, build system, or tests.

## What this project is (big picture)

- Single-page static site (plain HTML + CSS). No framework or bundler present.
- Visual layout is centered in `.container` (max-width: 800px). Key components include `.intro-card` and `.cta-button`.
- Color palette and tokens are defined using CSS variables in `:root` inside `styles.css`.

## When a coding agent is asked to modify this repo

- Prefer edits that preserve the simple static nature. If adding client code, add a clear README section and a single `script.js` referenced from `index.html`.
- Keep CSS variables in `styles.css` and add new tokens there instead of hard-coding colors.
- Match the existing tone and typography: `Georgia, serif`, semantic headings, and centered layout.

## Conventions & examples

- Layout container: use `<div class="container">` to wrap new content so styling remains consistent.
- Small card pattern: copy the `.intro-card` structure (white background, rounded corners, shadow) for new feature panels.
- Buttons: use the `.cta-button` class for primary actions to inherit color/hover behavior.

Example: to add a feature panel, mirror `index.html`'s markup:

<div class="intro-card">
  <p>Short description</p>
  <button class="cta-button">Action</button>
</div>

## Local dev & debugging

- No build step — open `index.html` directly in the browser.
- For a quick local static server (recommended for testing relative assets):

  python3 -m http.server 8000

  Then open http://localhost:8000 in the browser.

## Pull request guidance

- Keep commits small and focused (single visual change or single feature per PR).
- Update `README.md` if you introduce a build step, dependencies, or non-trivial JavaScript.
- Include screenshots for visual changes.

## Integration points & external deps

- There are currently no external dependencies, APIs, or build tools in the repo. If adding any (npm, CDNs, API keys), document them in `README.md` and do not commit secrets.

## Accessibility & semantic notes

- Preserve the existing `<main>`, `<header>`, and heading hierarchy. Add `aria-label` to interactive controls where the visible text is ambiguous.
- Ensure color contrast remains readable against `--background-color` (cream) and `white` cards.

## When in doubt

- If a requested change would introduce a build system or many new files, open a short issue describing the proposed structure before implementing.

---
If any part of this guidance is unclear or you'd like additional details (e.g., preferred JS patterns, testing strategy), tell me what to expand and I'll update this file.
