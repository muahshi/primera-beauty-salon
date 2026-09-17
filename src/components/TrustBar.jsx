import React from 'react';
import { Star, MapPin, Clock, Sparkles } from 'lucide-react';
import BIZ from '../siteConfig';

// Rating & review count pulled from the live Google Business Profile —
// update BIZ.rating / BIZ.reviewCount in siteConfig.js if it changes.
export default function TrustBar() {
  return (
    <section className="py-12 border-y border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/5 text-center">
          <div className="px-4 group">
            <div className="text-4xl md:text-5xl font-luxury font-bold text-white mb-2 flex justify-center items-center gap-2 group-hover:text-fuchsia-400 transition-colors">
              <Star className="w-8 h-8 text-fuchsia-500 fill-fuchsia-500" /> {BIZ.rating}
            </div>
            <p className="text-zinc-500 text-xs font-modern font-bold tracking-[0.2em] uppercase">{BIZ.reviewCount}+ Google Reviews</p>
          </div>
          <div className="px-4 group">
            <div className="text-4xl md:text-5xl font-luxury font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors flex justify-center">
              <Clock className="w-8 h-8" />
            </div>
            <p className="text-zinc-500 text-xs font-modern font-bold tracking-[0.2em] uppercase">Open 7 Days</p>
          </div>
          <div className="px-4 group">
            <div className="text-4xl md:text-5xl font-luxury font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors">{BIZ.services.length}+</div>
            <p className="text-zinc-500 text-xs font-modern font-bold tracking-[0.2em] uppercase">Services Offered</p>
          </div>
          <div className="px-4 group">
            <div className="text-4xl md:text-5xl font-luxury font-bold text-white mb-2 group-hover:text-fuchsia-400 transition-colors flex justify-center">
              <MapPin className="w-8 h-8" />
            </div>
            <p className="text-zinc-500 text-xs font-modern font-bold tracking-[0.2em] uppercase">Al Rigga, Dubai</p>
          </div>
        </div>
      </div>
    </section>
  );
}
