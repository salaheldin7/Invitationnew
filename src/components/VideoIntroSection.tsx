export default function VideoIntroSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #faf8f3 0%, #f5ede0 60%, #ede3d4 100%)',
      }}
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/home.mov"
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
            'linear-gradient(180deg, rgba(245, 237, 224, 0.35) 0%, rgba(250, 248, 243, 0.2) 50%, rgba(237, 227, 212, 0.5) 100%)',
        }}
      />
      <div className="absolute inset-6 sm:inset-10 rounded-[2px] border border-[#c9a96e]/35 pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex flex-col items-center">
          <LogoMark />
          <p className="mt-6 text-[10px] sm:text-xs tracking-[0.35em] uppercase font-serif-elegant text-stone-100/90">
            Scroll to continue
          </p>
          <p className="mt-2 text-xs sm:text-sm tracking-[0.25em] font-serif-elegant text-stone-100/80" dir="rtl">
            اسحب للاستمرار
          </p>
        </div>
      </div>
    </section>
  );
}

function LogoMark() {
  return (
    <div className="relative translate-y-4 sm:translate-y-6">
      <div
        className="absolute inset-0 -z-10 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)',
          filter: 'blur(12px)',
        }}
      />
      <img
        src="/logo/logo2.PNG"
        alt="Karim and Nada monogram"
        className="h-[30rem] w-[30rem] sm:h-[36rem] sm:w-[36rem] object-contain"
      />
    </div>
  );
}
