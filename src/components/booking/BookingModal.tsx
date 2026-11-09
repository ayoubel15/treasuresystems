import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import BookingForm from '@/components/booking/BookingForm';
import { useLanguage } from '@/hooks/useLanguage';

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function BookingModal({ open, onClose }: BookingModalProps) {
  const { t } = useLanguage();

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="booking-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/85 backdrop-blur-sm sm:items-center sm:p-6"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 32 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            className="relative max-h-[92vh] w-full overflow-y-auto rounded-t-3xl border border-cream/15 bg-ink p-6 shadow-[0_24px_80px_rgba(0,0,0,0.7)] sm:max-w-2xl sm:rounded-3xl sm:p-10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id="booking-title" className="font-display text-3xl uppercase text-cream sm:text-4xl">
                  {t.booking.title}
                </h2>
                <p className="mt-2 text-sm leading-[1.5] text-cream/75">{t.booking.subtitle}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={t.booking.close}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-cream/15 text-cream transition-colors hover:border-emerald hover:text-emerald-light"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="relative mt-8">
              <BookingForm onClose={onClose} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
