import React from 'react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import ResultsGallery from './components/ResultsGallery';
import Pricing from './components/Pricing';
import Team from './components/Team';
import InstagramWall from './components/InstagramWall';
import Reviews from './components/Reviews';
import MapSection from './components/MapSection';
import FAQ from './components/FAQ';
import BookingSection from './components/BookingSection';
import FloatingButtons from './components/FloatingButtons';
import Footer from './components/Footer';
import BIZ from './siteConfig';

export default function App() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": ["BeautySalon", "LocalBusiness"],
    "name": BIZ.name,
    "telephone": `+${BIZ.phoneE164}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BIZ.streetAddress,
      "addressLocality": BIZ.addressLocality,
      "addressCountry": "AE"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "10:00",
      "closes": "22:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": BIZ.rating,
      "reviewCount": BIZ.reviewCount
    },
    "sameAs": [BIZ.instagramUrl, BIZ.facebookUrl, BIZ.snapchatUrl, BIZ.tiktokUrl, BIZ.googleMapsUrl].filter(Boolean),
    "areaServed": "Dubai"
  };

  return (
    <div className="font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <Hero />
      <TrustBar />
      <Services />
      <ResultsGallery />
      <Pricing />
      <Team />
      <InstagramWall />
      <Reviews />
      <MapSection />
      <FAQ />
      <BookingSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
}
