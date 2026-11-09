import { getSupabaseClient } from '@/lib/supabase';

export const SLOTS = ['10:00', '11:00', '12:00', '14:00', '15:00', '16:00'] as const;

export type BusinessType = 'ecommerce' | 'agency' | 'other';
export type Interest = 'order_wise' | 'lead_wise' | 'custom' | 'not_sure';

export type BookingInput = {
  name: string;
  phone: string;
  businessType: BusinessType;
  interest: Interest;
  date: string;
  slot: string;
  message: string;
  lang: 'ar' | 'en';
};

const ALGIERS_TZ = 'Africa/Algiers';
const SUNDAY = 0;
const THURSDAY = 4;

export function getBookableDays(count = 14): string[] {
  const todayIso = new Intl.DateTimeFormat('en-CA', { timeZone: ALGIERS_TZ }).format(new Date());
  const [year, month, day] = todayIso.split('-').map(Number);
  const days: string[] = [];

  for (let offset = 1; offset <= count; offset++) {
    const date = new Date(Date.UTC(year, month - 1, day + offset));
    const weekday = date.getUTCDay();
    if (weekday >= SUNDAY && weekday <= THURSDAY) {
      days.push(date.toISOString().slice(0, 10));
    }
  }

  return days;
}

export function formatBookingDay(iso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  }).format(new Date(`${iso}T00:00:00Z`));
}

export async function fetchTakenSlots(date: string): Promise<string[]> {
  const client = getSupabaseClient();
  const { data, error } = await client.rpc('taken_slots', { d: date });
  if (error) throw error;
  if (!Array.isArray(data)) throw new Error('Unexpected response for taken slots');
  return data.filter((slot): slot is string => typeof slot === 'string');
}

export async function insertBooking(input: BookingInput): Promise<void> {
  const client = getSupabaseClient();
  const { error } = await client.from('bookings').insert({
    name: input.name,
    phone: input.phone,
    business_type: input.businessType,
    service: input.interest,
    booking_date: input.date,
    slot: input.slot,
    message: input.message || null,
    status: 'new',
    lang: input.lang,
  });
  if (error) throw error;
}
