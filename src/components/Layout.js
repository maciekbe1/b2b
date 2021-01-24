import React from "react";
import { Helmet } from "react-helmet";

const structuredJSON = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kamieniec Wrocławski",
    streetAddress: "Działkowa 4a/4",
    postalCode: "55-002",
    addressRegion: "dolnośląskie",
  },
  name: "Pur Concept s.c.",
  telephone: "510510499",
  vatID: "8942322883",
  image: "https://www.purconcept.pl/static/media/logo-3.7a30d2d9.png",
};

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredJSON)}
        </script>
      </Helmet>
      {children}
    </>
  );
}
