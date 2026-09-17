import React from 'react';
import { Instagram } from 'lucide-react';
import BIZ from '../siteConfig';

// TODO (MUBI/CLIENT): Real Instagram reel URLs client se lekar is array me
// daal do (fake/random post URLs daalna embed ko broken dikhayega) — format:
// "https://www.instagram.com/reel/XXXXXXXXXXX"
const instagramPosts = [
  // "https://www.instagram.com/reel/REPLACE_ME_1",
  // "https://www.instagram.com/reel/REPLACE_ME_2",
  // "https://www.instagram.com/reel/REPLACE_ME_3",
  // "https://www.instagram.com/reel/REPLACE_ME_4",
];

export default function InstagramWall() {
  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
          <div>
            <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">
              {BIZ.instagramHandle}
            </h3>
            <h2 className="text-4xl md:text-6xl font-luxury font-bold text-white">
              FOLLOW OUR JOURNEY
            </h2>
          </div>
        </div>

        {instagramPosts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {instagramPosts.map((postUrl, i) => (
              <div key={i} className="w-full bg-white rounded-xl overflow-hidden shadow-[0_0_15px_rgba(217,70,239,0.1)] h-[450px] border border-white/10 transition-transform duration-500 hover:scale-[1.02]">
                <iframe
                  src={`${postUrl}/embed`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                  className="w-full h-full"
                  title={`Instagram Reel ${i + 1}`}
                ></iframe>
              </div>
            ))}
          </div>
        ) : (
          <div className="mb-12 border border-white/10 rounded-2xl p-12 text-center super-glass">
            <Instagram className="w-10 h-10 text-fuchsia-500 mx-auto mb-4" />
            <p className="text-zinc-400 font-modern text-sm">Latest reels &amp; transformations — live on Instagram.</p>
          </div>
        )}

        <div className="text-center">
          <a
            href={BIZ.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 text-white px-8 py-4 rounded-full font-modern font-bold uppercase tracking-widest text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(217,70,239,0.4)] transition-all"
          >
            <Instagram className="w-5 h-5" /> Follow Us on Instagram
          </a>
        </div>

      </div>
    </section>
  );
}
