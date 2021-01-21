import React from "react";
import piana from "../../assets/img/piana.jpg";
import pianaMin from "../../assets/img/piana-min.jpg";

import Modal from "../Modal";
import Contact from "../HomePage/Contact";
import useProgressiveImg from "../utils/useProgressiveImg";

export default function Description() {
  const [src, { blur }] = useProgressiveImg(pianaMin, piana);

  return (
    <div className="flex mt-2">
      <div className="flex mn:flex-col-reverse mt-10 mn:mt-0">
        <div className="w-6/12 mn:w-full mr-auto ml-auto">
          <div>
            <div className="flex pb-2">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-logoGreen h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-md font-light leading-relaxed text-gray-700">
                Budujesz lub remontujesz dom?
              </p>
            </div>
            <div className="flex pb-2">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-logoGreen h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <p className="text-md font-light leading-relaxed text-gray-700">
                Zastanawiasz się nad doborem odpowiedniego źródła ciepła?
              </p>
            </div>
            <div className="flex pb-2">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-logoGreen h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-md font-light leading-relaxed text-gray-700">
                Myślisz o oszczędzaniu energii?
              </p>
            </div>
            <div className="flex pb-2">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-logoGreen h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-md font-light leading-relaxed text-gray-700">
                Chcesz mieć przyjemny chłód w lecie, kojące ciepło w zimie i
                błogą ciszę zawsze?
              </p>
            </div>
          </div>
          <p className="text-md font-light leading-relaxed mb-4 text-gray-700">
            Począwszy od fundamentów, przez posadzki, aż po poddasze, musisz
            zadbać o szereg elementów, które mają istotny wpływ na standard
            energetyczny Twojego domu. Ocieplenie oraz izolacja poddasza, dachu,
            podłogi, fundamentów ma ogromne znaczenie, ponieważ to właśnie tu
            odnotowujemy największe straty ciepła. Od doboru odpowiedniej
            technologii i wykorzystanych materiałów zależeć będzie Twój komfort
            i koszty eksploatacji.
            <br />
            <br />
            Piana zamkniętokomórkowa i otwartokomórkowa, aplikowana metodą
            natryskową, jest doskonałym rozwiązaniem dla wymagających klientów,
            którzy cenią sobie najwyższą jakość i niezmienne parametry
            energetyczne przez wiele lat eksploatacji.
          </p>
          <div className="lg:pt-4 mn:pt-2">
            <Modal
              activator={({ setShow }) => (
                <button
                  type="button"
                  className="font-bold text-white bg-navy px-4 py-2 active:bg-gray-700"
                  onClick={() => setShow(true)}
                >
                  Sprawdź ofertę!
                </button>
              )}
            >
              <Contact />
            </Modal>
          </div>
        </div>

        <div className="w-5/12 mn:w-full mr-auto ml-auto mn:mt-6">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-navy">
            <img
              className="w-full align-middle rounded-t-lg"
              src={src}
              style={{
                filter: blur ? "blur(20px)" : "none",
                transition: blur ? "none" : "filter 0.3s ease-out",
              }}
              alt="piana"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block"
                style={{
                  height: "95px",
                  top: "-94px",
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-navy fill-current"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">
                ZASTOSOWANIE SYSTEMÓW POLIURETANOWYCH
              </h4>
              <p className="text-md font-light mt-2 text-white">
                Oferujemy wykonanie termoizolacji metodą natryskową nowoczesnym
                urządzeniem, znanej i renomowanej firmy GRACO. Specjalizujemy
                się w kompleksowym wykonaniu izolacji i docieplenia domów,
                piwnic, hal przemysłowych, garaży, pomieszczeń gospodarczych i
                innych budynków. Wykonujemy ocieplenia poddaszy , izolacje
                dachów płaskich, ocieplenie i izolacje fundamentów i posadzek
                oraz sufitów.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
