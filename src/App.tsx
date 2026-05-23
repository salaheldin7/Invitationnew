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
    setInvitationOpen(true);
  }, []);

  const handleStartAudio = useCallback(async () => {
    try {
      const audio = audioRef.current;
      if (audio) {
        audio.volume = 1;
        await audio.play();
      }
    } catch {
      // blocked by browser autoplay policy — no-op
    }
  }, []);

  return (
    <div className="relative min-h-screen">
      <audio ref={audioRef} src="/audio/aiden.mp3" preload="auto" loop />

      <EnvelopeIntro onOpen={handleOpen} onStartAudio={handleStartAudio} />

      <AnimatePresence>
        {invitationOpen && (
          <motion.div
            key="invitation"
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