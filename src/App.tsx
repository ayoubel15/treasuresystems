import { useCallback, useState } from 'react';
import Contact from '@/components/Contact';
import Demonstration from '@/components/Demonstration';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Problems from '@/components/Problems';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Trust from '@/components/Trust';
import BookingModal from '@/components/booking/BookingModal';
import { LanguageProvider } from '@/context/LanguageContext.tsx';

function Site() {
  const [bookingOpen, setBookingOpen] = useState(false);

  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Services />
        <Demonstration />
        <Projects />
        <Trust />
        <Process />
        <FAQ />
        <Contact onBook={openBooking} />
      </main>
      <Footer onBook={openBooking} />
      <BookingModal open={bookingOpen} onClose={closeBooking} />
    </>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}
