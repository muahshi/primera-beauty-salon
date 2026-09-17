import React from 'react';
import BIZ from '../siteConfig';

// TODO (CLIENT): Yeh placeholder images hain — koi image-scraping tool
// Google Business Profile ya Instagram se photos automatically nahi utha
// sakta (no public API access to those photos from here). Client ke
// Instagram (@primerabeautysalon) ya unki Google Business Profile se
// asli before/after photos export karke public/images/ me daal do, phir
// neeche wali list update kar dena.
export default function ResultsGallery() {
  const images = [
    "/images/result1.png",
    "/images/result2.png",
    "/images/result3.png",
    "/images/result4.png",
    "/images/result5.png",
    "/images/result6.png"
  ];

  return (
    <section id="results" className="py-24 bg-zinc-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Real Transformations</h3>
          <h2 className="text-4xl md:text-6xl font-luxury font-bold text-white">RESULTS THAT SPEAK</h2>
        </div>
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((img, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl break-inside-avoid shadow-2xl border border-white/5">
              <img src={img} alt={`Salon Result ${i + 1}`} className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-sm">
                <span className="border border-fuchsia-500 text-fuchsia-400 px-6 py-2 rounded-full font-modern text-xs tracking-widest uppercase font-bold">Before / After</span>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href={BIZ.instagramUrl} target="_blank" rel="noreferrer" className="inline-block border border-fuchsia-600 text-fuchsia-500 hover:bg-fuchsia-600 hover:text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300">
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
}
