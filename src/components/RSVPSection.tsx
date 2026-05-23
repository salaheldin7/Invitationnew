import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const RSVP_ENDPOINT = import.meta.env.VITE_RSVP_ENDPOINT ?? '';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function RSVPSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState({ name: '', guests: '', attending: 'yes', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    if (!RSVP_ENDPOINT) {
      setStatus('error');
      setErrorMessage('RSVP endpoint is not configured.');
      return;
    }

    const attendanceValue = form.attending === 'yes' ? 'Yes' : 'No';
    const guestsValue = form.attending === 'yes' ? (form.guests || '0') : '0';

    try {
      await fetch(RSVP_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          name: form.name,
          attendance: attendanceValue,
          guests: guestsValue,
          message: form.message,
          createdAt: new Date().toISOString(),
        }).toString(),
      });

      setStatus('success');
      setForm({ name: '', guests: '', attending: 'yes', message: '' });
    } catch {
      setStatus('error');
      setErrorMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section
      ref={ref}
      className="relative py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #1b0509 0%, #2a0a12 55%, #140507 100%)' }}
    >
      <div className="max-w-md mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-5xl lux-text mb-2">RSVP</h2>
          <p className="font-arabic text-sm lux-text-soft" dir="rtl">
            الرجاء تأكيد الحضور
          </p>
          <p className="font-serif-elegant italic lux-text-faint text-sm">
            Kindly confirm your attendance.
          </p>

          <div className="golden-divider w-40 mx-auto mt-4" />
        </motion.div>

        {status === 'success' ? (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mx-auto mb-6">
              <WaxSealSmall />
            </div>
            <h3 className="font-script text-4xl lux-text mb-3">Thank You!</h3>
            <p className="font-serif-elegant lux-text-soft italic">
              We look forward to celebrating with you.
            </p>
          </motion.div>
        ) : (
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-5"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="rounded-sm px-8 py-8 lux-panel">
              {/* Name */}
              <div className="mb-5">
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <label className="font-cinzel text-xs tracking-widest lux-text-faint uppercase">
                    Full Name
                  </label>
                  <span className="font-arabic text-xs lux-text-faint text-right" dir="rtl">
                    الاسم الكامل
                  </span>
                </div>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-[rgba(248,241,232,0.25)] focus:border-[#e6c98a] outline-none font-serif-elegant text-[#f8f1e8] placeholder:text-[#d8c3aa]/60 py-2 text-base transition-colors"
                  placeholder="Your name..."
                />
              </div>

              {/* Attending */}
              <div className="mb-5">
                <div className="mb-3 flex items-baseline justify-between gap-3">
                  <label className="font-cinzel text-xs tracking-widest lux-text-faint uppercase">
                    Will you attend?
                  </label>
                  <span className="font-arabic text-xs lux-text-faint text-right" dir="rtl">
                    هل ستحضر؟
                  </span>
                </div>
                <div className="flex gap-4">
                  {['yes', 'no'].map(v => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setForm({ ...form, attending: v })}
                      className={`flex-1 py-2 border transition-all font-cinzel text-xs tracking-widest uppercase ${
                        form.attending === v
                          ? 'border-[#e6c98a] bg-[#3b0f1a] text-[#f8f1e8] shadow-[0_10px_24px_rgba(5,2,4,0.45)]'
                          : 'border-[rgba(248,241,232,0.25)] text-[#e8d7c2] hover:border-[#e6c98a]'
                      }`}
                    >
                      {v === 'yes' ? 'Joyfully accepts' : 'Regretfully declines'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of guests */}
              {form.attending === 'yes' && (
                <div className="mb-5">
                  <div className="mb-2 flex items-baseline justify-between gap-3">
                    <label className="font-cinzel text-xs tracking-widest lux-text-faint uppercase">
                      Number of Guests
                    </label>
                    <span className="font-arabic text-xs lux-text-faint text-right" dir="rtl">
                      عدد الضيوف
                    </span>
                  </div>
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={form.guests}
                    onChange={e =>
                      setForm({
                        ...form,
                        guests: e.target.value.replace(/[^0-9]/g, ''),
                      })
                    }
                    className="w-full bg-transparent border-b border-[rgba(248,241,232,0.25)] focus:border-[#e6c98a] outline-none font-serif-elegant text-[#f8f1e8] placeholder:text-[#d8c3aa]/60 py-2 text-base transition-colors"
                    placeholder="0"
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <div className="mb-2 flex items-baseline justify-between gap-3">
                  <label className="font-cinzel text-xs tracking-widest lux-text-faint uppercase">
                    Message for the Couple
                  </label>
                  <span className="font-arabic text-xs lux-text-faint text-right" dir="rtl">
                    رسالة للعروسين
                  </span>
                </div>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full bg-transparent border-b border-[rgba(248,241,232,0.25)] focus:border-[#e6c98a] outline-none font-serif-elegant text-[#f8f1e8] placeholder:text-[#d8c3aa]/60 py-2 text-base resize-none transition-colors"
                  placeholder="Your warm wishes..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 font-cinzel text-sm tracking-widest uppercase text-[#f8f1e8] transition-all hover:opacity-90 active:scale-98"
              style={{
                background: 'linear-gradient(135deg, #7a1f2c 0%, #c9a96e 45%, #5f1522 100%)',
                boxShadow: '0 6px 26px rgba(7, 2, 4, 0.6)',
              }}
            >
              {status === 'loading' ? 'Sending...' : 'Send My Response'}
            </button>

            {status === 'error' && (
              <div className="text-sm text-[#e8d7c2] text-center">
                {errorMessage}
              </div>
            )}
          </motion.form>
        )}
      </div>
    </section>
  );
}

function WaxSealSmall() {
  return (
    <svg width="70" height="70" viewBox="0 0 80 80" fill="none" className="mx-auto">
      <ellipse cx="40" cy="43" rx="32" ry="30" fill="rgba(0,0,0,0.06)" />
      <path
        d="M40 10 C52 10 66 17 68 28 C70 38 66 50 58 57 C50 64 28 66 18 56 C8 46 10 26 20 17 C27 11 33 10 40 10Z"
        fill="url(#sealGrad2)"
      />
      <circle cx="40" cy="37" r="20" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
      <text x="40" y="43" textAnchor="middle" fontFamily="'Great Vibes', cursive" fontSize="14" fill="rgba(255,255,255,0.6)">
        K N
      </text>
      <defs>
        <radialGradient id="sealGrad2" cx="40%" cy="35%" r="50%">
          <stop offset="0%" stopColor="#e0d5c0" />
          <stop offset="50%" stopColor="#c9a96e" />
          <stop offset="100%" stopColor="#a07c3a" />
        </radialGradient>
      </defs>
    </svg>
  );
}
