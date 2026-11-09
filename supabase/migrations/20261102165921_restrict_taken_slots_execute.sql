/*
# Restrict taken_slots to the anon role

1. Modified Functions
- `taken_slots(d date)`: execute permission is now granted only to the anon role (website visitors), matching the booking form's needs.

2. Security
- Removed execute permission from the authenticated role and from PUBLIC.
- No table or row access changed.

3. Important Notes
- Safe to re-run; the statements are idempotent.
*/

REVOKE EXECUTE ON FUNCTION public.taken_slots(date) FROM PUBLIC, authenticated;
GRANT EXECUTE ON FUNCTION public.taken_slots(date) TO anon;
