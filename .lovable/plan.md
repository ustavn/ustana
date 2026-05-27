# Plan: Align USTA landing page with original brief

The landing page already exists with all requested sections (Hero, PlatformDiagram, FeatureGrid, Metrics, MarketSize, Team, FinalCTA) plus added PainPoints and ProductScreenshots. Bilingual EN/VI is wired up.

Rather than rebuild, this plan re-aligns the page to the original brief's tone: **infrastructure platform feel, Stripe-like, minimal, structured** — while preserving the AC/HVAC operator positioning added later.

## Scope

1. **Hero (split layout)** — keep current split. Tighten copy so left side reads as "platform/infrastructure for service businesses" rather than feature laundry list. Keep dispatch board mockup on the right.

2. **Platform diagram (central visual)** — current `PlatformDiagram.tsx` is a 6-card grid. Replace with a **single horizontal flow diagram**:
   ```text
   Customer → Platform OS → Technician → Payment → Data loop ↺
   ```
   - One row on desktop, stacked on mobile
   - Soft gradient connector lines, node cards with icon + label
   - Data loop shown as a curved return arrow back into Platform OS
   - Keep white bg + soft gradient backdrop

3. **Feature grid (6 modules)** — keep as is; verify 6 items and Stripe-like card styling (thin border, soft shadow, small icon chip).

4. **Validation metrics** — keep `Metrics.tsx`; verify minimal numeric layout.

5. **Market size** — keep `MarketSize.tsx`; ensure it reads structured (TAM/SAM/SOM or equivalent) not over-designed.

6. **Team** — keep current 4 members.

7. **Final CTA** — keep; ensure single clear CTA on soft gradient band.

8. **Trim** — Remove or demote `PainPoints` and `ProductScreenshots` from `Index.tsx` to match the original brief's section list and "do not over-design / keep minimal" directive. (Confirm with user — see question below.)

9. **Visual polish pass** — across all sections:
   - White background, single soft gradient accent (already in `--gradient-subtle`)
   - Consistent section padding (`py-24`), container width, heading scale
   - Inter/clean type, tight tracking on display sizes
   - No heavy shadows, no purple gradients

## Technical details

- Files to edit:
  - `src/components/landing/PlatformDiagram.tsx` — rewrite as horizontal 5-node flow with data-loop arc (SVG connectors), keep i18n keys; may add `t.workflow.nodes` with 5 entries (Customer, Platform OS, Technician, Payment, Data) in `src/i18n/translations.ts`
  - `src/components/landing/Hero.tsx` — copy tightening only
  - `src/pages/Index.tsx` — remove `PainPoints` + `ProductScreenshots` imports/usages (pending confirmation)
  - `src/index.css` — verify `--gradient-subtle` and shadow tokens are Stripe-soft; minor token tweaks if needed
- No new dependencies. No backend changes. i18n stays intact for both EN and VI.

## Open question

The brief lists 7 sections and says "keep minimal." The current page has 9 sections (added `PainPoints` and `ProductScreenshots` in a later iteration with operator-focused positioning). Should I:
- (A) Remove both to match the brief strictly, or
- (B) Keep them since they reinforce the AC/HVAC operator angle established later?

I'll default to (A) unless you say otherwise.
