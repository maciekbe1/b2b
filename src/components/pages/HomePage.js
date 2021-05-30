import React from "react";
import Footer from "../Footer";

import Cards from "../HomePage/Cards";
import Description from "../HomePage/Description";

import home from "../../assets/img/logo.png";
import slider from "../../assets/img/slider1.webp";

import { Helmet } from "react-helmet";

export default function HomePage() {
  return (
    <React.Fragment>
      <Helmet>
        <title>Ocieplenia i izolacje domu pianą - PUR CONCEPT</title>
        <meta
          name="description"
          content="Specjalizujemy się w wykonywaniu profesjonalnych termoizolacji domów oraz obiektów przemysłowych. Wykonujemy również OCIEPLANIE PIANĄ przy zastosowaniu metody natryskowej."
        />
      </Helmet>
      <main className="pt-24">
        <img src={home} className="hidden mn:block" alt="Logo" />
        <section className="container px-4 mx-auto mn:hidden">
          <div className="flex items-center justify-between">
            <div className="ml-auto mr-auto lg:w-6/12">
              <div className="italic font-bold text-center uppercase maxlg:text-3xl mdlg:text-2xl md:text-xl text-logoGreen">
                <p className="lg:py-1">Profesjonalna izolacja i</p>
                <p className="lg:py-1">ocieplenie domu zapewnia</p>
                <p className="lg:py-1">komfort i oszczędności na</p>
                <p className="lg:py-1">wiele lat</p>
              </div>
            </div>
            <div className="w-5/12 ml-auto mr-auto">
              <img
                className="w-full align-middle rounded-t-lg"
                src={slider}
                alt="energo-home"
              />
            </div>
          </div>
        </section>
        <section className="mn:pb-0">
          <div className="container px-4 mx-auto">
            <Cards />
            <Description />
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
