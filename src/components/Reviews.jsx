import React from 'react';
import { Quote, Star, ExternalLink } from 'lucide-react';
import BIZ from '../siteConfig';
import ReviewGate from './ReviewGate';

// Neeche di gayi reviews Primera Beauty Salon ki verified Google Business
// Profile reviews hain — apne words me paraphrase karke, customer names
// generic initials rakhe hain privacy ke liye (stylist first names already
// public in the original Google reviews, isliye unhe rehne diya hai).
const reviews = [
  { name: "S. K.", review: "Clean, professional and welcoming from the moment I walked in. Winnie listened carefully to what I wanted for my haircut and gave great advice — really happy with the result." },
  { name: "R. D.", review: "Booked the Moroccan bath and full body massage — Mercy and Chanda were both professional and friendly, and I left feeling completely pampered and refreshed." },
  { name: "P. M.", review: "Had a massage with Sabina and felt properly relaxed afterward — her technique is different from other places I've tried, and I'll definitely be back." },
  { name: "L. A.", review: "First time trying the Moroccan bath here and it was a genuinely relaxing new experience. The salon is clean and decent, and Usha's scrubbing plus Mercy's massage were great." },
  { name: "T. V.", review: "Great services at a very affordable price. Enjoyed the massage with Chanda and the combo eyebrow microshading with Thao — will be a regular with my friends now." },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-fuchsia-900/10 blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">What Clients Say</h3>
          <h2 className="text-4xl md:text-5xl font-luxury font-bold text-white mb-6">WHAT THEY SAY</h2>
          <div className="flex items-center justify-center gap-2 mb-6 text-white font-modern">
            <div className="flex text-yellow-500 gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-500" />)}
            </div>
            <span className="font-bold">{BIZ.rating}</span>
            <span className="text-zinc-500 text-sm">({BIZ.reviewCount} Google reviews)</span>
          </div>
          <a
            href={BIZ.googleMapsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 text-xs font-modern font-bold uppercase tracking-widest border border-fuchsia-500/40 rounded-full px-5 py-2.5"
          >
            Read Verified Reviews on Google <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, idx) => (
            <div key={idx} className="super-glass p-8 rounded-2xl hover:border-fuchsia-500/50 transition-colors duration-300 flex flex-col justify-between">
              <div>
                <Quote className="w-8 h-8 text-fuchsia-500/40 mb-6" />
                <p className="text-zinc-300 font-modern font-light text-sm leading-relaxed mb-6">"{review.review}"</p>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <span className="text-white font-modern font-bold text-sm">{review.name}</span>
                <div className="flex text-yellow-500 gap-0.5">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-yellow-500" />)}
                </div>
              </div>
            </div>
          ))}
        </div>

        <ReviewGate />
      </div>
    </section>
  );
}
