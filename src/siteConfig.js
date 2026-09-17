// ================================================================
// PRIMERA BEAUTY SALON — SITE CONFIG
// Saari real business details ek hi jagah. Kuch bhi update karna ho
// (phone, hours, price, TikTok link) to sirf yahi file edit karo,
// pura site automatically update ho jayega.
// ================================================================

const BUSINESS = {
  name: "Primera Beauty Salon",
  shortName: "Primera",
  tagline: "Beauty Salon & Spa in Al Rigga, Deira, Dubai",
  description:
    "Hair, facials, Moroccan bath & massage, nails, threading & waxing for women — Al Rigga Road, Deira, Dubai.",

  // --- Contact (Google Business listing se) ---
  phoneDisplay: "+971 55 108 8584",
  phoneE164: "971551088584", // wa.me aur tel: links ke liye, bina + aur space ke

  // --- Address (Google Maps listing se) ---
  addressLines: [
    "203, Al Zarooni Building",
    "Al Rigga Road, Al Muraqqabat",
    "Deira, Dubai, United Arab Emirates",
  ],
  addressSingleLine:
    "203, Al Zarooni Building, Al Rigga Road, Al Muraqqabat, Deira, Dubai, UAE",
  streetAddress: "203, Al Zarooni Building, Al Rigga Road",
  addressLocality: "Al Muraqqabat, Deira, Dubai",

  // --- Hours (Google listing: daily 10 AM to 10 PM) ---
  hoursDisplay: "Open Daily: 10:00 AM – 10:00 PM",

  // --- Rating (live Google Business Profile data) ---
  rating: 4.9,
  reviewCount: 276,

  // --- Socials (Instagram, Facebook & Snapchat decoded from the client's
  // printed flyer QR codes; verify handles still match before publishing) ---
  instagramHandle: "@primerabeautysalon",
  instagramUrl: "https://www.instagram.com/primerabeautysalon",
  facebookUrl: "https://www.facebook.com/profile.php?id=61561939011315",
  snapchatUrl: "https://www.snapchat.com/add/primerabeautysa",
  // TODO (CLIENT): TikTok QR on the flyer uses a dotted/styled design that
  // couldn't be decoded automatically. Scan it with a phone or ask the
  // client for their @handle, then fill this in — TikTok icon stays
  // hidden on the site until then (better than linking a guessed handle).
  tiktokUrl: null, // e.g. "https://www.tiktok.com/@realhandle"

  // --- Google Maps ---
  placeId: "ChIJ8ZrWWxBdXz4RiXe1OWns4YE",
  googleMapsUrl:
    "https://www.google.com/maps/place/Primera+Beauty+Salon,+Al+Zarooni+-+203+-+Building+Al+Rigga+Rd+-+Dubai+-+United+Arab+Emirates/data=!4m2!3m1!1s0x3e5f5d105bd69af1:0x81e1ec6939b57789!18m1!1e1",
  googleMapsShortUrl: "https://maps.app.goo.gl/dCL4zKbmP4VWjoQr6",
  // One-click "Write a Google Review" deep link built from the business's
  // Google Place ID.
  googleReviewWriteUrl:
    "https://search.google.com/local/writereview?placeid=ChIJ8ZrWWxBdXz4RiXe1OWns4YE",
  googleMapsEmbedSrc:
    "https://maps.google.com/maps?q=Primera%20Beauty%20Salon%2C%20Al%20Rigga%20Road%2C%20Deira%2C%20Dubai&t=&z=16&ie=UTF8&iwloc=&output=embed",

  // --- Services (grouped, from the client's printed price list) ---
  services: [
    "Hair Cut, Styling & Blow Dry",
    "Roots Color & Hair Treatments (Hot Oil, Hair Mask)",
    "Full Face & Eyebrow Threading",
    "Lash Lift & 3D Lash",
    "Facials — Clean Up, Fruit, Gold & Hydrafacial",
    "Full Body Waxing",
    "Manicure, Pedicure & Nail Art",
    "Moroccan Bath & Full Body Massage",
  ],

  // --- Combo packages (from the flyer, prices in AED) ---
  comboDeals: [
    { price: 65, label: "Manicure, Pedicure, Foot Spa & Eyebrow Threading" },
    { price: 99, label: "Manicure Gel, Pedicure & Foot Spa" },
    { price: 159, label: "Moroccan Bath, Full Body Massage & Blow Dry" },
  ],

  // --- Facial menu (from the flyer, prices in AED) ---
  facialPrices: [
    { price: 49, label: "Clean Up" },
    { price: 79, label: "Fruit Facial" },
    { price: 129, label: "Gold Facial" },
    { price: 149, label: "Hydrafacial (1 hr)" },
  ],

  // --- "10 Services for 100 AED" deal ---
  // Client mixes & matches any items below until the credit numbers in
  // brackets add up to 10, for one flat price.
  tenFor100: {
    price: 100,
    creditsNeeded: 10,
    items: [
      { name: "Hair Trim", credits: 1 },
      { name: "Hair with Styling", credits: 3 },
      { name: "Bangs Cut", credits: 1 },
      { name: "Roots Color", credits: 5 },
      { name: "Hot Oil", credits: 3 },
      { name: "Hair Mask", credits: 3 },
      { name: "Hair Wash", credits: 2 },
      { name: "Blow Dry — Short", credits: 1 },
      { name: "Blow Dry — Medium", credits: 3 },
      { name: "Blow Dry — Medium/Long + Iron/Curl", credits: 5 },
      { name: "Full Face Cleaning + Black Spots + Mask", credits: 4 },
      { name: "Full Face Bleaching w/ Neck", credits: 5 },
      { name: "Lash Lift", credits: 3 },
      { name: "3D Lash", credits: 5 },
      { name: "Eyebrow Shaving", credits: 1 },
      { name: "Eyebrow Color", credits: 3 },
      { name: "Eyebrow Bleaching", credits: 1 },
      { name: "Eyebrow Threading", credits: 1 },
      { name: "Full Face Threading", credits: 4 },
      { name: "Upper Lip Threading", credits: 1 },
      { name: "Full Arm Wax", credits: 3 },
      { name: "Half Arm Waxing", credits: 2 },
      { name: "Full Leg Wax", credits: 4 },
      { name: "Half Leg Waxing", credits: 2 },
      { name: "Paraffin Feet", credits: 3 },
      { name: "Paraffin Hands", credits: 3 },
      { name: "Paraffin Feet & Hands", credits: 5 },
      { name: "Underarms", credits: 1 },
      { name: "Bikini", credits: 4 },
      { name: "Head Massage", credits: 2 },
      { name: "Shoulder Massage", credits: 2 },
      { name: "Back Massage — 15 min", credits: 2 },
      { name: "Manicure", credits: 2 },
      { name: "Pedicure", credits: 3 },
      { name: "Nail Color", credits: 1 },
      { name: "Nail French Color", credits: 2 },
    ],
  },
};

export default BUSINESS;
