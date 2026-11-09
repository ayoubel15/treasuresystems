import { useState, type FormEvent } from 'react';
import { ArrowUpLeft, CalendarDays, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

type ContactProps = {
  onBook: () => void;
};

type ContactChannel = 'whatsapp' | 'email';

const WHATSAPP_NUMBER = '213662542006';
const CONTACT_EMAIL = 'treasuresystems15@gmail.com';

export default function Contact({ onBook }: ContactProps) {
  const { t } = useLanguage();
  const [channel, setChannel] = useState<ContactChannel>('whatsapp');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const store = String(formData.get('store') ?? '').trim();
    const link = String(formData.get('link') ?? '').trim();
    const challenge = String(formData.get('challenge') ?? '').trim();
    const contact = String(formData.get('contact') ?? '').trim();
    const message = [
      `${t.contact.name}: ${name}`,
      `${t.contact.store}: ${store}`,
      `${t.contact.link}: ${link}`,
      `${t.contact.challenge}: ${challenge}`,
      `${t.contact.channel}: ${channel === 'whatsapp' ? t.contact.whatsapp : t.contact.email}`,
      `${t.contact.contactDetail}: ${contact}`,
    ].join('\n');

    if (channel === 'whatsapp') {
      window.location.assign(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`);
      return;
    }

    const subject = encodeURIComponent(t.contact.mailSubject);
    window.location.assign(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${encodeURIComponent(message)}`);
  };

  const inputClass = 'w-full border border-white/25 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/70 outline-none focus:border-[#39FF88] focus:ring-2 focus:ring-[#39FF88]/20';

  return (
    <section id="contact" className="scroll-mt-20 bg-ink px-5 py-20 text-paper sm:px-8 sm:py-28 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
        <div className="flex flex-col items-start">
          <p className="eyebrow text-[#B6D7C2]">{t.contact.eyebrow}</p>
          <h2 className="font-display mt-6 text-4xl leading-tight sm:text-5xl">{t.contact.heading}</h2>
          <p className="mt-6 max-w-lg text-base leading-8 text-paper/70">{t.contact.description}</p>
          <button type="button" onClick={onBook} className="button-outline mt-8">
            <CalendarDays aria-hidden="true" className="h-4 w-4" />
            {t.contact.bookingCta}
          </button>
          <div className="mt-12 flex flex-wrap gap-x-6 gap-y-3 text-sm text-paper/70">
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 hover:text-white"><Mail aria-hidden="true" className="h-4 w-4" />{CONTACT_EMAIL}</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="inline-flex items-center gap-2 hover:text-white"><MessageCircle aria-hidden="true" className="h-4 w-4" />WhatsApp</a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-forest p-5 sm:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm">
              <span>{t.contact.name}</span>
              <input className={inputClass} name="name" autoComplete="name" required maxLength={80} />
            </label>
            <label className="flex flex-col gap-2 text-sm">
              <span>{t.contact.store}</span>
              <input className={inputClass} name="store" required maxLength={100} />
            </label>
          </div>
          <label className="mt-5 flex flex-col gap-2 text-sm">
            <span>{t.contact.link}</span>
            <input className={inputClass} name="link" type="text" required maxLength={200} />
          </label>
          <label className="mt-5 flex flex-col gap-2 text-sm">
            <span>{t.contact.challenge}</span>
            <textarea className={`${inputClass} min-h-28 resize-y`} name="challenge" required maxLength={800} />
          </label>
          <fieldset className="mt-5">
            <legend className="mb-2 text-sm">{t.contact.channel}</legend>
            <div className="flex gap-2">
              {(['whatsapp', 'email'] as const).map((value) => (
                <label key={value} className={`inline-flex cursor-pointer items-center gap-2 border px-3 py-2 text-sm ${channel === value ? 'border-[#39FF88] text-white' : 'border-white/25 text-white/65'}`}>
                  <input type="radio" name="channel" value={value} checked={channel === value} onChange={() => setChannel(value)} className="accent-[#39FF88]" />
                  {value === 'whatsapp' ? t.contact.whatsapp : t.contact.email}
                </label>
              ))}
            </div>
          </fieldset>
          <label className="mt-5 flex flex-col gap-2 text-sm">
            <span>{t.contact.contactDetail}</span>
            <input
              className={`${inputClass} text-start`}
              name="contact"
              type={channel === 'email' ? 'email' : 'tel'}
              autoComplete={channel === 'email' ? 'email' : 'tel'}
              dir="ltr"
              required
              maxLength={120}
            />
          </label>
          <button type="submit" className="button-accent mt-6 w-full sm:w-auto">
            {t.contact.submit}
            <ArrowUpLeft aria-hidden="true" className="h-4 w-4" />
          </button>
          <p className="mt-4 text-xs leading-6 text-white/55">{t.contact.privacy}</p>
        </form>
      </div>
    </section>
  );
}