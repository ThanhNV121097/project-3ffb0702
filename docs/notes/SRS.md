# SRS — Notes

Module: `notes`
Last updated: 2026-08-14
Design: [View Design](http://localhost:8080/design/3ffb0702-3818-433d-a397-c7117b4c4016)
Design system: `design/design-system.md`

## 1. Purpose

The notes module lets a visitor view saved notes on the single "Note Board" page. It exists to present notes already stored in the database as a calm, read-only list with clear loading, empty, and error states. Without this module, the product has no user-facing capability.

## 2. Actors

| Actor | Who they are | What they may do in this module |
|---|---|---|
| Visitor | Anyone who opens "Note Board" | View saved notes and passive page states without signing in |

## 3. Scope

**In scope** — the functions specified below, by their plan titles:

- Display saved notes

**Out of scope** — deliberately not built for this release:

- Add notes — not part of the single approved capability.
- Edit notes — not part of the single approved capability.
- Delete notes — not part of the single approved capability.
- Search, filter, or sort controls — not part of the single approved capability.
- Authentication and authorization flows — the list is read-only and has no signed-in actions.
- Manual reload product control — the design preview "Reload demo" control is documentation tooling only, not product functionality.

## 4. Functional requirements

### 4.1 Display saved notes

**Requirement NOTES-001 — Load saved notes**

*As a* Visitor, *I want to* open "Note Board" and see notes already stored in the database, *so that* I can read saved notes without managing them.

Behaviour:

1. When the Visitor opens the page, the system starts loading saved notes.
2. While loading is in progress, the system shows a loading state instead of an empty page.
3. When saved notes load successfully and at least one note exists, the system shows them in a read-only list.
4. Each note displays its saved content and only these optional display metadata fields when provided by the read service: created time and updated time.
5. Timestamp display rule is final: show updated time when present; otherwise show created time when present; otherwise show no timestamp for that note.
6. The page does not show add, edit, delete, search, filter, sign-in, or sign-out controls.

**Acceptance criteria** — each maps one-to-one onto a test case in `docs/notes/test-cases/display-saved-notes.md`.

| # | Given | When | Then |
|---|---|---|---|
| AC-1 | The database contains one or more saved notes | The Visitor opens "Note Board" | A loading state is shown before the notes render |
| AC-2 | The database contains one saved note | The notes load successfully | The saved note appears in the list as read-only content |
| AC-3 | The database contains multiple saved notes | The notes load successfully | All returned notes appear in the list |
| AC-4 | The notes list is visible | The Visitor views the page | No add, edit, delete, search, filter, authentication, or manual reload product control is present |

**Failure, boundary and permission behaviour**

| Case | Condition | Expected behaviour |
|---|---|---|
| Empty data | The database has no saved notes | Empty state is shown with calm copy explaining that no notes are saved yet |
| Upstream failure | Saved notes cannot be loaded | Error state is shown; no fake notes or partial stale content is shown |
| Slow response | Notes have not finished loading | Loading state remains visible until success, empty, or error state replaces it |
| Not permitted | Visitor is not signed in | Access is still allowed; no authentication prompt is shown |
| Invalid stored data | A returned note lacks optional display metadata | The note still renders using its saved content |
| Boundary | A note has long saved content | Content remains readable within the card/list layout without horizontal page scroll |

**Data touched** — fields this function reads, in product terms. This function writes no note data.

| Field | Type | Required | Rule |
|---|---|---|---|
| Note ID | identifier | yes | Read only to distinguish notes in the list; not editable by the Visitor |
| Note content | text | yes | Read and displayed as saved; read-only on this page |
| Created time | datetime | no | Read and displayed only when no updated time is provided; absence must not block note rendering |
| Updated time | datetime | no | Read and displayed when provided; absence must not block note rendering |

## 5. Design

Approved design preview: [View Design](http://localhost:8080/design/3ffb0702-3818-433d-a397-c7117b4c4016).

Color palette from approved design spec:

| Token | Color | Use |
|---|---|---|
| Primary blue | `#2563EB` | Primary brand emphasis and key accents |
| Calm background | `#F8FAFC` | Page background |
| Card surface | `#FFFFFF` | Note cards and surfaces |
| Success accent | `#10B981` | Positive/loaded state accent |
| Error red | `#DC2626` | Error state accent |

Main screen:

| Screen | Purpose |
|---|---|
| Note Board | Single read-only page showing saved database notes with reachable loading, empty, and error states |

## 6. Screens

The design is the source of truth for appearance; this section maps functions onto it so nothing in the design is unaccounted for and nothing specified here is missing from the design.

| Screen | Section in the design | Functions it serves | States that must exist |
|---|---|---|---|
| Note Board | Main page | NOTES-001 | loading, loaded, empty, error |

## 7. Non-functional requirements

| Area | Requirement |
|---|---|
| Performance | The page shows either saved notes, empty state, or error state within 3 seconds after the notes service responds |
| Accessibility | Note list and state messages must be readable by screen readers, keyboard reachable, and have color contrast of at least 4.5:1 for text |
| Responsive | The page must work from 320px viewport width upward with no horizontal page scroll |
| Localisation | Product copy is in English |
| Privacy | The page displays only saved note fields intended for viewing; no authentication or user profile data is collected by this module |

## 8. Dependencies and assumptions

- **Depends on:** Notes database, for saved note records.
- **Depends on:** Notes read service, for returning saved notes to the page.
- **Assumption:** Saved notes already exist outside this capability. This module does not create, edit, delete, import, or seed notes.
- **Assumption:** If no ordering is provided by the notes read service, the page displays notes in the order returned.
- **Decision:** Timestamp display uses updated time first, created time second, and no timestamp when neither field is provided.

## 9. Traceability

Every plan item in this module appears exactly once, and every requirement id traces to a test case. A gap in this table is a gap in the build.

| Plan item | Requirement ids | Test cases |
|---|---|---|
| Display saved notes | NOTES-001 | `docs/notes/test-cases/display-saved-notes.md` |
