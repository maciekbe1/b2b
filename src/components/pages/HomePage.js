import React from "react";

import HomePageForm from "../HomePage/HomePageForm";
import Cards from "../HomePage/Cards";
import Description from "../HomePage/Description";
import Quality from "../HomePage/Quality";
import Slider from "../HomePage/Slider";
import home from "../../assets/img/logo.png";
export default function HomePage() {
  return (
    <>
      <main className="pt-24">
        <img src={home} className="hidden mn:block" alt="Logo" />
        <section className="container mx-auto px-4 mn:hidden">
          <Slider />
        </section>
        <section className="pb-20 pt-10 mn:pt-0 mn:pb-0">
          <div className="container mx-auto px-4">
            <Cards />
            <Description />
          </div>
        </section>
        <Quality />
        <HomePageForm />
      </main>
    </>
  );
}
