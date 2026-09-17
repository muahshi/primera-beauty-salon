# Primera Beauty Salon — Website (React + Vite + Tailwind)

Client: Primera Beauty Salon, 203 Al Zarooni Building, Al Rigga Road, Al Muraqqabat, Deira, Dubai.

## Run it
```bash
npm install
npm run dev      # local preview
npm run build    # production build -> dist/
```

## What's REAL in this build (pulled from Google Maps + the client's own printed flyer)
- Business name, address, phone/WhatsApp: +971 55 108 8584
- Opening hours: Daily 10:00 AM – 10:00 PM
- Live Google rating: 4.9★ (276 reviews)
- Full services list + real combo/facial/"10 services for 100 AED" pricing
- Instagram, Facebook & Snapchat links (decoded from the flyer's QR codes)
- Direct Google Maps link + a "write a review" deep link built from the
  business's Google Place ID

All of this lives in **`src/siteConfig.js`** — edit that one file and the
whole site updates.

## What's a PLACEHOLDER — needs the client before launch
Search for `TODO` across the codebase (`grep -rn "TODO" src`). Main ones:
1. **Real photos** — hero, results gallery, team, booking section all use
   placeholder images (leftover from the template). There's no way to pull
   actual photos automatically off a Google Business Profile or Instagram
   account — export real ones from the client and drop them into
   `public/images/`, same filenames.
2. **TikTok** — the flyer's TikTok QR uses a dotted/stylized design that
   standard QR decoders can't read. Scan it with a phone or get the
   `@handle` from the client and drop it into `BIZ.tiktokUrl` in
   `siteConfig.js` — the icon appears automatically in the footer once set.
3. **Team names/photos** — `Team.jsx` uses generic role placeholders. Don't
   publish real staff names/photos without the employees' consent (a few
   staff first names appear in public Google reviews and were used in the
   testimonials on that basis only).

## The "automatic review to site + Google" feature
See `src/components/ReviewGate.jsx` for the full explanation in comments,
short version:

- Google does not allow any script to silently post a review on someone's
  behalf — that always needs the reviewer's own Google login + a manual
  submit on Google's page. Any tool claiming to fully bypass this either
  doesn't work or risks the client's Google Business Profile getting
  suspended for fake reviews.
- So the widget does the closest legitimate version: customer rates their
  visit on the site → 4–5 stars opens Google's review page pre-loaded in a
  new tab (one tap away from posting) **and** saves it as an on-site
  testimonial **and** pings the salon on WhatsApp instantly. 1–3 stars
  goes privately to WhatsApp only — it's never pushed toward Google, so a
  bad experience doesn't become a public review before the salon can fix it.
- Testimonials are currently saved to `localStorage` (demo-level — only
  visible in that visitor's own browser). For a shared, persistent list
  across all visitors, wire it to a free backend (Google Sheets + Apps
  Script webhook, Formspree, or Firebase) — swap the two `localStorage`
  lines in `ReviewGate.jsx` for a `fetch()` call, nothing else changes.

## Structure
Content is driven entirely by `src/siteConfig.js` instead of being
hardcoded per file, so future client edits are one-file changes.
