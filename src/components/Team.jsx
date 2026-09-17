import React from 'react';

// TODO (MUBI/CLIENT): Yeh sirf placeholder roles hain. Staff members ke
// real naam/photos client se confirm karke hi publish karna — kisi
// employee ka naam/photo unki permission ke bina site par mat daalo.
const team = [
  { role: "Hair Stylist", name: "Team Member", img: "/images/team1.png" },
  { role: "Massage & Moroccan Bath Therapist", name: "Team Member", img: "/images/team2.png" },
  { role: "Nail Technician", name: "Team Member", img: "/images/team3.png" },
  { role: "Threading & Facial Specialist", name: "Team Member", img: "/images/team4.png" }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-zinc-950 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-fuchsia-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 font-modern">Our Team</h3>
          <h2 className="text-4xl md:text-6xl font-luxury font-bold text-white">MEET THE ARTISTS</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-xl mb-6 aspect-[3/4] border border-white/5 shadow-xl">
                <img src={member.img} alt={member.role} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <h4 className="text-white font-luxury font-bold text-xl mb-1">{member.name}</h4>
              <p className="text-fuchsia-500 font-modern text-xs tracking-widest uppercase">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
