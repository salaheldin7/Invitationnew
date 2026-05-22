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
      style={{ background: 'linear-gradient(180deg, #faf8f3 0%, #f5ede0 100%)' }}
    >
      <div className="max-w-md mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-script text-5xl text-stone-700 mb-2">RSVP</h2>
          <p className="font-arabic text-sm text-stone-500" dir="rtl">
            الرجاء تأكيد الحضور
          </p>
          <p className="font-serif-elegant italic text-stone-400 text-sm">
            Kindly respond by March 1, 2026
          </p>
          <p className="font-arabic text-xs text-stone-400" dir="rtl">
            يرجى الرد قبل 1 مارس 2026
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
            <h3 className="font-script text-4xl text-stone-700 mb-3">Thank You!</h3>
            <p className="font-serif-elegant text-stone-500 italic">
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
            <div
              className="rounded-sm px-8 py-8"
              style={{
                background: 'linear-gradient(135deg, #faf8f3 0%, #f5ede0 100%)',
                boxShadow: '0 8px 40px rgba(0,0,0,0.07)',
                border: '1px solid rgba(201, 169, 110, 0.2)',
              }}
            >
              {/* Name */}
              <div className="mb-5">
                <label className="font-cinzel text-xs tracking-widest text-stone-400 uppercase block mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-stone-300 focus:border-stone-500 outline-none font-serif-elegant text-stone-700 py-2 text-base transition-colors"
                  placeholder="Your name..."
                />
              </div>

              {/* Attending */}
              <div className="mb-5">
                <label className="font-cinzel text-xs tracking-widest text-stone-400 uppercase block mb-3">
                  Will you attend?
                </label>
                <div className="flex gap-4">
                  {['yes', 'no'].map(v => (
                    <button
                      key={v}
                      type="button"
                      onClick={() => setForm({ ...form, attending: v })}
                      className={`flex-1 py-2 border transition-all font-cinzel text-xs tracking-widest uppercase ${
                        form.attending === v
                          ? 'border-stone-500 bg-stone-700 text-stone-100'
                          : 'border-stone-300 text-stone-500 hover:border-stone-400'
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
                  <label className="font-cinzel text-xs tracking-widest text-stone-400 uppercase block mb-2">
                    Number of Guests
                  </label>
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
                    className="w-full bg-transparent border-b border-stone-300 focus:border-stone-500 outline-none font-serif-elegant text-stone-700 py-2 text-base transition-colors"
                    placeholder="0"
                  />
                </div>
              )}

              {/* Message */}
              <div>
                <label className="font-cinzel text-xs tracking-widest text-stone-400 uppercase block mb-2">
                  Message for the Couple
                </label>
                <textarea
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  rows={3}
                  className="w-full bg-transparent border-b border-stone-300 focus:border-stone-500 outline-none font-serif-elegant text-stone-700 py-2 text-base resize-none transition-colors"
                  placeholder="Your warm wishes..."
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full py-4 font-cinzel text-sm tracking-widest uppercase text-stone-100 transition-all hover:opacity-90 active:scale-98"
              style={{
                background: 'linear-gradient(135deg, #8b6914 0%, #c9a96e 50%, #8b6914 100%)',
                boxShadow: '0 4px 20px rgba(139, 105, 20, 0.3)',
              }}
            >
              {status === 'loading' ? 'Sending...' : 'Send My Response'}
            </button>

            {status === 'error' && (
              <div className="text-sm text-stone-500 text-center">
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
