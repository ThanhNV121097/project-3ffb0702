# Design System — Note Board

> Source of truth: the approved `index.html` (preview: http://localhost:8080/design/3ffb0702-3818-433d-a397-c7117b4c4016).
> Every value below is extracted from it. Changing a value here without
> changing the approved design is a defect.

Last updated: 2026-08-14

## 1. Foundations

### 1.1 Color

Semantic tokens. Name by job, never by hue.

| Token | Value | Used for |
|---|---|---|
| `--color-bg` | `#F8FAFC` | Page background, neutral status background |
| `--color-bg-soft` | `#EFF6FF` | Blue-tinted page gradient and empty icon background |
| `--color-bg-panel` | `#FBFDFF` | Board toolbar background |
| `--color-surface` | `#FFFFFF` | Card, board, button, note, and state-card background |
| `--color-surface-raised` | `#FFFFFF` | Mobile menu and raised cards |
| `--color-border` | `#E2E8F0` | Default border, divider, skeleton line |
| `--color-border-muted` | `#CBD5E1` | Empty status border |
| `--color-text` | `#0F172A` | Body text, heading text, active nav hover text |
| `--color-text-muted` | `#64748B` | Secondary text, captions, inactive controls |
| `--color-note-body` | `#475569` | Note body copy |
| `--color-primary` | `#2563EB` | Primary button, active state button, note accent bar |
| `--color-primary-hover` | `#1D4ED8` | Primary hover, blue status text, eyebrow text |
| `--color-primary-soft` | `#60A5FA` | Logo gradient end |
| `--color-primary-border` | `#BFDBFE` | Hover and loading status border |
| `--color-primary-text` | `#FFFFFF` | Text and icons on primary backgrounds |
| `--color-success` | `#10B981` | Live indicator dot |
| `--color-success-bg` | `#ECFDF5` | Loaded status background |
| `--color-success-text` | `#047857` | Loaded status text |
| `--color-success-border` | `#A7F3D0` | Loaded status border |
| `--color-info-bg` | `#E0F2FE` | Note tag background |
| `--color-info-text` | `#075985` | Note tag text |
| `--color-info-border` | `#BAE6FD` | Note tag border |
| `--color-danger` | `#DC2626` | Error icon color |
| `--color-danger-bg` | `#FEF2F2` | Error icon and status background |
| `--color-danger-text` | `#B91C1C` | Error status text |
| `--color-danger-border` | `#FECACA` | Error status border |
| `--color-warning` | `#F59E0B` | Warning token reserved by approved CSS |
| `--color-focus` | `#2563EB` at 45% opacity | Keyboard focus ring |

#### Contrast audit

Every text-on-background pair actually used. Body text ≥ 4.5:1, large text (≥ 18.66px bold or ≥ 24px) ≥ 3:1, UI borders ≥ 3:1.

| Foreground | Background | Ratio | Passes |
|---|---|---|---|
| `--color-text` | `--color-bg` | `16.8:1` | AA |
| `--color-text` | `--color-surface` | `17.8:1` | AA |
| `--color-text-muted` | `--color-bg` | `4.6:1` | AA |
| `--color-text-muted` | `--color-surface` | `4.8:1` | AA |
| `--color-note-body` | `--color-surface` | `7.6:1` | AA |
| `--color-primary-hover` | `--color-bg-soft` | `5.2:1` | AA |
| `--color-primary-text` | `--color-primary` | `5.2:1` | AA |
| `--color-primary-text` | `--color-primary-hover` | `6.7:1` | AA |
| `--color-success-text` | `--color-success-bg` | `4.8:1` | AA |
| `--color-info-text` | `--color-info-bg` | `6.4:1` | AA |
| `--color-danger-text` | `--color-danger-bg` | `5.9:1` | AA |
| `--color-border` | `--color-surface` | `1.2:1` | FAIL for UI border contrast; approved design uses low-contrast quiet borders |
| `--color-primary-border` | `--color-surface` | `1.4:1` | FAIL for UI border contrast; approved design uses soft blue hover border |
| `--color-success-border` | `--color-success-bg` | `1.3:1` | FAIL for UI border contrast; status still has text contrast |
| `--color-danger-border` | `--color-danger-bg` | `1.4:1` | FAIL for UI border contrast; status still has text contrast |

### 1.2 Spacing

Base unit: `1px`. Approved design uses many one-off values rather than a tight 4px scale; allowed spacing values below are extracted exactly.

| Token | Value |
|---|---|
| `--space-0` | `0` |
| `--space-1` | `5px` |
| `--space-2` | `6px` |
| `--space-3` | `7px` |
| `--space-4` | `8px` |
| `--space-5` | `9px` |
| `--space-6` | `10px` |
| `--space-7` | `11px` |
| `--space-8` | `12px` |
| `--space-9` | `13px` |
| `--space-10` | `14px` |
| `--space-11` | `15px` |
| `--space-12` | `16px` |
| `--space-13` | `18px` |
| `--space-14` | `20px` |
| `--space-15` | `22px` |
| `--space-16` | `26px` |
| `--space-17` | `28px` |
| `--space-18` | `30px` |
| `--space-19` | `32px` |
| `--space-20` | `34px` |
| `--space-21` | `36px` |
| `--space-22` | `42px` |
| `--space-23` | `44px` |
| `--space-24` | `70px` |
| `--space-25` | `72px` |
| `--space-26` | `74px` |
|
### 1.3 Typography

Font families (include the fallback stack and how the font is loaded):

- Body: `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`; no external font file is loaded, so installed/system Inter resolves first.
- Headings: same as body.
- Mono: none used in approved design.

| Token | Size | Line height | Weight | Used for |
|---|---|---|---|---|
| `--text-xs` | `12px` | normal | `800`, `900` | Note footer, status pill |
| `--text-sm` | `13px` | normal | `700`, `800` | Eyebrow, chip |
| `--text-control` | `14px` | `1.45` when paragraph | `700`, `800` | Nav links, toolbar controls, board supporting copy, detail copy |
| `--text-base` | browser default `16px` | `1.55` | normal | Body copy inherited from body |
| `--text-note-title` | `17px` | normal | browser bold | Note title `h3` |
| `--text-lead` | `clamp(18px, 2.4vw, 22px)` | `1.55` | normal | Lead paragraph |
| `--text-xl` | `22px` | normal | browser bold | Board title, state-card title |
| `--text-hero` | `clamp(42px, 7vw, 76px)` | `.95` | browser bold | Page `h1` |

Heading levels are used in order: `h1` page title, `h2` board title, `h3` note and state titles. Visual sizing does not skip semantic levels.

### 1.4 Radius, border, shadow, motion

| Token | Value | Used for |
|---|---|---|
| `--radius-xs` | `12px` | Nav links, state buttons |
| `--radius-sm` | `13px` | Retry button |
| `--radius-md` | `14px` | Logo, mobile toggle |
| `--radius-card` | `18px` | Note cards, mobile menu, state icons |
| `--radius-section` | `22px` | Detail cards, global radius variable |
| `--radius-panel` | `24px` | Board, state cards |
| `--radius-frame` | `32px` | Board frame |
| `--radius-full` | `9999px` | Pills, chips, skeleton lines |
| `--border-width` | `1px` | Default border |
| `--border-accent` | `5px` | Note left accent bar |
| `--shadow-hover` | `0 8px 20px rgba(15,23,42,.08)` | Nav hover |
| `--shadow-card` | `0 12px 30px rgba(15,23,42,.06)` | Note card |
| `--shadow-detail` | `0 12px 34px rgba(15,23,42,.06)` | Detail card |
| `--shadow-primary` | `0 12px 24px rgba(37,99,235,.22)` | Retry button |
| `--shadow-primary-active` | `0 12px 26px rgba(37,99,235,.20)` | Active state button |
| `--shadow-logo` | `0 14px 30px rgba(37,99,235,.24)` | Logo |
| `--shadow-state-card` | `0 18px 46px rgba(15,23,42,.08)` | Empty/error state card |
| `--shadow-frame` | `0 24px 70px rgba(15,23,42,.10)` | Board frame and mobile menu |
| `--duration-fast` | `.18s` | Hover, focus, control transitions |
| `--duration-enter` | `.42s` | Note entry animation |
| `--duration-panel` | `.7s` | Board frame lift animation |
| `--duration-pulse` | `1.9s` | Live dot pulse |
| `--duration-shimmer` | `1.35s` | Loading skeleton shimmer |
| `--easing` | `ease` | All transitions and animations |

Motion respects `prefers-reduced-motion: reduce`: animations and transitions are reduced to `.01ms`, repeated once, and smooth scrolling is disabled.

### 1.5 Layout and breakpoints

| Name | Min width | Container | Columns | Gutter |
|---|---|---|---|---|
| `base` | `0` | `min(100% - 22px, 1120px)` below 680px; otherwise `min(1120px, calc(100% - 32px))` | 1 | `14px` to `20px` |
| `md` | `680px` | `min(1120px, calc(100% - 32px))` | 1 | `16px` to `42px` |
| `lg` | `900px` | `min(1120px, calc(100% - 32px))` | Hero 2 columns `1.02fr .98fr`; details 3 columns | `16px` details, `42px` hero |
| `xl` | `1120px` | `1120px` max | Same as `lg` | Same as `lg` |

Z-index scale (only these values are allowed):

| Layer | Value |
|---|---|
| Base | `0` |
| Sticky header | `10` |
| Dropdown | `10` within sticky header stacking context |
| Modal backdrop | Not used |
| Modal | Not used |
| Toast | Not used |

## 2. Components

One subsection per reusable component. Every component lists all states.

### 2.1 App Shell and Topbar

**Purpose** — Holds product brand, preview navigation, and responsive menu. Use once per page shell; do not add product actions beyond approved read-only scope.

**Anatomy** — `[sticky header] [container] [brand link with logo] [mobile menu button] [nav links] [ghost reload button]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Sticky translucent topbar | `--color-bg` at 78% opacity, `--color-border`, blur `18px`, z-index `10` | Page-level navigation only |
| Mobile dropdown | `--color-surface-raised`, `--color-border`, `--radius-card`, `--shadow-frame` | Viewport below `680px` |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Desktop | `72px` | nav link `10px 13px` | `--text-control` |
| Mobile | `64px` | menu `10px`, shell side `11px` | `--text-control` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Sticky frosted bar, muted links | `--color-bg`, `--color-text-muted`, `--color-border` |
| Hover | Links become white cards with dark text and soft shadow | `--color-surface`, `--color-text`, `--shadow-hover` |
| Focus (keyboard) | 3px blue translucent ring with 3px offset | `--color-focus` |
| Active / pressed | No separate pressed style in approved design | Same as hover/default |
| Disabled | Not used; nav items are links/buttons and should be removed rather than disabled | None |
| Loading | Ghost reload can trigger loading preview; topbar itself does not change | State controlled by board |
| Error | Topbar remains stable during board error | None |
| Empty | Topbar remains stable during board empty state | None |

**Accessibility** — Header uses `<nav aria-label="Primary navigation">`. Brand link has `aria-label="Note Board home"`. Mobile button uses `aria-expanded`, `aria-controls`, and changing `aria-label`. Escape closes menu. Hit target is at least 44px through 40px logo plus padding or 10px button padding.

### 2.2 Hero Scope Summary

**Purpose** — Communicates read-only product scope before user reaches notes. Use for page introduction only.

**Anatomy** — `[eyebrow with live dot] [h1] [lead paragraph] [scope chips]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Page hero | `--text-hero`, `--text-lead`, `--color-primary-hover`, `--color-success` | Top of Note Board page |
| Scope chip group | `--color-surface` at 80% opacity, `--color-border`, `--radius-full` | Non-interactive capability summary |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Eyebrow | content height | `8px 12px` | `--text-sm` |
| Chip | content height | `9px 12px` | `--text-sm` |
| Hero section | content height | `70px 0 34px`, mobile `34px 0 34px` | `--text-hero`, `--text-lead` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Calm intro with blue emphasis and green pulse | `--color-primary-hover`, `--color-success`, `--color-text`, `--color-text-muted` |
| Hover | No hover affordance; chips are informational only | None |
| Focus (keyboard) | No focusable controls inside hero except page anchors outside hero | None |
| Active / pressed | Not interactive | None |
| Disabled | Not interactive | None |
| Loading | Hero remains stable while board loads | None |
| Error | Hero remains stable while board errors | None |
| Empty | Hero remains stable while board is empty | None |

**Accessibility** — Uses one `h1`. Pulse is `aria-hidden="true"` so animation is not announced. Scope chips are grouped with `aria-label="Scope summary"`.

### 2.3 Board Frame

**Purpose** — Contains list and all fetch states in one stable panel. Use for note display only.

**Anatomy** — `[outer frame] [board surface] [board head: title, subtitle, status pill] [preview toolbar] [state region]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Elevated board | `--color-surface` at 74%, `--color-border`, `--radius-frame`, `--shadow-frame` | Primary content frame |
| Inner board | `--color-surface`, `--color-border`, `--radius-panel` | Contains state content |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Board frame | content height | `14px` | Inherits |
| Board head | content height | `22px 22px 16px` | title `--text-xl`, copy `--text-control` |
| State region | min `430px` | `20px`, mobile `14px` | Inherits |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White board with border and clipped rounded corners | `--color-surface`, `--color-border`, `--radius-panel` |
| Hover | No hover; board is container | None |
| Focus (keyboard) | State buttons and retry button show focus; board container does not | `--color-focus` through children |
| Active / pressed | No pressed container state | None |
| Disabled | Board is never disabled | None |
| Loading | Subtitle says `Fetching saved notes from database.`; status pill turns blue; region shows skeleton cards | `--color-bg-soft`, `--color-primary-hover`, `--color-primary-border` |
| Error | Subtitle says `Database request failed. User can retry loading.`; status pill turns red; region shows error card | `--color-danger-bg`, `--color-danger-text`, `--color-danger-border` |
| Empty | Subtitle says `Database returned zero saved notes.`; status pill turns neutral; region shows empty card | `--color-bg`, `--color-text-muted`, `--color-border-muted` |

**Accessibility** — Board is a section labelled by `h2` through `aria-labelledby="board-title"`. State region uses `aria-live="polite"` so loading, empty, and error updates announce without forcing focus.

### 2.4 Preview State Controls

**Purpose** — Design-preview-only controls for reachable loading, empty, error, and loaded states. Do not ship as product note controls.

**Anatomy** — `[toolbar] [state button: Loaded] [state button: Loading] [state button: Empty] [state button: Error]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Neutral state button | `--color-surface`, `--color-border`, `--color-text-muted`, `--radius-xs` | Inactive preview state |
| Active state button | `--color-primary`, `--color-primary-text`, `--shadow-primary-active` | Current preview state |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | content height | `9px 12px` | `--text-control` |
| Toolbar | content height | `16px 22px`, mobile `14px` | `--text-control` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White button, muted text, light border | `--color-surface`, `--color-text-muted`, `--color-border` |
| Hover | Border turns soft blue, text blue, moves up `-1px` | `--color-primary-border`, `--color-primary-hover`, `--duration-fast` |
| Focus (keyboard) | 3px blue translucent ring with 3px offset | `--color-focus` |
| Active / pressed | Filled primary button with white text and blue shadow | `--color-primary`, `--color-primary-text`, `--shadow-primary-active` |
| Disabled | Not used; disabled preview controls should be omitted | None |
| Loading | `Loading` button becomes active when loading state renders | `--color-primary`, `--color-primary-text` |
| Error | `Error` button becomes active when error state renders | `--color-primary`, `--color-primary-text` |
| Empty | `Empty` button becomes active when empty state renders | `--color-primary`, `--color-primary-text` |

**Accessibility** — Toolbar has `aria-label="Preview states"`. Buttons are native `<button type="button">`. Focus ring is visible. Minimum hit target is slightly under 44px by CSS alone; keep adjacent spacing and do not shrink padding.

### 2.5 Status Pill

**Purpose** — Summarizes current database fetch state in board header. Use for concise non-interactive status only.

**Anatomy** — `[pill text]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Loaded | `--color-success-bg`, `--color-success-text`, `--color-success-border` | Notes loaded successfully |
| Loading | `--color-bg-soft`, `--color-primary-hover`, `--color-primary-border` | Fetch in progress |
| Empty | `--color-bg`, `--color-text-muted`, `--color-border-muted` | Database returns zero notes |
| Error | `--color-danger-bg`, `--color-danger-text`, `--color-danger-border` | Database fetch fails |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Default | content height | `7px 10px` | `--text-xs` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Loaded green pill: `4 notes loaded` | `--color-success-bg`, `--color-success-text`, `--color-success-border` |
| Hover | No hover; not interactive | None |
| Focus (keyboard) | Not focusable | None |
| Active / pressed | Not interactive | None |
| Disabled | Not disabled; status should reflect current state | None |
| Loading | Blue pill: `Loading notes` | `--color-bg-soft`, `--color-primary-hover`, `--color-primary-border` |
| Error | Red pill: `Could not load` | `--color-danger-bg`, `--color-danger-text`, `--color-danger-border` |
| Empty | Neutral pill: `No notes found` | `--color-bg`, `--color-text-muted`, `--color-border-muted` |

**Accessibility** — Status text sits inside board header and changes alongside `aria-live` region. Do not rely on color only; text changes with each state.

### 2.6 Note List and Note Card

**Purpose** — Displays saved database notes as read-only cards. Do not use for adding, editing, deleting, selecting, or searching.

**Anatomy** — `[list grid] [note card: accent bar, title, body, footer date, tag]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Default note | `--color-surface`, `--color-border`, `--radius-card`, `--shadow-card`, `--color-primary` accent | Saved note item |
| Tagged note | `--color-info-bg`, `--color-info-text`, `--color-info-border` | Optional note label exists |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Note card | content height | `18px 18px 16px` | title `--text-note-title`, body `--text-base`, footer `--text-xs` |
| Tag | content height | `5px 8px` | `--text-xs` |
| List | content height | gap `14px` | Inherits |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White card, light border, blue left accent, soft shadow | `--color-surface`, `--color-border`, `--color-primary`, `--shadow-card` |
| Hover | No hover affordance; notes are read-only | None |
| Focus (keyboard) | Not focusable; no note actions exist | None |
| Active / pressed | Not interactive | None |
| Disabled | Not disabled; missing data handled by empty state | None |
| Loading | Replaced by skeleton cards | Skeleton component tokens |
| Error | Replaced by error state card | State card tokens |
| Empty | Replaced by empty state card | State card tokens |

**Accessibility** — Each note is an `<article>`. Title uses `h3`; note body remains text. Footer date and tag are readable text, not icon-only metadata.

### 2.7 Loading Skeleton

**Purpose** — Shows notes are being fetched from database while layout remains stable.

**Anatomy** — `[skeleton grid] [skeleton card x3] [short line] [long line] [mid line] [shimmer overlay]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Card skeleton | `--color-surface`, `--color-border`, `--radius-card`, `--color-border` lines | Loading note list |
| Shimmer | white at 72% opacity over transparent gradient | Loading motion when reduced motion is not requested |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Skeleton card | content height | `18px` | None |
| Skeleton line | `13px` | margin `10px 0` | None |
| Short line | `13px` | width `42%` | None |
| Mid line | `13px` | width `72%` | None |
| Long line | `13px` | width `92%` | None |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Three white cards with grey rounded bars | `--color-surface`, `--color-border`, `--radius-card`, `--radius-full` |
| Hover | No hover | None |
| Focus (keyboard) | Not focusable | None |
| Active / pressed | Not interactive | None |
| Disabled | Not applicable | None |
| Loading | Shimmer overlay moves left to right | `--duration-shimmer`, `--easing` |
| Error | Removed and replaced by error card | State card tokens |
| Empty | Removed and replaced by empty card | State card tokens |

**Accessibility** — Board status text says loading. Region uses `aria-live="polite"`. Skeleton itself is decorative; future implementation should avoid announcing every skeleton line.

### 2.8 Empty State Card

**Purpose** — Explains database has no saved notes and preserves read-only scope. Use only when fetch succeeds with zero notes.

**Anatomy** — `[centered empty container] [state card] [blue icon tile] [h3] [explanatory paragraph]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Empty card | `--color-surface`, `--color-border`, `--radius-panel`, `--shadow-state-card` | No saved notes returned |
| Empty icon tile | `--color-bg-soft`, `--color-primary` | Empty note icon |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Empty region | min `360px` | `28px` | Inherits |
| State card | max width `420px` | `30px` | title `--text-xl`, body `--text-base` |
| Icon tile | `58px` | none | Icon `30px` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Centered white card with blue icon tile and explanatory text | `--color-surface`, `--color-border`, `--color-bg-soft`, `--color-primary` |
| Hover | No hover; no action exists | None |
| Focus (keyboard) | Not focusable | None |
| Active / pressed | Not interactive | None |
| Disabled | Not applicable | None |
| Loading | Replaced by skeleton while fetching | Skeleton tokens |
| Error | Replaced by error state if fetch fails | Error state tokens |
| Empty | Text: `No saved notes yet`; explains notes appear automatically and no create action exists | `--color-text`, `--color-text-muted` |

**Accessibility** — Icon is decorative through `aria-hidden="true"` on SVG. Empty text says what is missing and what happens next without offering unavailable create action.

### 2.9 Error State Card and Retry Button

**Purpose** — Tells user notes failed to load and provides retry only. Does not alter saved notes.

**Anatomy** — `[centered error container] [state card] [red icon tile] [h3] [paragraph] [retry button]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Error card | `--color-surface`, `--color-border`, `--radius-panel`, `--shadow-state-card` | Database request fails |
| Error icon tile | `--color-danger-bg`, `--color-danger` | Error icon |
| Primary retry button | `--color-primary`, `--color-primary-text`, `--radius-sm`, `--shadow-primary` | Retry failed load |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Error region | min `360px` | `28px` | Inherits |
| State card | max width `420px` | `30px` | title `--text-xl`, body `--text-base` |
| Icon tile | `58px` | none | Icon `30px` |
| Retry button | content height | `11px 15px` | `--text-base` weight `900` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | White card, red icon tile, primary retry button | `--color-surface`, `--color-danger-bg`, `--color-danger`, `--color-primary` |
| Hover | Retry button darkens and moves up `-1px` | `--color-primary-hover`, `--duration-fast` |
| Focus (keyboard) | Retry button gets 3px blue translucent ring with 3px offset | `--color-focus` |
| Active / pressed | No distinct pressed style in approved design | Same as hover/default |
| Disabled | Not used; retry should be available when error is shown | None |
| Loading | Retry click switches board to loading state | Skeleton tokens |
| Error | Text: `Notes failed to load`; paragraph says connection or service error and notes unchanged | `--color-danger-bg`, `--color-danger`, `--color-text-muted` |
| Empty | Not used in error card | None |

**Accessibility** — Retry is native `<button type="button">`. Error text does not expose internal details. Existing notes safety is stated: `Existing notes are not changed.`

### 2.10 Detail Constraint Card

**Purpose** — Documents design constraints below board. Use for explanatory non-product preview content only.

**Anatomy** — `[card] [strong heading] [supporting text]`.

**Variants**

| Variant | Tokens | When to use |
|---|---|---|
| Constraint card | `--color-surface` at 78% opacity, `--color-border`, `--radius-section`, `--shadow-detail` | Preview explanation of scope and layout rules |

**Sizes**

| Size | Height | Padding | Text token |
|---|---|---|---|
| Detail section | content height | `36px 0 74px`, gap `16px` | Inherits |
| Detail card | content height | `20px` | heading inherited, body `--text-control` |

**States**

| State | Visual change | Tokens |
|---|---|---|
| Default | Light card with strong label and muted explanatory text | `--color-surface`, `--color-border`, `--color-text`, `--color-text-muted` |
| Hover | No hover; not interactive | None |
| Focus (keyboard) | Not focusable | None |
| Active / pressed | Not interactive | None |
| Disabled | Not applicable | None |
| Loading | Remains stable while board loads | None |
| Error | Remains stable while board errors | None |
| Empty | Remains stable while board is empty | None |

**Accessibility** — Detail section uses `aria-label="Design constraints"`. Cards are static text. No controls hidden in this region.

## 3. Content and formatting

- Voice and tone: calm, practical, explicit about read-only scope.
- Date and time format: human-readable relative labels in mock data, e.g. `Today, 09:42`, `Yesterday, 16:10`, `Monday, 11:25`, `Last week`; production should keep same concise style.
- Number format: plain English count in status pill, e.g. `4 notes loaded`.
- Currency format: none used.
- Locale: English UI copy.
- Capitalization rule: sentence case for headings and messages; title case is not used except product name `Note Board`; buttons use sentence case, e.g. `Try loading again`.
- Empty-state wording pattern: name missing content, then explain automatic recovery without suggesting unavailable create action.
- Error-message wording pattern: state load failure, give safe reason category, reassure saved notes are unchanged, offer retry.

## 4. Known deviations

Places where the approved design does not follow its own rules or the
anti-patterns in `references/ai-defaults.md`. Record, do not silently fix.

| Where | Deviation | Why it stands | Follow-up |
|---|---|---|---|
| Color / page background and logo | Approved design uses decorative blue gradients: page background radial/linear gradients and logo gradient. | Stakeholder approved mockup; calm blue gradient reinforces note board brand but matches AI-default gradient warning partly. | Keep unless stakeholder asks for flatter design. |
| Radius scale | Approved design uses many radii: `12px`, `13px`, `14px`, `18px`, `22px`, `24px`, `32px`, `9999px`; more than 3–4 steps. | Mockup relies on varied rounding for hierarchy. | Consolidate in future redesign only. |
| Spacing scale | Approved design uses many values including `5px`, `6px`, `7px`, `9px`, `11px`, `13px`, `15px`, `18px`, `22px`, `26px`, `28px`, `30px`, `34px`, `42px`, `70px`, `74px`, not a compact 4px scale. | Extracted from approved CSS; changing it here would redesign layout. | Normalize to 4px scale in future redesign only. |
| UI borders | Several borders fail 3:1 contrast because approved design uses low-contrast quiet borders. | Body text contrast passes; border softness is part of calm visual style. | Adjust border colors in accessibility-focused redesign if required. |
| Preview controls | Toolbar buttons and `Reload demo` are present in approved mockup but are documentation tools only, not product functionality. | Needed to review loading, empty, and error states in one static preview. | Remove from production implementation. |
| Resting elevation | Board frame uses large `0 24px 70px` shadow, close to heavy-shadow anti-pattern. | Main board is single primary object and approved design uses it for hierarchy. | Reduce in future flat redesign if desired. |

## 5. Change log

| Date | Change | Design PR |
|---|---|---|
| 2026-08-14 | Initial design system extracted from approved `index.html`. | This PR |
