# Treasure Systems

Single-page website for Treasure Systems, an AI automation agency in Algeria. It presents the services and projects, and lets visitors book a study session.

Arabic is the default language (right-to-left), with an English toggle in the menu. The choice is remembered on the visitor's device.

## Running locally

1. Install dependencies with `npm install`.
2. Copy `.env.example` to `.env` and fill in the Supabase values.
3. Start the dev server with `npm run dev`.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_ANON_KEY` | Supabase public anon key (never use the service_role key in the browser) |
| `VITE_VIDEO_HERO`, `VITE_VIDEO_ABOUT`, `VITE_VIDEO_METRICS`, `VITE_VIDEO_SERVICES`, `VITE_VIDEO_FOOTER` | Optional background video URLs per section. When empty, an animated emerald glow is shown instead. |

## Bookings

Bookings are stored in the `bookings` table in Supabase.

- Visitors can only insert bookings. They cannot read, edit or delete anyone else's booking.
- Bookings are limited to Sunday through Thursday, from today onward.
- A time slot can only be held by one active booking. Cancelled bookings free the slot again.
- The `taken_slots` database function returns only booked times for a day, with no personal data.

## Deployment

The project includes `vercel.json` with a rewrite that sends all paths to `index.html`, so it deploys as a single-page app on Vercel. Set the environment variables above in the hosting project settings.

## Scripts

- `npm run dev` starts the development server.
- `npm run build` creates the production build in `dist`.
- `npm run typecheck` checks the TypeScript types.
- `npm run lint` runs the linter.
