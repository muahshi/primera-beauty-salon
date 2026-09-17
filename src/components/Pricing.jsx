import React from 'react';
import { Sparkles, Gem, Droplets } from 'lucide-react';
import BIZ from '../siteConfig';

// Pricing yahan client ke printed flyer se seedha liya gaya hai — koi
// "On Request" placeholder nahi, saari values real hain. Rate change ho to
// bas siteConfig.js me comboDeals / facialPrices / tenFor100 update karo,
// yeh poora section automatically refresh ho jayega.
export default function Pricing() {
  const waMsg = encodeURIComponent("Hi! I'd like to book an appointment at Primera Beauty Salon.");
  const waLink = `https://wa.me/${BIZ.phoneE164}?text=${waMsg}`;

  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Our Services & Pricing</h3>
          <h2 className="text-3xl md:text-5xl font-luxury font-bold text-white">Quality Services, Fair Prices</h2>
          <p className="text-zinc-500 text-sm mt-4 font-modern">All prices in AED. Tap any package to book on WhatsApp.</p>
        </div>

        {/* Combo Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {BIZ.comboDeals.map((deal, idx) => (
            <a
              key={idx}
              href={waLink}
              target="_blank" rel="noreferrer"
              className="bg-[#0a0a0a] border border-white/5 p-8 rounded-xl hover:border-fuchsia-500/50 transition-all duration-300 flex flex-col items-center text-center group cursor-pointer"
            >
              <Gem className="w-10 h-10 text-fuchsia-500 mb-4 drop-shadow-[0_0_15px_rgba(217,70,239,0.8)] group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
              <div className="text-3xl font-luxury font-bold text-white mb-3">AED {deal.price}</div>
              <p className="text-zinc-400 font-modern text-sm leading-relaxed mb-6">{deal.label}</p>
              <span className="text-fuchsia-500 text-xs font-bold uppercase tracking-widest group-hover:text-fuchsia-400 mt-auto">Book on WhatsApp</span>
            </a>
          ))}
        </div>

        {/* Facials */}
        <div className="mb-16">
          <h3 className="flex items-center justify-center gap-2 text-white font-luxury font-bold text-2xl mb-8">
            <Droplets className="w-5 h-5 text-fuchsia-500" /> Facials
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {BIZ.facialPrices.map((f, idx) => (
              <a
                key={idx}
                href={waLink}
                target="_blank" rel="noreferrer"
                className="bg-[#0a0a0a] border border-white/5 p-6 rounded-xl hover:border-fuchsia-500/50 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="text-2xl font-luxury font-bold text-fuchsia-400 mb-2">AED {f.price}</div>
                <p className="text-zinc-300 font-modern text-xs uppercase tracking-widest">{f.label}</p>
              </a>
            ))}
          </div>
        </div>

        {/* 10 Services for 100 AED */}
        <div className="super-glass rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            <h3 className="flex items-center gap-2 text-white font-luxury font-bold text-2xl md:text-3xl">
              <Sparkles className="w-6 h-6 text-fuchsia-500" /> {BIZ.tenFor100.creditsNeeded} Services for AED {BIZ.tenFor100.price}
            </h3>
            <a href={waLink} target="_blank" rel="noreferrer" className="bg-fuchsia-600 text-white px-6 py-2.5 rounded text-xs font-bold uppercase tracking-widest hover:bg-fuchsia-500 transition-colors whitespace-nowrap">
              Ask on WhatsApp
            </a>
          </div>
          <p className="text-zinc-500 text-sm font-modern mb-8">
            Mix &amp; match any services below — each has a credit value in brackets. Once your picks add up to {BIZ.tenFor100.creditsNeeded} credits, the whole set is a flat AED {BIZ.tenFor100.price}.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3 font-modern">
            {BIZ.tenFor100.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-baseline gap-2 border-b border-white/5 pb-2">
                <span className="text-zinc-300 text-sm">{item.name}</span>
                <span className="text-fuchsia-400 text-xs font-bold flex-shrink-0">({item.credits})</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-zinc-600 text-xs mt-8">*Full service list: {BIZ.services.join(', ')}.</p>
      </div>
    </section>
  );
}
