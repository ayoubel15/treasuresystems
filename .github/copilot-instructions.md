# TREASURE SYSTEMS project instructions

## Business and audience
- Build for e-commerce owners, especially Instagram-first stores handling growing volumes of enquiries and orders.
- Lead with business outcomes: organized conversations, complete order details, consistent follow-up, and connected tools.
- Do not position the company as a generic AI or software development agency.
- Do not invent client names, testimonials, statistics, integrations, or performance claims.
- Label illustrative interface demonstrations clearly; distinguish them from deployed client work.

## Visual identity
- Use the brand palette: ink #080A09, forest #123D2A, primary green #1FA463, accent #39FF88, and paper #F5F7F6.
- Use IBM Plex Sans Arabic for body and Arabic display text, with Anton SC only for Latin display accents. Do not add a third display family without a clear need.
- Balance clean paper surfaces with deliberate forest/ink sections. Keep bright green for priority actions and small highlights.
- Favor editorial typography, varied section compositions, restrained borders, and realistic commerce-workflow interfaces.
- Avoid generic gradients, glowing card grids, glassmorphism, floating orbs, abstract AI art, repeated cards, and decorative animation.
- Design Arabic as the default RTL experience and verify the English LTR toggle.

## Content and interactions
- Keep copy specific, concise, natural, and commercially useful to store owners.
- Every claim must be supportable by the current business or implementation.
- Keep people in the loop in examples where automated decisions need review.
- Preserve the Supabase booking flow and current valid contact channels.
- The enquiry form must use a real contact destination. Never show success unless a backend confirms persistence.
- Use native, accessible controls, visible keyboard focus, and reduced-motion-aware behavior.

## Engineering and validation
- Keep Vite, React, TypeScript, Tailwind, and the current package manager/lockfile.
- Reuse the language dictionaries for every user-facing string in both Arabic and English.
- Use semantic HTML and the existing `@/` source alias.
- Run lint, typecheck, production build, and the relevant Playwright checks after meaningful changes.
- Inspect actual desktop and mobile renders; do not claim visual verification based only on source review.
- Keep SEO metadata aligned with the e-commerce automation offer and current valid site URL.
