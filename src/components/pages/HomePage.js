import React from "react";
import Footer from "../Footer";

import Cards from "../HomePage/Cards";
import Description from "../HomePage/Description";
import Carousel from "../Carousel";

import useWindowDimensions from "../utils/ViewPort";

import home from "../../assets/img/logo.png";

import slider from "../../assets/img/slider1.png";
import slider2 from "../../assets/img/slider2.jpg";
import slider2text2 from "../../assets/img/slider2-text2.jpg";
import slider3 from "../../assets/img/slider3.jpg";
import slider4 from "../../assets/img/slider4.jpg";

const settings = {
  autoplay: true,
  dots: true,
  autoplaySpeed: 5000,
  arrows: false,
};

export default function HomePage() {
  const { width } = useWindowDimensions();

  const images = [
    {
      path: slider,
      style: {
        height: width <= 1024 && width >= 768 ? "420px" : "600px",
        objectFit: "contain",
        margin: "0 auto",
        width: "100%",
      },
    },
    {
      path: width <= 1024 && width >= 768 ? slider2text2 : slider2,
      style: {
        height: width <= 1024 && width >= 768 ? "420px" : "600px",

        objectFit: "cover",
        margin: "0 auto",
        width: "100%",
      },
    },
    {
      path: slider3,
      style: {
        height: width <= 1024 && width >= 768 ? "420px" : "600px",

        objectFit: "cover",
        margin: "0 auto",
        width: "100%",
      },
    },
    {
      path: slider4,
      style: {
        height: width <= 1024 && width >= 768 ? "420px" : "600px",

        objectFit: "cover",
        margin: "0 auto",
        width: "100%",
      },
    },
  ];
  return (
    <>
      <main className="pt-24">
        <img src={home} className="hidden mn:block" alt="Logo" />
        <section className="container mx-auto px-4 mn:hidden">
          <Carousel settings={settings} images={images} />
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
