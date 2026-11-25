# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Players who want a desktop companion for planning a fictional Leonida/Vice City-inspired play session without interrupting play to reconstruct what they were doing.

## Product Purpose

Vice Desk is an unofficial companion dashboard that brings the map, active missions, side jobs, collectibles, and local progress into one glanceable planning space. Success means a player can choose the next objective, track what is complete, and resume later without setup friction.

## Positioning

The product combines spatial planning and collection progress in one persistent field console while keeping all content explicitly synthetic and independent of live Rockstar or GTA services.

## Operating Context

Used on a desktop before or during a play session, with a responsive fallback for narrower screens. The app works entirely from bundled demo content and browser `localStorage`; no account or external game connection is required.

## Capabilities and Constraints

- One overview surfaces the interactive fictional map, missions, collection progress, activity, and profile state.
- Players can filter map locations, inspect locations, prioritize missions, complete missions and collectibles, and change profile appearance.
- Selections and completion progress persist locally in the browser.
- The app must be contained in `/gta6` and must not modify the incumbent root-site files.
- All locations, missions, collectibles, profile details, and activity are synthetic demo data.
- No protected game artwork, logos, exact assets, or live API claims are used.
- The interface must include realistic loading, empty, and error-adjacent states.

## Brand Commitments

- Clearly label the product as unofficial and demo-only.
- Do not imply an affiliation with Rockstar Games or access to official game data.
- Use original HTML, CSS, SVG, and interface copy.

## Evidence on Hand

No real game data, official branding, user research, or external artwork is available. Demo content must remain visibly labeled as synthetic.

## Product Principles

1. Plan from a map, not a wall of menus.
2. Make the next useful action unmistakable.
3. Preserve progress quietly and locally.
4. Keep fictional world detail distinct from official claims.
5. Favor familiar controls when density increases.

## Accessibility & Inclusion

Keyboard operation, visible focus, semantic controls, reduced-motion support, and a responsive single-column fallback are required. Color must not be the only signal for location or progress state.
