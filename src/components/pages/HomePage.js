import React from "react";
import Footer from "../Footer";

import Cards from "../HomePage/Cards";
import Description from "../HomePage/Description";

import home from "../../assets/img/logo.png";
import slider from "../../assets/img/slider1.jpg";

export default function HomePage() {
  return (
    <>
      <main className="pt-24">
        <img src={home} className="hidden mn:block" alt="Logo" />
        <section className="container mx-auto px-4 mn:hidden">
          <div className="flex justify-between items-center">
            <div className="lg:w-6/12 mr-auto ml-auto">
              <div className="maxlg:text-3xl mdlg:text-2xl md:text-xl text-center uppercase font-bold italic text-logoGreen">
                <p className="lg:py-1">Profesjonalna izolacja i</p>
                <p className="lg:py-1">ocieplenie domu zapewnia</p>
                <p className="lg:py-1">komfort i oszczędności na</p>
                <p className="lg:py-1">wiele lat</p>
              </div>
            </div>
            <div className="w-5/12 mr-auto ml-auto">
              <img src={slider} className="" alt="energo-home" />
            </div>
          </div>
        </section>
        <section className="mn:pb-0">
          <div className="container mx-auto px-4">
            <Cards />
            <Description />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
