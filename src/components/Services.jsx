import React from 'react';

export default function Services() {
  // Stock photos (Unsplash — free commercial use) sirf tab tak jab tak
  // salon ki apni real photos nahi mil jaatin. Replace kar dena real photos se.
  const services = [
    { title: "Hair & Styling", img: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1887&auto=format&fit=crop", desc: "Haircuts, roots color, hot oil, hair mask & blow dry — short to long, iron or curl." },
    { title: "Moroccan Bath & Massage", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1974&auto=format&fit=crop", desc: "Moroccan bath, full body, head, shoulder & back massage for total relaxation." },
    { title: "Face, Nails & Waxing", img: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop", desc: "Facials, full face & eyebrow threading, lash lift, manicure, gel pedicure & waxing." }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Our Services</h3>
            <h2 className="text-5xl md:text-7xl font-luxury font-bold text-white">THE MENU</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((srv, i) => (
            <div key={i} className="group relative h-[500px] overflow-hidden rounded-sm cursor-pointer border border-white/5">
              <img src={srv.img} alt={srv.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 grayscale group-hover:grayscale-0 group-hover:scale-110 opacity-60 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                <div className="w-8 h-[2px] bg-fuchsia-500 mb-4 group-hover:w-16 transition-all duration-500"></div>
                <h4 className="text-3xl font-luxury font-bold mb-2 text-white">{srv.title}</h4>
                <p className="text-zinc-400 font-modern font-light text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-700">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
