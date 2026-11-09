import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Metrics from '@/components/Metrics';
import Navbar from '@/components/Navbar';
import Process from '@/components/Process';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Splash from '@/components/Splash';
import Trust from '@/components/Trust';
import BookingModal from '@/components/booking/BookingModal';
import { LanguageProvider } from '@/context/LanguageContext.tsx';

const SPLASH_DURATION_MS = 800;

function Site() {
  const [splashVisible, setSplashVisible] = useState(true);
  const [bookingOpen, setBookingOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setSplashVisible(false), SPLASH_DURATION_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const openBooking = useCallback(() => setBookingOpen(true), []);
  const closeBooking = useCallback(() => setBookingOpen(false), []);

  return (
    <>
      <AnimatePresence>{splashVisible && <Splash key="splash" />}</AnimatePresence>
      <Navbar onBook={openBooking} />
      <main>
        <Hero onBook={openBooking} />
        <About />
        <Metrics />
        <Trust />
        <Services />
        <Projects />
        <Process />
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
