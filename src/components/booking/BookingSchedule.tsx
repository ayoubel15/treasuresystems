import { SLOTS, formatBookingDay } from '@/lib/bookings';
import { useLanguage } from '@/hooks/useLanguage';

export type SlotState = {
  status: 'idle' | 'loading' | 'ready' | 'error';
  taken: string[];
};

type BookingScheduleProps = {
  days: string[];
  selectedDate: string;
  onSelectDate: (date: string) => void;
  slots: SlotState;
  selectedSlot: string;
  onSelectSlot: (slot: string) => void;
  dayInvalid: boolean;
  slotInvalid: boolean;
};

export default function BookingSchedule({
  days,
  selectedDate,
  onSelectDate,
  slots,
  selectedSlot,
  onSelectSlot,
  dayInvalid,
  slotInvalid,
}: BookingScheduleProps) {
  const { t, lang } = useLanguage();
  const locale = lang === 'ar' ? 'ar-DZ' : 'en-GB';
  const fields = t.booking.fields;

  return (
    <div className="flex flex-col gap-6">
      <fieldset className="min-w-0">
        <legend className="mb-3 text-xs uppercase tracking-[0.2em] text-cream/70">{fields.day}</legend>
        {days.length === 0 ? (
          <p className="text-sm text-cream/70">{fields.noDays}</p>
        ) : (
          <div className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-2">
            {days.map((day) => {
              const selected = day === selectedDate;
              return (
                <button
                  key={day}
                  type="button"
                  aria-pressed={selected}
                  onClick={() => onSelectDate(day)}
                  className={`snap-start shrink-0 rounded-2xl border px-4 py-3 text-sm transition-all duration-200 ${
                    selected
                      ? 'border-emerald bg-emerald/15 text-emerald-light'
                      : 'border-cream/15 text-cream/85 hover:border-cream/40'
                  }`}
                >
                  {formatBookingDay(day, locale)}
                </button>
              );
            })}
          </div>
        )}
        {dayInvalid && <p className="mt-2 text-xs text-red-400">{t.booking.errors.day}</p>}
      </fieldset>

      <fieldset className="min-w-0">
        <legend className="mb-3 text-xs uppercase tracking-[0.2em] text-cream/70">{fields.time}</legend>
        {!selectedDate ? (
          <p className="text-sm text-cream/70">{fields.selectDay}</p>
        ) : slots.status === 'loading' ? (
          <p className="text-sm text-cream/70">{fields.loadingSlots}</p>
        ) : slots.status === 'error' ? (
          <p className="text-sm text-red-400">{t.booking.errors.slotsLoad}</p>
        ) : (
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {SLOTS.map((slot) => {
              const taken = slots.taken.includes(slot);
              const selected = slot === selectedSlot;
              return (
                <button
                  key={slot}
                  type="button"
                  disabled={taken || slots.status !== 'ready'}
                  aria-pressed={selected}
                  onClick={() => onSelectSlot(slot)}
                  className={`rounded-xl border px-2 py-3 font-mono text-sm transition-all duration-200 disabled:cursor-not-allowed ${
                    taken
                      ? 'border-cream/10 text-cream/40 line-through'
                      : selected
                        ? 'border-emerald bg-emerald/15 text-emerald-light'
                        : 'border-cream/15 text-cream/85 hover:border-cream/40'
                  }`}
                >
                  <span className="block">{slot}</span>
                  {taken && (
                    <span className="block text-[10px] uppercase tracking-wider">{fields.taken}</span>
                  )}
                </button>
              );
            })}
          </div>
        )}
        {slotInvalid && <p className="mt-2 text-xs text-red-400">{t.booking.errors.slot}</p>}
      </fieldset>
    </div>
  );
}
