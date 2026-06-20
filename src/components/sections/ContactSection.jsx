import { useState } from 'react';
import RevealSection from '../shared/RevealSection';
import GlassCard from '../shared/GlassCard';

const inputClasses =
  'w-full p-3 rounded-xl bg-chrome-50 dark:bg-chrome-800 border border-chrome-200 dark:border-chrome-700 outline-none focus:ring-2 focus:ring-accent/50 transition text-chrome-900 dark:text-chrome-100';

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <RevealSection id="contact">
      <div className="max-w-6xl mx-auto px-6 pt-20 sm:pt-28 pb-8 sm:pb-12">
        {/* Section Header */}
        <h2 className="text-3xl font-bold text-chrome-900 dark:text-chrome-100 text-center mb-1">
          Get in Touch
        </h2>
        <div className="w-12 h-1 bg-accent rounded-full mx-auto mb-12" />

        <div className="max-w-2xl mx-auto">
          <GlassCard>
            <div className="p-8 sm:p-12">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="text-4xl">🎉</div>
                  <p className="text-lg font-semibold text-chrome-900 dark:text-chrome-100">
                    Message Sent!
                  </p>
                  <p className="text-sm text-chrome-500 dark:text-chrome-400">
                    Thanks for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-chrome-700 dark:text-chrome-300 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-chrome-700 dark:text-chrome-300 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-chrome-700 dark:text-chrome-300 mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="What's on your mind?"
                      className={`${inputClasses} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-accent text-white rounded-xl px-8 py-3 font-semibold
                               hover:scale-[1.02] active:scale-[0.98] transition-transform
                               w-full sm:w-auto"
                  >
                    Send Message
                  </button>
                </form>
              )}


            </div>
          </GlassCard>
        </div>
      </div>
    </RevealSection>
  );
}

export default ContactSection;
