# Bloom palette — color usage guide

A bright, candy-pastel palette built around pink, with blue and yellow as supporting accents. Tailwind utility names refer to `layout.css` in root route.

---

## The system at a glance

The palette follows a 60–30–10 balance:

- **~60% neutral surfaces** — blush white page background, white cards
- **~30% supporting tints** — light pink, pale blue, cream section and card backgrounds
- **~10% saturated accents** — pink, yellow, cyan

Two rules govern everything:

1. **Text on a tinted surface always uses the dark shade of that same hue.** Berry text on pink, deep blue text on blue, olive text on yellow. Never plain black or gray on a colored background.
2. **Ration the loud colors.** Roughly one saturated pink element and at most one yellow element per screen section.

---

## Pink family (brand)

| Hex | Token | Role | Key pairing (ratio) |
|---|---|---|---|
| `#ff74b1` | `pink-500` / `brand-vivid` | Hero backgrounds, progress fills, active toggles, decorative shapes | `berry-900` text on it (5.15) |
| `#e0468f` | `pink-600` | Decorative accents (logo dot, underlines), display text 24px+ on white | on white (3.86, large only) |
| `#b8256a` | `pink-700` / `brand` | Solid buttons, pink text on white, error text/borders, prices | white text on it (5.98) |
| `#9c1355` | `pink-800` / `brand-hover` | Hover and pressed states for `pink-700` | white text on it (7.96) |
| `#ffb4d5` | `pink-300` / `brand-soft` | Navbar, tags, card backgrounds, CTA banners | `berry-600` text (4.80) |
| `#ffd3e6` | `pink-100` / `brand-faint` | Extra-light cards, disabled fills, progress/toggle tracks | `berry-600` text (5.92) |
| `#8f2a5c` | `berry-600` | Body text and icons on pink-300 and pink-100 | — |
| `#5c1638` | `berry-900` | Footer bg, headings on pink surfaces, labels on `pink-500` | `pink-300` text on it (7.83) |

**The four-step interaction logic:** `pink-700` fill + white text for buttons at rest, `pink-800` on hover, `pink-100` for disabled and tracks, `pink-500` reserved for non-text surfaces with `berry-900` on top.

**Vivid button variant:** if you want the brighter `pink-500` look for a button, its label must be bold `berry-900` — and hover *lightens* to `pink-300` (7.83) rather than darkening.

## Blue family (secondary accent)

| Hex | Token | Role | Key pairing (ratio) |
|---|---|---|---|
| `#65dbff` | `cyan-400` | Accent borders, icons, decorative highlights | never as text |
| `#0b6591` | `cyan-600` / `link` | Links and blue text on white or tints | on white (6.39), on sky-100 (5.74) |
| `#a6eaff` | `sky-200` | Testimonial/feature cards, alternate sections | `sky-700` text (4.51), `sky-900` (6.05) |
| `#e2f6ff` | `sky-100` | Info alerts, lightest blue cards | `sky-700` text (5.38) |
| `#0e6a94` | `sky-700` | Text and icons on blue backgrounds | — |
| `#0a5678` | `sky-900` | Stronger text on blue backgrounds | — |

**Links are blue, focus is pink.** On `sky-200`, prefer `sky-900` for body-size text since `sky-700` sits right at the 4.5 threshold.

## Yellow family (attention)

| Hex | Token | Role | Key pairing (ratio) |
|---|---|---|---|
| `#ffeb76` | `sun-300` / `highlight` | Badges, headline text highlights | `olive-900` text (7.14) |
| `#fff6c9` | `sun-100` | Warning alerts, lightest yellow cards | `olive-600` text (5.61) |
| `#75600c` | `olive-600` | Text and icons on cream backgrounds | — |
| `#5c4a08` | `olive-900` | Text on saturated yellow | — |

## Neutrals

| Hex | Token | Role | Key pairing (ratio) |
|---|---|---|---|
| `#2b2140` | `ink-900` / `body` | Body text and headings | on blush (14.12) |
| `#4a4160` | `ink-600` | Secondary and supporting text | on blush (8.88) |
| `#fff5f9` | `blush-50` / `page` | Page background | — |
| `#ffffff` | `white` | Cards, inputs, text on `pink-700`+ | — |
| `#96597a` | `dusty-500` | Placeholder text, muted labels | on white (5.24) |

## Semantic

| Hex | Token | Role | Key pairing (ratio) |
|---|---|---|---|
| `#d63b3b` | `danger-600` | Destructive actions only | on white (4.62) |

---

## Component recipes

### Buttons

| Variant | Classes |
|---|---|
| Primary | `bg-brand hover:bg-brand-hover text-white rounded-full` |
| Vivid alt | `bg-brand-vivid text-berry-900 font-bold hover:bg-brand-soft rounded-full` |
| Secondary | `bg-white text-pink-700 border border-pink-500 rounded-full` |
| Dark (on pink surfaces) | `bg-berry-900 text-pink-300 rounded-full` |
| Ghost link | `text-link bg-transparent` |
| Disabled | `bg-brand-faint text-dusty-500` |

### Form fields

| State | Classes |
|---|---|
| Default | `bg-white border border-pink-300 rounded-lg text-ink-900 placeholder-dusty-500` |
| Focused | `border-2 border-pink-500` |
| Error | `border-pink-700` with helper text in `text-pink-700` |
| Label | `text-berry-900 text-xs font-medium` |

### Badges and tags

| Variant | Classes |
|---|---|
| Attention ("New") | `bg-sun-300 text-olive-900 rounded-full` |
| Brand ("Popular") | `bg-pink-300 text-berry-600 rounded-full` |
| Info ("Beta") | `bg-sky-200 text-sky-900 rounded-full` |
| Premium ("Pro") | `bg-berry-900 text-pink-300 rounded-full` |
| Outline | `bg-white text-berry-600 border border-pink-300 rounded-full` |

### Alerts

| Type | Classes |
|---|---|
| Info | `bg-sky-100 text-sky-700` |
| Warning | `bg-sun-100 text-olive-600` |
| Friendly / branded | `bg-pink-100 text-berry-600` |
| Destructive | pale red tint with `text-danger-600` |

### Cards and sections

| Surface | Classes |
|---|---|
| Page | `bg-page text-body` |
| White card | `bg-white text-ink-900` |
| Pink card | `bg-pink-300` — headings `text-berry-900`, body `text-berry-600` |
| Blue card | `bg-sky-200` — headings `text-sky-900`, body `text-sky-900` |
| Featured card | `bg-white border-2 border-pink-500` plus a `sun-300` badge |
| Footer | `bg-berry-900 text-pink-300` with links in `text-sky-200` |
| Vivid hero | `bg-brand-vivid` — all text `berry-900`, buttons `bg-berry-900 text-pink-300` or white w/ `text-pink-700` |

### Progress and toggles

- Track: `bg-pink-100`
- Fill / active: `bg-pink-500` (decorative, no text)
- Toggle knob: `bg-white`

---

## Do and don't

| Do | Don't |
|---|---|
| Use `pink-700` fill with white text for buttons | Put white text on `pink-500` or `pink-600` — both fail |
| Use `berry-900` for any text sitting on `pink-500` | Use small `pink-500`/`pink-600` text anywhere |
| Use `berry-600`+ for all text on pink tints | Use light mid-pinks like #b03f74 as body text on tints |
| Use `sky-900` for body text on `sky-200` | Rely on `sky-700` for long body copy on `sky-200` (borderline) |
| Pair every tint with its own dark hue | Use black or gray text on colored backgrounds |
| Keep yellow to one element per section | Combine a yellow badge and highlight in one view |
| Use `danger-600` for destructive actions | Use pink for delete or error-critical actions |
| Use semantic aliases (`brand`, `link`, `page`) | Hardcode hex values in markup |

---

## Verified contrast table (WCAG AA needs 4.5:1; large text 3:1)

| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| ink-900 | blush-50 | 14.12 | AAA |
| ink-600 | blush-50 | 8.88 | AAA |
| white | pink-700 | 5.98 | AA |
| white | pink-800 | 7.96 | AAA |
| pink-700 | white | 5.98 | AA |
| berry-900 | pink-500 | 5.15 | AA |
| berry-900 | pink-300 | 7.83 | AAA |
| berry-600 | pink-300 | 4.80 | AA |
| berry-600 | pink-100 | 5.92 | AA |
| cyan-600 (link) | white | 6.39 | AA |
| cyan-600 (link) | sky-100 | 5.74 | AA |
| sky-900 | sky-200 | 6.05 | AA |
| sky-700 | sky-100 | 5.38 | AA |
| olive-900 | sun-300 | 7.14 | AAA |
| olive-600 | sun-100 | 5.61 | AA |
| dusty-500 | white | 5.24 | AA |
| pink-300 | berry-900 | 7.83 | AAA |
| sun-300 | berry-900 | 10.69 | AAA |
| danger-600 | white | 4.62 | AA |
| pink-600 | white | 3.86 | large text only (24px+) |
| berry-900 bold | pink-500 | 5.15 | AA (vivid button variant) |
