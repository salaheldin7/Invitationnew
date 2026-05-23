export default function VideoIntroSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #120204 0%, #1b0509 60%, #22060c 100%)',
      }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/home.mov"
        style={{ filter: 'saturate(1.05) brightness(0.82) contrast(1.08)' }}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(12, 2, 4, 0.45) 0%, rgba(18, 5, 9, 0.25) 50%, rgba(24, 6, 11, 0.6) 100%)',
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          <LogoMark />
          <p className="mt-6 text-[13px] sm:text-xs tracking-[0.35em] uppercase font-serif-elegant text-[#f8f1e8]/90">
            Scroll to continue
          </p>
          
          {/* Explicitly colored, un-bugged Arabic text */}
          <p
            className="mt-2 text-[14px] sm:text-base font-sans tracking-[0.1em] antialiased"
            style={{ 
              color: '#f8f1e8', 
              opacity: 0.9,
              fontFamily: 'inherit' /* Fallback over rule-breaking custom font */
            }}
            dir="rtl"
          >
            اسحب للاستمرار
          </p>
        </div>
      </div>
    </section>
  );
}

function LogoMark() {
  return (
    <div
      className="relative translate-y-4 sm:translate-y-6"
      style={{ isolation: 'isolate' }}
    >
      <div
        className="absolute inset-0 -z-10 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.25) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(12px)',
        }}
      />
      <img
        src="/logo/logo2.PNG"
        alt="Karim and Nada monogram"
        className="h-[25rem] w-[25rem] sm:h-[30rem] sm:w-[30rem] object-contain"
        style={{
          opacity: 0.7,
          mixBlendMode: 'screen',
          filter: 'drop-shadow(0 24px 60px rgba(0,0,0,0.45))',
        }}
      />
    </div>
  );
}