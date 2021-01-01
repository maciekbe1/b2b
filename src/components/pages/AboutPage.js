import React from "react";
import Faq from "../AboutUsPage/Faq";
import about from "../../assets/img/about.jpg";
import Footer from "../Footer";
import BackgroundImage from "../BackgroundImage";
import slider3 from "../../assets/img/slider3.jpg";

const image = {
  text: "Izolacja pianą natryskową PUR zapewnia najlepszy standard termiczny",
  backgroundSize: "cover",
  background: `url('${slider3}') top center / 200px 200px no-repeat`,
};
export default function AboutPage() {
  return (
    <>
      <div className="pt-24 container px-6 mx-auto">
        <section className="mn:hidden">
          <BackgroundImage item={image} />
        </section>
        <div className="relative pt-20 pb-32 flex content-center items-center justify-center">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('${about}')`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-darkNavy"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="text-white font-semibold text-3xl mb-4">
                    Świadczymy usługi na terenie całej polski
                  </h1>
                  <span className="text-lg text-gray-200">
                    <hr />
                    Pracujemy na maszynach marki GRACO, wykorzystujemy do
                    natrysków najwyższej jakości piany PUR. Każdy nasz klient
                    otrzymuje certyfikat aplikacji po skończonym natrysku oraz
                    prezentujemy wynik na kamerze termowizyjnej.{" "}
                    <strong className="text-logoGreen">
                      Oferujemy bezpłatną wycenę na miejscu inwestycji.
                    </strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-6">
          <h3 className="text-3xl mb-6 mt-6 font-semibold leading-normal text-navy text-center">
            Najczęściej zadawane pytania
          </h3>
          <div className="items-center flex flex-wrap">
            <Faq />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
