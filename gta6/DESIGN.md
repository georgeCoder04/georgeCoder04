---
name: Vice Desk
description: A sunlit field console for planning a fictional coastal crime-adventure session.
colors:
  field-paper: "#f3f0e7"
  paper-bright: "#fbfaf6"
  dispatch-ink: "#152522"
  atlas-green: "#173f3c"
  signal-coral: "#eb6c54"
  instrument-gold: "#d5a849"
  cartographer-teal: "#4d9b90"
  map-water: "#b9d9d2"
  map-water-line: "#87bcb1"
  map-coast: "#819e91"
  map-land: "#e8e5d5"
  island-land: "#dfdfcb"
  map-grid: "#7c958c"
  map-boundary: "#b2b5a6"
  map-waterway: "#a5cfc6"
  district-label: "#74827a"
  rail-muted: "#a9bbb4"
  rail-success: "#71c6a2"
  night-mist: "#b9c8c3"
  toast-success: "#8cd0bd"
  mission-soft-coral: "#f4d8cf"
  alert-soft-coral: "#f6e5de"
  collection-blush: "#eaded2"
  shadow-soft: "rgba(0,0,0,.2)"
  rail-frost-06: "rgba(255,255,255,.06)"
  rail-frost-12: "rgba(255,255,255,.12)"
  rail-frost-14: "rgba(255,255,255,.14)"
  rail-frost-15: "rgba(255,255,255,.15)"
  rail-frost-18: "rgba(255,255,255,.18)"
typography:
  display:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "28px"
    fontWeight: 500
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Georgia, Times New Roman, serif"
    fontSize: "22px"
    fontWeight: 500
    lineHeight: 1.1
  body:
    fontFamily: "Arial, Helvetica Neue, sans-serif"
    fontSize: "11px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Arial Narrow, Roboto Condensed, Helvetica Neue, sans-serif"
    fontSize: "9px"
    fontWeight: 800
    lineHeight: 1.2
    letterSpacing: "0.08em"
  micro:
    fontSize: "7px"
  micro-data:
    fontSize: "8px"
  small-action:
    fontSize: "10px"
  utility:
    fontSize: "12px"
  list-title:
    fontSize: "13px"
  body-step:
    fontSize: "14px"
  record-title:
    fontSize: "15px"
  metadata-large:
    fontSize: "16px"
  panel-title:
    fontSize: "18px"
  data-display:
    fontSize: "20px"
  compact-display:
    fontSize: "21px"
  avatar-mark:
    fontSize: "23px"
  section-display:
    fontSize: "24px"
  narrow-title:
    fontSize: "25px"
  district-display:
    fontSize: "26px"
  profile-title:
    fontSize: "27px"
  mission-title:
    fontSize: "29px"
  narrow-display:
    fontSize: "31px"
  mission-display:
    fontSize: "38px"
  record-display:
    fontSize: "46px"
rounded:
  none: "0"
spacing:
  tight: "10px"
  control: "14px"
  section: "24px"
  canvas: "36px"
components:
  button-primary:
    backgroundColor: "{colors.atlas-green}"
    textColor: "{colors.paper-bright}"
    padding: "0 15px"
    height: "40px"
    rounded: "{rounded.none}"
  button-secondary:
    backgroundColor: "{colors.paper-bright}"
    textColor: "{colors.dispatch-ink}"
    padding: "0 15px"
    height: "40px"
    rounded: "{rounded.none}"
---

# Design System: Vice Desk

## Overview

**Creative North Star: "The Coastal Field Console"**

Vice Desk presents as a sunlit dispatch object: an atlas, mission brief, and field notebook held together by a disciplined interface. The map carries the product idea at full scale while narrow instrument panels handle state and task completion. Warm paper, Atlantic green, and coral produce a coastal identity without relying on protected game assets or generic neon “gaming” language.

The interface is compact but not cramped. Familiar controls, hard edges, and restrained depth let players act quickly. Serif titles preserve the sense of a field record; condensed labels provide scan speed.

**Key Characteristics:**
- Original vector cartography is the primary visual and interaction surface.
- Warm paper fields support tactical data rather than replacing it with decoration.
- Coral marks action and current state; green anchors navigation and structure.
- Nearly every strong surface is rectangular, outlined, and instrument-like.

## Colors

Color is a restrained palette with a committed green-and-paper base and action colors used only where they communicate location, progress, or urgency.

### Primary
- **Atlantic Dispatch Green** (`#173f3c`): navigation, primary actions, and map-route structure.
- **Signal Coral** (`#eb6c54`): current selection, action emphasis, mission markers, and progress.

### Secondary
- **Instrument Gold** (`#d5a849`): side-job markers, weather, and collection details.
- **Cartographer Teal** (`#4d9b90`): collectibles, secured progress, and calm success states.

### Neutral
- **Field Paper** (`#f3f0e7`): main workspace ground.
- **Bright Filing Stock** (`#fbfaf6`): panels, controls, and form surfaces.
- **Dispatch Ink** (`#152522`): primary text and structural strokes.

### Named Rules
**The Useful Signal Rule.** Accent color must identify action, selection, or status; it is not a decorative glow or filler.

## Typography

**Display Font:** Georgia, with Times New Roman fallback.

**Body Font:** Arial, with Helvetica Neue fallback.

**Label Font:** Arial Narrow, with Roboto Condensed and Helvetica Neue fallbacks.

**Character:** Editorial titles feel recorded and human; compact sans-serif labels keep the operating interface immediately legible.

### Hierarchy
- **Display** (500, 28px, 1.05): page titles.
- **Headline** (500, 22px, 1.1): panel and record titles.
- **Body** (400, 11px, 1.65): supporting explanations and status copy.
- **Label** (800, 9px, .08em, uppercase): navigation, metadata, controls, and map keys.

### Named Rules
**The No Costume Type Rule.** Condensed type is used for data and controls, never as decorative “technical” copy at display scale.

## Layout

The desktop frame uses a fixed 112px utility rail, a 110px status header, and a 326px planning column beside the flexible map. The primary grid is `minmax(510px, 1fr) 326px` with 28px separation. At 1180px the rail contracts and the planning column narrows. At 860px navigation moves to a fixed bottom bar, all major regions stack, and collection data becomes a two-column grid. At 560px controls, profile forms, and collection tiles use a single structural flow.

Spacing steps of 10px, 14px, 24px, and 36px create tight control groups inside generous work areas. Body prose remains short and operational.

## Elevation & Depth

Depth is structural first: tonal layers, borders, and deliberate offsets separate active work. The map preview uses a soft panel shadow, while mission and primary controls use a compact coral offset to suggest a physical field-file edge. Surfaces at rest remain flat.

### Shadow Vocabulary
- **Field panel** (`0 2px 0 rgba(21,37,34,.06)`): quiet container separation.
- **Lifted object** (`0 6px 20px rgba(28,47,42,.12)`): overlays and profile identity.
- **Tactile action** (`3px 3px 0 var(--coral)`): primary controls and field-priority affordances.

## Shapes

Panels, buttons, fields, collection tiles, and map instrumentation are square-cut. Circles are reserved for markers, avatars, status dots, and map geometry where their shape carries meaning. Thin `#cdc8bb` borders establish the printed filing system; larger outlines appear only for selected records.

## Components

### Buttons
- **Shape:** square-cornered, 40px minimum height.
- **Primary:** Atlantic green fill, bright-paper text, 15px horizontal padding, coral 3px offset.
- **Hover / Focus:** 180ms transform and shadow change; all controls use a 3px gold focus ring.
- **Secondary:** bright-paper fill with Atlantic green stroke.

### Filters
- **Shape:** grouped rectangular controls in a 1px border.
- **State:** inactive controls use paper and muted ink; the selected filter switches to Atlantic green and white.

### Navigation
- **Desktop:** icon-over-label controls in a fixed Atlantic green rail with a narrow active indicator.
- **Mobile:** the same labels become a fixed four-item bottom rail at 67px high.

### Cards / Containers
- **Corners:** none.
- **Background:** paper-bright for task surfaces and field-paper for the main ground.
- **Border:** thin neutral stroke, with full selection outlines reserved for the active mission.

### Inputs / Fields
- **Style:** square 38–41px fields on field-paper with a neutral stroke.
- **Focus:** visible gold ring; search and profile fields retain familiar native behavior.

### Illustrated Map
The map is an original SVG instrument with muted water, land, district lines, roads, labeled fictional districts, and keyboard-focusable markers. Its preview panel and route action stay available at every breakpoint.

## Do's and Don'ts

### Do:
- **Do** make the map the dominant shared workspace on planning surfaces.
- **Do** use accent colors to communicate selected, mission, job, collectible, and success states.
- **Do** preserve clear keyboard focus and full text labels on compact navigation.
- **Do** label the experience unofficial, synthetic, and disconnected from a live game.

### Don't:
- **Don't** use protected logos, exact game assets, external artwork, or live-service claims.
- **Don't** add dark-neon glow, glass surfaces, or gradient text.
- **Don't** turn data into same-size icon cards when a list, map, or instrument strip communicates better.
- **Don't** make progress, route, or completion color-only; provide labels or icons.
