import React, { useState, useEffect } from 'react';
import { Star, Send, CheckCircle2 } from 'lucide-react';
import BIZ from '../siteConfig';

// ================================================================
// "AUTOMATIC" REVIEW FLOW — how it actually works
// ----------------------------------------------------------------
// Google does NOT allow any website/script to silently post a review
// to Google on someone's behalf — that requires the reviewer's own
// Google login and a manual submit on Google's own page (this is a
// Google policy + technical limit, not something any code can bypass
// safely or legally — tools that claim to "auto-post fake reviews"
// get businesses suspended from Google Business Profile).
//
// So this widget does the closest real, safe & effective version,
// used by most professional review-funnel tools:
//   1. Customer rates their visit right here on the site.
//   2. 4-5 stars  -> saved as a testimonial on THIS site, AND in the
//      same click we open Google's review page pre-loaded so all the
//      customer has to do is type + hit submit (one click away from
//      auto). We also notify the salon on WhatsApp instantly.
//   3. 1-3 stars  -> NOT sent to Google. It goes straight to the
//      salon's WhatsApp privately, so they can fix the issue before
//      it ever becomes a public review. This is standard reputation
//      management practice used by most salons/hotels.
//
// PERSISTENCE NOTE: testimonials below are stored in this browser's
// localStorage only (so every visitor doesn't yet see every other
// visitor's new review — that needs a tiny backend). Easiest real
// upgrade paths for Mubi:
//   - Google Sheets + Apps Script webhook (free, 20 min setup), or
//   - Formspree / Airtable / Firebase (free tier is enough here)
// Once that's wired, replace the two localStorage lines below with
// a fetch() call to that endpoint — everything else stays the same.
// ================================================================

const STORAGE_KEY = 'primera_site_reviews_v1';

export default function ReviewGate() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [siteReviews, setSiteReviews] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
      setSiteReviews(saved);
    } catch {
      setSiteReviews([]);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !name || !text) return;

    const entry = { name, text, rating, date: new Date().toISOString() };
    const updated = [entry, ...siteReviews].slice(0, 20);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}
    setSiteReviews(updated);

    const waText = encodeURIComponent(
      `New ${rating}-star review from ${name} (via website):\n\n"${text}"`
    );
    window.open(`https://wa.me/${BIZ.phoneE164}?text=${waText}`, '_blank');

    if (rating >= 4) {
      // Bhejo Google review page bhi, taaki customer wahin ek click me
      // apna review public post kar sake.
      window.open(BIZ.googleReviewWriteUrl, '_blank');
    }

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="super-glass rounded-2xl p-10 text-center max-w-xl mx-auto">
        <CheckCircle2 className="w-10 h-10 text-fuchsia-500 mx-auto mb-4" />
        <h4 className="text-white font-luxury font-bold text-xl mb-2">Shukriya, {name}!</h4>
        <p className="text-zinc-400 text-sm font-modern">
          {rating >= 4
            ? "We've opened Google Reviews in a new tab — please tap submit there too, it really helps us. 💜"
            : "Thanks for the honest feedback — our team will reach out on WhatsApp to make it right."}
        </p>
      </div>
    );
  }

  return (
    <div className="super-glass rounded-2xl p-8 md:p-10 max-w-xl mx-auto font-modern">
      <h4 className="text-white font-luxury font-bold text-2xl mb-2 text-center">Rate Your Visit</h4>
      <p className="text-zinc-500 text-xs text-center mb-6 uppercase tracking-widest">Takes 15 seconds</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex justify-center gap-2 mb-2">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              onClick={() => setRating(n)}
              onMouseEnter={() => setHover(n)}
              onMouseLeave={() => setHover(0)}
              aria-label={`${n} star`}
            >
              <Star
                className={`w-9 h-9 transition-colors ${
                  (hover || rating) >= n ? 'text-yellow-500 fill-yellow-500' : 'text-zinc-700'
                }`}
              />
            </button>
          ))}
        </div>

        <input
          required
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          className="w-full bg-transparent border border-white/20 rounded p-3 text-white focus:border-fuchsia-500 outline-none text-sm"
        />
        <textarea
          required
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Tell us about your visit..."
          rows={3}
          className="w-full bg-transparent border border-white/20 rounded p-3 text-white focus:border-fuchsia-500 outline-none text-sm resize-none"
        />

        <button
          type="submit"
          disabled={!rating}
          className="w-full flex items-center justify-center gap-2 bg-fuchsia-600 disabled:bg-zinc-800 disabled:text-zinc-500 text-white font-bold uppercase tracking-widest py-4 rounded text-xs hover:bg-fuchsia-500 transition-colors"
        >
          <Send className="w-4 h-4" /> Submit Review
        </button>
      </form>
    </div>
  );
}
