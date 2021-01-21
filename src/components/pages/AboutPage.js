import React from "react";
import Footer from "../Footer";
import slider3 from "../../assets/img/slider3.jpeg";
import useWindowDimensions from "../utils/ViewPort";
import Certificates from "../AboutUsPage/Certificates";

export default function AboutPage() {
  const { width } = useWindowDimensions();
  return (
    <>
      <div className="pt-24 container px-6 mn:px-2 mx-auto">
        <section className="container mx-auto mn:hidden">
          <div
            className="flex justify-between items-center"
            style={{ height: width > 1024 ? "360px" : "260px" }}
          >
            <div className="lg:w-6/12 md:w-7/12 sm:w-7/12 mr-auto ml-auto">
              <div className="maxlg:text-3xl mdlg:text-2xl md:text-xl text-center uppercase font-bold italic text-logoGreen">
                <p className="lg:py-1">IZOLACJA PIANĄ NATRYSKOWĄ </p>
                <p className="lg:py-1">PUR ZAPEWNIA NAJLEPSZY </p>
                <p className="lg:py-1">STANDARD TERMICZNY</p>
              </div>
            </div>
            <div className="lg:w-6/12 md:w-5/12 sm:w-6/12 h-full">
              <div
                className="h-full"
                style={{
                  background: `url(${slider3}) left 40% / cover no-repeat`,
                }}
              />
            </div>
          </div>
        </section>
        <div className="relative pt-8 flex content-center items-center justify-center">
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="">
                  <h1 className="font-semibold text-3xl mb-4 text-navy">
                    Świadczymy usługi na terenie całej polski
                  </h1>
                  <hr />
                  <p className="text-lg text-gray-700">
                    Pracujemy na reaktorach marki GRACO, wykorzystujemy do
                    natrysków najwyższej jakości piany PUR. Każdy nasz klient
                    otrzymuje certyfikat aplikacji po skończonym natrysku.{" "}
                    <strong className="text-logoGreen">
                      Oferujemy bezpłatną wycenę na miejscu inwestycji.
                    </strong>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 className="text-navy maxlg:text-2xl mdlg:text-xl md:text-lg text-center uppercase font-bold pt-4">
          Jesteśmy autoryzowanym wykonawcą Synthesia Techlology
        </h3>
        <Certificates />
      </div>
      <Footer />
    </>
  );
}
