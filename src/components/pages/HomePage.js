import React from "react";
import Footer from "../Footer";

import Cards from "../HomePage/Cards";
import Description from "../HomePage/Description";
import Carousel from "../Carousel";

import home from "../../assets/img/logo.png";

import slider from "../../assets/img/slider1.jpg";
import slider2 from "../../assets/img/slider2.jpg";
import slider3 from "../../assets/img/slider3.jpg";
import slider4 from "../../assets/img/slider4.jpg";

import BackgroundImage from "../BackgroundImage";
const settings = {
  autoplay: true,
  dots: true,
  autoplaySpeed: 5000,
  arrows: false,
};

export default function HomePage() {
  const images = [
    {
      path: slider,
      text:
        "Profesjonalna izolacja oraz ocieplenie domu zapewnia komfort i oszczędności na wiele lat",
      backgroundSize: "contain",
    },

    {
      path: slider2,
      text: "Oszczędzając energię dbasz o środowisko",
      backgroundSize: "cover",
    },
    {
      path: slider3,
      text:
        "Izolacja pianą natryskową PUR zapewnia najlepszy standard termiczny",
      backgroundSize: "cover",
    },
    {
      path: slider4,
      text:
        "Ocieplenie pianą natryskową PUR zapewnia oszczędności nawet do 50 % ",
      backgroundSize: "cover",
    },
  ];
  const imageComponents = images.map((item) => {
    return <BackgroundImage item={item} />;
  });
  return (
    <>
      <main className="pt-24">
        <img src={home} className="hidden mn:block" alt="Logo" />
        <section className="container mx-auto px-4 mn:hidden">
          <Carousel
            settings={settings}
            images={imageComponents}
            type="component"
          />
        </section>
        <section className="pb-20 pt-10 mn:pt-0 mn:pb-0">
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
