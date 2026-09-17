import React from 'react';
import { Instagram, Facebook, Ghost, Phone } from 'lucide-react';
import BIZ from '../siteConfig';

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/5 text-center font-modern relative">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-luxury font-bold tracking-[0.2em] uppercase mb-6">
          <span className="text-fuchsia-500">Primera</span> Beauty Salon
        </h2>
        <div className="flex justify-center gap-6 mb-8">
          <a href={BIZ.instagramUrl} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-fuchsia-500 transition-colors" aria-label="Instagram">
            <Instagram className="w-6 h-6" />
          </a>
          <a href={BIZ.facebookUrl} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-fuchsia-500 transition-colors" aria-label="Facebook">
            <Facebook className="w-6 h-6" />
          </a>
          <a href={BIZ.snapchatUrl} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-fuchsia-500 transition-colors" aria-label="Snapchat">
            <Ghost className="w-6 h-6" />
          </a>
          {BIZ.tiktokUrl && (
            <a href={BIZ.tiktokUrl} target="_blank" rel="noreferrer" className="text-zinc-500 hover:text-fuchsia-500 transition-colors" aria-label="TikTok">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/></svg>
            </a>
          )}
          <a href={`tel:+${BIZ.phoneE164}`} className="text-zinc-500 hover:text-fuchsia-500 transition-colors" aria-label="Call">
            <Phone className="w-6 h-6" />
          </a>
        </div>
        <p className="text-zinc-600 text-sm tracking-widest uppercase mb-2">© {new Date().getFullYear()} {BIZ.name}.</p>
        <p className="text-zinc-700 text-xs">{BIZ.addressSingleLine}</p>
      </div>
    </footer>
  );
}
