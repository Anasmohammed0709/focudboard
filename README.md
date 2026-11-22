# FocusBoard

A responsive single-user task dashboard built with React, Vite, JavaScript, semantic HTML, and plain CSS.

## Features
- Create, edit, delete, and update task status.
- Search by task title and combine status/priority filters.
- Dynamic task statistics and completion percentage.
- Three-slide Focus Notes carousel with previous/next and indicators.
- Browser localStorage persistence.
- Responsive desktop, tablet, and mobile layouts.
- Accessible labels, semantic regions, focus states, and keyboard-operable controls.

## Requirements
Node.js 18+ and npm.

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed by Vite.

## Production build
```bash
npm run build
npm run preview
```

## Project structure
- `src/components`: reusable dashboard and dialog components.
- `src/context`: task state and persistence.
- `src/data`: initial sample tasks.
- `src/utils`: statistics and date formatting.
- `src/styles`: global, dashboard, and responsive styles.

## State management
React Context exposes task actions to the application. `useReducer` provides predictable immutable task mutations. Statistics and filtered tasks are derived from the single task collection rather than stored separately.

## Persistence
The task provider reads `focusboard.tasks.v1` from localStorage on initialization. Initial sample tasks are used only when no valid saved array exists. Every task state update is persisted. This is browser-local storage; data does not sync across devices.

## Responsive breakpoints
- Desktop: above 1100px.
- Tablet/small laptop: 761–1100px.
- Mobile: 760px and below, with an additional compact layout at 420px.

## Accessibility
Semantic landmarks, explicit form labels, accessible names for icon buttons, tab semantics, dialog roles, visible keyboard focus, and status text accompany color badges.

## Figma fidelity and limitations
The supplied assessment PDF identifies the Figma frame dimensions but its extracted text does not include the actual Figma frame URLs or the exact Focus Notes slide copy. This implementation provides a considered dashboard visual direction and three editable sample Focus Notes. Replace these with exact frame measurements, colors, and slide content after inspecting the original live Figma file. The Calendar and Settings navigation items are visual navigation placeholders because the assessment scope does not require additional screens.

## Deployment
Deploy the repository to Vercel or Netlify using the default Vite build settings:
- Build command: `npm run build`
- Output directory: `dist`

Hosted URL: `https://your-deployment-url.example`
GitHub URL: `https://github.com/your-username/focusboard`
