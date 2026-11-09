/*
# Create bookings table with anon-insert-only access

1. New Tables
- `bookings`: one row per session request submitted from the website.
  - `id` (uuid, primary key, generated automatically)
  - `created_at` (timestamp, defaults to now)
  - `name` (text, 2 to 80 characters)
  - `phone` (text, 8 to 20 characters, digits with optional leading +, spaces or dashes)
  - `business_type` (text: ecommerce, agency, other)
  - `service` (text: order_wise, lead_wise, custom, not_sure)
  - `booking_date` (date, the day of the session)
  - `slot` (text, time in HH:MM 24-hour format)
  - `message` (optional text, up to 600 characters)
  - `status` (text: new, confirmed, done, cancelled; defaults to new)
  - `lang` (text: ar or en)

2. Functions
- `taken_slots(d date)`: returns only the slot times already booked for a day (no personal data). Runs with owner rights so visitors can check availability without reading bookings.

3. Security
- Row level security enabled on `bookings`.
- Visitors (anon role) may only INSERT, and only when status is 'new', the date is today or later, and the date is Sunday to Thursday.
- No SELECT, UPDATE or DELETE access for visitors. Other people's bookings can never be read.
- `taken_slots` is executable by visitors only.

4. Important Notes
- A unique partial index on (booking_date, slot) prevents two active bookings for the same slot. Cancelled bookings do not block a slot.
- Statements are idempotent and safe to re-run.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 80),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 8 AND 20 AND phone ~ '^\+?[0-9][0-9 -]{7,19}$'),
  business_type text NOT NULL CHECK (business_type IN ('ecommerce', 'agency', 'other')),
  service text NOT NULL CHECK (service IN ('order_wise', 'lead_wise', 'custom', 'not_sure')),
  booking_date date NOT NULL,
  slot text NOT NULL CHECK (slot ~ '^[0-2][0-9]:[0-5][0-9]$'),
  message text CHECK (message IS NULL OR char_length(message) <= 600),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'confirmed', 'done', 'cancelled')),
  lang text NOT NULL DEFAULT 'ar' CHECK (lang IN ('ar', 'en'))
);

CREATE UNIQUE INDEX IF NOT EXISTS bookings_active_slot_unique
  ON bookings (booking_date, slot)
  WHERE status <> 'cancelled';

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

REVOKE ALL ON bookings FROM anon, authenticated;
GRANT INSERT ON bookings TO anon;

DROP POLICY IF EXISTS "anon_insert_new_bookings" ON bookings;
CREATE POLICY "anon_insert_new_bookings" ON bookings
  FOR INSERT
  TO anon
  WITH CHECK (
    status = 'new'
    AND booking_date >= current_date
    AND extract(dow FROM booking_date) BETWEEN 0 AND 4
  );

CREATE OR REPLACE FUNCTION public.taken_slots(d date)
RETURNS SETOF text
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT b.slot
  FROM public.bookings b
  WHERE b.booking_date = d
    AND b.status <> 'cancelled';
$$;

REVOKE EXECUTE ON FUNCTION public.taken_slots(date) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION public.taken_slots(date) TO anon;
