---
name: treasure-frontend-design
description: "Use when designing or changing TREASURE SYSTEMS frontend pages, sections, copy, responsive layouts, or commerce workflow demonstrations."
---

# Treasure Frontend Design

## Product position
Design for growing e-commerce businesses, including Instagram-first stores. Communicate how the work organizes customer conversations, gathers order details, coordinates follow-up, and connects existing tools. Explain business value before implementation details.

Do not present TREASURE SYSTEMS as a generic AI development company. Avoid unsupported statistics, invented results, fictional testimonials, or integrations that have not been verified. Make illustrative workflow interfaces explicitly illustrative and do not imply that sample messages are a live client system.

## Identity
- Brand colors: ink `#080A09`, forest `#123D2A`, green `#1FA463`, accent `#39FF88`, paper `#F5F7F6`.
- Use IBM Plex Sans Arabic for body copy and Arabic display; use Anton SC sparingly for Latin display accents.
- Keep Arabic as the default and verify RTL; English must switch to LTR through the language context.
- Balance paper surfaces with intentional forest and ink sections. Reserve accent green for primary actions and concise status cues.

## Composition
- Treat every section as its own composition while keeping consistent spacing, typography, and color.
- Prefer editorial layouts, horizontal rules, clear alignment, and useful whitespace over repeated card grids.
- Product demonstrations should resemble a real commerce workflow: customer question, collected order information, and a clear handoff. Label samples as illustrative when they are not actual deployed screenshots.
- Use real existing assets when available. Do not use generic AI imagery, robot illustrations, abstract technology backgrounds, glow borders, glassmorphism, or floating decorative shapes.
- Use motion only when it clarifies state or navigation. Respect `prefers-reduced-motion`.
- Design mobile as a deliberate layout at 390px, not a squeezed desktop grid. Check navigation, heading wraps, forms, and horizontal overflow.

## Interaction and truthfulness
- Preserve existing booking and contact integrations.
- Enquiry actions must send to a configured endpoint or a valid existing WhatsApp/email destination. Never fabricate a successful submission.
- Use semantic buttons, links, forms, labels, and keyboard-visible focus. Prefer native controls where appropriate.
- Keep form fields concise and validate required data before launching the contact action.

## Completion checks
1. Run lint, typecheck, production build, and focused Playwright tests.
2. Inspect real browser screenshots at desktop and mobile sizes, including the footer and form.
3. Check both Arabic/RTL and English/LTR.
4. Report only validations actually performed and mention missing backend configuration plainly.