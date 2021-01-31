import React from "react";
import Footer from "../Footer";
import useWindowDimensions from "../utils/ViewPort";
import Certificates from "../AboutUsPage/Certificates";
import slider3 from "../../assets/img/slider3.webp";
import wiazar_pl from "../../assets/img/wiazar_pl.webp";

export default function AboutPage() {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="container px-6 mx-auto sm:pt-32 mn:pt-24 mn:px-2">
        <section className="container mx-auto mn:hidden">
          <div
            className="flex items-center justify-between"
            style={{ height: width > 1024 ? "360px" : "260px" }}
          >
            <div className="ml-auto mr-auto lg:w-6/12 md:w-7/12 sm:w-7/12">
              <div className="italic font-bold text-center uppercase maxlg:text-3xl mdlg:text-2xl md:text-xl text-logoGreen">
                <p className="lg:py-1">IZOLACJA PIANĄ NATRYSKOWĄ </p>
                <p className="lg:py-1">PUR ZAPEWNIA NAJLEPSZY </p>
                <p className="lg:py-1">STANDARD TERMICZNY </p>
                <p className="lg:py-1">I AKUSTYCZNY</p>
              </div>
            </div>
            <div className="h-full lg:w-6/12 md:w-5/12 sm:w-6/12">
              <div
                className="h-full"
                style={{
                  background: `url(${slider3}) center / cover no-repeat`,
                }}
              />
            </div>
          </div>
        </section>
        <div className="relative flex items-center content-center justify-center pt-6">
          <div className="container relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full px-4 ml-auto mr-auto text-center lg:w-6/12">
                <div className="">
                  <h1 className="mb-4 text-xl font-semibold text-navy">
                    Świadczymy usługi na terenie całej polski
                  </h1>
                  <hr />
                  <p className="font-light leading-relaxed text-gray-700 text-md">
                    Pracujemy na reaktorach marki GRACO, wykorzystujemy do
                    natrysków najwyższej jakości piany PUR. Każdy nasz klient
                    otrzymuje certyfikat aplikacji po skończonym natrysku.{" "}
                  </p>
                  <p className="font-light leading-relaxed text-logoGreen text-md">
                    Oferujemy bezpłatną wycenę na miejscu inwestycji.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="pt-8 pb-2 text-xl font-semibold text-center text-navy">
          Jesteśmy autoryzowanym wykonawcą Synthesia Techlology
        </h3>
        <Certificates />
        <h3 className="pt-8 pb-2 text-xl font-semibold text-center text-navy">
          Nasi partnerzy
        </h3>
        <a href="https://wiazarpolska.pl/" className="inline-block">
          <img
            src={wiazar_pl}
            alt="Wiązar Polska"
            className="pt-4 lg:h-40 md:h-36 sm:h-24 mn:h-auto mn:w-full"
          />
        </a>
      </div>
      <Footer />
    </>
  );
}
