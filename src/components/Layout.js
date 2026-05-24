import React, { useEffect } from "react";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import logo from "../assets/img/logo-3.webp";

const structuredJSON = {
  "@context": "http://schema.org",
  "@type": "LocalBusiness",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Stronie Śląskie",
    streetAddress: "Kościuszki 34/9",
    postalCode: "57-550",
    addressRegion: "dolnośląskie",
  },
  name: "PUR CONCEPT s.c.",
  telephone: "510510499",
  vatID: "8811504230",
  image: `https://www.purconcept.pl${logo}`,
};

const TRACKING_ID = "UA-188512821-1";
function initializeReactGA() {
  const trackingID = TRACKING_ID;
  ReactGA.initialize(trackingID, {
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
  });
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export default function Layout({ children }) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      initializeReactGA();
    }
  }, []);
  return (
    <React.Fragment>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(structuredJSON)}
        </script>
      </Helmet>
      {children}
    </React.Fragment>
  );
}
