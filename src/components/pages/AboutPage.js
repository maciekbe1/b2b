import React from "react";
import Faq from "../AboutUsPage/Faq";
import about from "../../assets/img/about.jpg";
import logo from "../../assets/img/logo.png";

export default function AboutPage() {
  return (
    <div className="pt-24 container px-6 mx-auto">
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
                  natrysków najwyższej jakości piany PUR. Klient otrzymuje
                  bezpłatnie certyfikat aplikacji po skończonym natrysku jak i
                  pokazujemy wynik na kamerze termowizyjnej.{" "}
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
          <div className="w-full md:w-7/12 ml-auto mr-auto px-4">
            <Faq />
          </div>
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mn:pt-2">
            <img src={logo} alt="" />
            <h5 className="text-center">Zapraszamy do współpracy!</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
