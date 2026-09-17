import React from 'react';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import BIZ from '../siteConfig';

export default function MapSection() {
  return (
    <section id="find-us" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Find Us</h3>
            <h2 className="text-4xl md:text-5xl font-luxury font-bold text-white mb-8">VISIT THE SALON</h2>
            <div className="space-y-8 font-modern">
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-4 rounded-full border border-white/10"><MapPin className="w-6 h-6 text-fuchsia-400" /></div>
                <div>
                  <h4 className="text-white font-bold tracking-widest uppercase mb-2">Address</h4>
                  <p className="text-zinc-400 leading-relaxed">
                    {BIZ.addressLines.map((line, i) => <React.Fragment key={i}>{line}<br/></React.Fragment>)}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-4 rounded-full border border-white/10"><Phone className="w-6 h-6 text-fuchsia-400" /></div>
                <div>
                  <h4 className="text-white font-bold tracking-widest uppercase mb-2">Contact</h4>
                  <p className="text-zinc-400">{BIZ.phoneDisplay}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-white/5 p-4 rounded-full border border-white/10"><Clock className="w-6 h-6 text-fuchsia-400" /></div>
                <div>
                  <h4 className="text-white font-bold tracking-widest uppercase mb-2">Hours</h4>
                  <p className="text-zinc-400">{BIZ.hoursDisplay}</p>
                </div>
              </div>
            </div>
            <a
              href={BIZ.googleMapsUrl}
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 mt-8 border border-white/20 text-white px-6 py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
            >
              Get Directions <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="w-full h-[500px] rounded-3xl overflow-hidden border border-white/10 relative">
            <div className="absolute inset-0 bg-fuchsia-500/10 mix-blend-color pointer-events-none z-10"></div>
            <iframe
              src={BIZ.googleMapsEmbedSrc}
              width="100%" height="100%" style={{ border: 0, filter: 'grayscale(1) contrast(1.2) opacity(0.8)' }} allowFullScreen="" loading="lazy" title="Salon Location">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
