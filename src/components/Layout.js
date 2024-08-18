import React, { useEffect } from "react";
import CookieConsent from "react-cookie-consent";
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
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
      <CookieConsent
        location="bottom"
        buttonText="Zgadzam się"
        cookieName="CookieConsent"
        containerClasses="opacity-95 bg-darkNavy flex flex-wrap justify-between left-o fixed w-full z-10 bottom-0 px-4 py-2 text-white text-md font-light leading-relaxed text-xs items-center"
        disableStyles
        buttonClasses="text-white px-2 py-1 bg-navy text-xs"
        expires={150}
      >
        Nasza strona internetowa przetwarza pliki cookie. Dalsze korzystanie ze
        strony oznacza, że zgadzasz się na ich użycie. Więcej informacji na
        temat plików cookie można znaleźć w{" "}
        <Link to="/rodo" className="text-logoGreen">
          polityce prywatności.
        </Link>
      </CookieConsent>
    </React.Fragment>
  );
}
