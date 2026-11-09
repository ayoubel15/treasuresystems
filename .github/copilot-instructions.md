# TREASURE SYSTEMS project instructions

## Product goals
- Build a premium AI automation agency website for TREASURE SYSTEMS.
- Prioritize trust, clarity, conversion, accessibility, and technical quality.
- Keep the dark green / emerald visual system consistent with the brand palette.
- Avoid generic AI aesthetics, neon overload, and unsupported claims.

## Architecture rules
- Keep the existing Vite + React + TypeScript + Tailwind setup unless a specific issue proves otherwise.
- Prefer minimal, efficient component changes instead of large rewrites.
- Use the existing language context for English/Arabic localization.
- Preserve working booking functionality and any valid contact destinations.
- If Supabase env vars are missing, fail gracefully in the UI rather than fabricating success states.

## Design rules
- Use the official palette: background #080A09, dark green #123D2A, primary green #1FA463, accent green #39FF88, white #F5F7F6.
- Use professional spacing, strong hierarchy, and restrained motion.
- Keep animations subtle and reduced-motion aware.
- Favor technical diagrams, real product demos, and clear service explanations over stock imagery.

## Quality & validation
- Run the production build after significant changes.
- Run type checking and ESLint when adjusting code.
- Do not claim tests pass without actually running them.
- For any new tooling, prefer lightweight, compatible libraries and document why they are needed.

## Repo conventions
- Use path aliases via @ for imports from src.
- Keep naming consistent with the current codebase.
- Use semantic HTML, accessible labels, and visible focus states.
- Keep SEO metadata and structured copy aligned with the real business offer.
