import { useState, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import EnvelopeIntro from './components/EnvelopeIntro';
import VideoIntroSection from './components/VideoIntroSection';
import HeroSection from './components/HeroSection';
import CountdownSection from './components/CountdownSection';
import LocationSection from './components/LocationSection';
import RSVPSection from './components/RSVPSection';
import FooterSection from './components/FooterSection';
import FloatingPetals from './components/FloatingPetals';

export default function App() {
  const [invitationOpen, setInvitationOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = useCallback(() => {
    setTimeout(() => setInvitationOpen(true), 400);
  }, []);

  const handleStartAudio = useCallback(async () => {
    try {
      await audioRef.current?.play();
    } catch {
      // Autoplay may be blocked until a user gesture.
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <EnvelopeIntro onOpen={handleOpen} onStartAudio={handleStartAudio} />
      <audio ref={audioRef} src="/audio/mayada.m4a" preload="auto" loop />

      <AnimatePresence>
        {invitationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FloatingPetals />
            <main className="relative z-10">
              <VideoIntroSection />
              <HeroSection />
              <CountdownSection />
              <LocationSection />
              <RSVPSection />
              <FooterSection />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
