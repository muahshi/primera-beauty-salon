import React from 'react';
import { Phone, MapPin } from 'lucide-react';
import BIZ from '../siteConfig';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <a href={BIZ.googleMapsUrl} target="_blank" rel="noreferrer" className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-zinc-800 transition-colors" aria-label="Directions">
        <MapPin className="w-5 h-5" />
      </a>
      {/* TikTok icon — add once client shares their real handle (see siteConfig.js tiktokUrl) */}
      {BIZ.tiktokUrl && (
        <a href={BIZ.tiktokUrl} target="_blank" rel="noreferrer" className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-zinc-800 transition-colors" aria-label="TikTok">
          <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/></svg>
        </a>
      )}
      <a href={`tel:+${BIZ.phoneE164}`} className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-full flex items-center justify-center text-white shadow-xl hover:bg-zinc-800 transition-colors" aria-label="Call">
        <Phone className="w-5 h-5" />
      </a>
      <a href={`https://wa.me/${BIZ.phoneE164}`} target="_blank" rel="noreferrer" className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform" aria-label="WhatsApp">
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-current"><path d="M20.502 3.498a11.94 11.94 0 0 0-8.47-3.51C5.43 0 0 5.43 0 12.032c0 2.112.551 4.17 1.597 5.986L.004 24l6.142-1.611a11.974 11.974 0 0 0 5.885 1.545h.004C18.634 23.934 24 18.502 24 11.9A11.94 11.94 0 0 0 20.502 3.498zM12.034 21.93c-1.787 0-3.535-.48-5.066-1.387l-.363-.217-3.766.988 1.006-3.671-.237-.377a9.98 9.98 0 0 1-1.526-5.367C2.08 6.367 6.447 2 12.034 2c2.724 0 5.285 1.06 7.21 2.986S22 9.473 22 12.2c0 5.534-4.367 9.9-9.966 9.9h-.004v-.17zM17.51 14.453c-.301-.15-1.78-.88-2.056-.98-.276-.1-.476-.15-.677.15-.2.302-.777.98-.953 1.182-.175.201-.35.226-.652.076-.301-.15-1.27-.468-2.421-1.496-.897-.803-1.503-1.794-1.678-2.096-.175-.302-.018-.466.132-.616.136-.136.301-.351.452-.527.151-.176.201-.301.301-.502.101-.202.05-.377-.025-.527-.075-.15-.677-1.632-.927-2.234-.244-.59-.492-.51-.676-.52-.175-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.03-1.053 2.512s1.078 2.914 1.229 3.115c.15.2 2.127 3.245 5.154 4.548.72.311 1.28.498 1.718.638.723.23 1.38.197 1.898.12.58-.086 1.78-.728 2.031-1.431.25-.703.25-1.306.175-1.432-.075-.125-.276-.2-.577-.35z"/></svg>
      </a>
    </div>
  );
}
