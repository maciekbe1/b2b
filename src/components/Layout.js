import React from "react";
import { Helmet } from "react-helmet";
import logo from "../assets/img/logo-3.webp";

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
  vatID: "8961599491",
  image: `https://www.purconcept.pl${logo}`,
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
