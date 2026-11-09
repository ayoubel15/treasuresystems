import { useCallback, useMemo, useRef, useState, type FormEvent, type ReactNode } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import BookingSchedule, { type SlotState } from '@/components/booking/BookingSchedule';
import { useLanguage } from '@/hooks/useLanguage';
import {
  fetchTakenSlots,
  getBookableDays,
  insertBooking,
  type BusinessType,
  type Interest,
} from '@/lib/bookings';

type FormValues = {
  name: string;
  phone: string;
  businessType: BusinessType;
  interest: Interest;
  date: string;
  slot: string;
  note: string;
  consent: boolean;
  website: string;
};

type FieldKey = 'name' | 'phone' | 'day' | 'slot' | 'consent' | 'message';
type FieldErrors = Partial<Record<FieldKey, boolean>>;

type Status = 'idle' | 'submitting' | 'success';

const INITIAL_VALUES: FormValues = {
  name: '',
  phone: '',
  businessType: 'ecommerce',
  interest: 'not_sure',
  date: '',
  slot: '',
  note: '',
  consent: false,
  website: '',
};

const PHONE_PATTERN = /^\+?[0-9][0-9 -]{7,19}$/;
const NOTE_MAX = 600;
const DUPLICATE_SLOT_CODE = '23505';

const inputClass =
  'w-full rounded-xl border border-cream/15 bg-ink px-4 py-3 text-sm text-cream placeholder:text-cream/40 outline-none transition-colors duration-200 focus:border-emerald focus-visible:ring-2 focus-visible:ring-emerald/40';

function validate(values: FormValues): FieldErrors {
  const errors: FieldErrors = {};
  const name = values.name.trim();
  const phone = values.phone.trim();

  if (name.length < 2 || name.length > 80) errors.name = true;
  if (phone.length < 8 || phone.length > 20 || !PHONE_PATTERN.test(phone)) errors.phone = true;
  if (!values.date) errors.day = true;
  if (!values.slot) errors.slot = true;
  if (values.note.trim().length > NOTE_MAX) errors.message = true;
  if (!values.consent) errors.consent = true;

  return errors;
}

function isDuplicateSlotError(error: unknown): boolean {
  return typeof error === 'object' && error !== null && 'code' in error && error.code === DUPLICATE_SLOT_CODE;
}

type BookingFormProps = {
  onClose: () => void;
};

export default function BookingForm({ onClose }: BookingFormProps) {
  const { t, lang } = useLanguage();
  const days = useMemo(() => getBookableDays(14), []);
  const [values, setValues] = useState<FormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [formError, setFormError] = useState('');
  const [slots, setSlots] = useState<SlotState>({ status: 'idle', taken: [] });
  const requestRef = useRef(0);
  const fields = t.booking.fields;

  const loadTakenSlots = useCallback(async (date: string) => {
    const requestId = ++requestRef.current;
    setSlots({ status: 'loading', taken: [] });
    try {
      const taken = await fetchTakenSlots(date);
      if (requestId === requestRef.current) setSlots({ status: 'ready', taken });
    } catch {
      if (requestId === requestRef.current) setSlots({ status: 'error', taken: [] });
    }
  }, []);

  const update = <K extends keyof FormValues>(key: K, value: FormValues[K]) => {
    setValues((current) => ({ ...current, [key]: value }));
  };

  const selectDate = (date: string) => {
    setValues((current) => ({ ...current, date, slot: '' }));
    setErrors((current) => ({ ...current, day: false, slot: false }));
    void loadTakenSlots(date);
  };

  const selectSlot = (slot: string) => {
    update('slot', slot);
    setErrors((current) => ({ ...current, slot: false }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status === 'submitting') return;

    if (values.website.trim() !== '') {
      setStatus('success');
      return;
    }

    const nextErrors = validate(values);
    setErrors(nextErrors);
    setFormError('');
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('submitting');
    try {
      await insertBooking({
        name: values.name.trim(),
        phone: values.phone.trim(),
        businessType: values.businessType,
        interest: values.interest,
        date: values.date,
        slot: values.slot,
        message: values.note.trim(),
        lang,
      });
      setStatus('success');
    } catch (error) {
      setStatus('idle');
      if (isDuplicateSlotError(error)) {
        setFormError(t.booking.slotTaken);
        setValues((current) => ({ ...current, slot: '' }));
        void loadTakenSlots(values.date);
      } else {
        setFormError(t.booking.failed);
      }
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start gap-5 py-6">
        <CheckCircle2 className="h-12 w-12 text-emerald" />
        <h3 className="font-display text-3xl uppercase text-cream">{t.booking.success.title}</h3>
        <p className="text-base leading-[1.5] text-cream/80">{t.booking.success.body}</p>
        <button
          type="button"
          onClick={onClose}
          className="rounded-full bg-emerald px-6 py-3 text-sm font-bold text-ink transition-colors hover:bg-emerald-light"
        >
          {t.booking.success.done}
        </button>
      </div>
    );
  }

  const submitting = status === 'submitting';

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-7">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label={fields.name} error={errors.name ? t.booking.errors.name : undefined}>
          <input
            type="text"
            name="name"
            autoComplete="name"
            maxLength={80}
            value={values.name}
            placeholder={fields.namePlaceholder}
            onChange={(event) => update('name', event.target.value)}
            className={inputClass}
          />
        </Field>

        <Field label={fields.phone} error={errors.phone ? t.booking.errors.phone : undefined}>
          <input
            type="tel"
            name="phone"
            autoComplete="tel"
            dir="ltr"
            value={values.phone}
            placeholder={fields.phonePlaceholder}
            onChange={(event) => update('phone', event.target.value)}
            className={`${inputClass} text-start`}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <ChoiceGroup
          legend={fields.businessType}
          value={values.businessType}
          options={t.booking.businessTypes}
          onChange={(value) => update('businessType', value as BusinessType)}
        />
        <ChoiceGroup
          legend={fields.interest}
          value={values.interest}
          options={t.booking.interests}
          onChange={(value) => update('interest', value as Interest)}
        />
      </div>

      <BookingSchedule
        days={days}
        selectedDate={values.date}
        onSelectDate={selectDate}
        slots={slots}
        selectedSlot={values.slot}
        onSelectSlot={selectSlot}
        dayInvalid={Boolean(errors.day)}
        slotInvalid={Boolean(errors.slot)}
      />

      <Field label={fields.note} error={errors.message ? t.booking.errors.message : undefined}>
        <textarea
          name="note"
          rows={3}
          maxLength={NOTE_MAX}
          value={values.note}
          placeholder={fields.notePlaceholder}
          onChange={(event) => update('note', event.target.value)}
          className={`${inputClass} resize-none`}
        />
        <p className="mt-1 text-end text-xs text-cream/60">
          {values.note.length}/{NOTE_MAX}
        </p>
      </Field>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -start-[10000px] top-auto h-px w-px overflow-hidden opacity-0"
      >
        <label>
          Website
          <input
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={values.website}
            onChange={(event) => update('website', event.target.value)}
          />
        </label>
      </div>

      <div className="flex flex-col gap-2">
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-[1.5] text-cream/85">
          <input
            type="checkbox"
            name="consent"
            checked={values.consent}
            onChange={(event) => update('consent', event.target.checked)}
            className="mt-1 h-4 w-4 shrink-0 cursor-pointer accent-emerald"
          />
          <span>{fields.consent}</span>
        </label>
        {errors.consent && <p className="text-xs text-red-400">{t.booking.errors.consent}</p>}
      </div>

      {formError && (
        <p role="alert" className="rounded-xl border border-red-400/40 bg-red-400/10 px-4 py-3 text-sm text-red-300">
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald px-7 py-4 text-sm font-bold text-ink transition-colors duration-300 hover:bg-emerald-light disabled:cursor-wait disabled:opacity-70"
      >
        {submitting && <Loader2 className="h-4 w-4 animate-spin" />}
        {submitting ? fields.submitting : fields.submit}
      </button>
    </form>
  );
}

type FieldProps = {
  label: string;
  error?: string;
  children: ReactNode;
};

function Field({ label, error, children }: FieldProps) {
  return (
    <label className="flex min-w-0 flex-col gap-2">
      <span className="text-xs uppercase tracking-[0.2em] text-cream/70">{label}</span>
      {children}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </label>
  );
}

type ChoiceGroupProps = {
  legend: string;
  value: string;
  options: { value: string; label: string }[];
  onChange: (value: string) => void;
};

function ChoiceGroup({ legend, value, options, onChange }: ChoiceGroupProps) {
  return (
    <fieldset className="flex min-w-0 flex-col gap-2">
      <legend className="mb-2 text-xs uppercase tracking-[0.2em] text-cream/70">{legend}</legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.value)}
              className={`rounded-full border px-4 py-2 text-xs transition-all duration-200 ${
                selected
                  ? 'border-emerald bg-emerald/15 text-emerald-light'
                  : 'border-cream/15 text-cream/80 hover:border-cream/40'
              }`}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
