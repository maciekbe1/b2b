import React from "react";
import piana from "../../assets/img/piana.webp";

import Modal from "../Modal";
import Contact from "../HomePage/Contact";

export default function Description() {
  return (
    <div className="flex mt-2">
      <div className="flex mt-10 mn:flex-col-reverse mn:mt-0">
        <div className="w-6/12 ml-auto mr-auto mn:w-full">
          <h1 className="mb-2 text-xl font-semibold text-navy">
            Izolacje i ocieplenia domu
          </h1>
          <div>
            <div className="flex pb-2">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-logoGreen"
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
              <p className="font-light leading-relaxed text-gray-700 text-md">
                Budujesz lub remontujesz dom?
              </p>
            </div>
            <div className="flex pb-2">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-logoGreen"
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

              <p className="font-light leading-relaxed text-gray-700 text-md">
                Zastanawiasz się nad doborem odpowiedniego źródła ciepła?
              </p>
            </div>
            <div className="flex pb-2">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-logoGreen"
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
              <p className="font-light leading-relaxed text-gray-700 text-md">
                Myślisz o oszczędzaniu energii?
              </p>
            </div>
            <div className="flex pb-2">
              <div className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-logoGreen"
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
              <p className="font-light leading-relaxed text-gray-700 text-md">
                Chcesz mieć przyjemny chłód w lecie, kojące ciepło w zimie i
                błogą ciszę zawsze?
              </p>
            </div>
          </div>
          <p className="mb-4 font-light leading-relaxed text-gray-700 text-md">
            Począwszy od fundamentów, przez posadzki, aż po poddasze, musisz
            zadbać o szereg elementów, które będą miały istotny wpływ na
            standard energetyczny Twojego budynku mieszkalnego.
          </p>
          <p className="mb-4 font-light leading-relaxed text-gray-700 text-md">
            Prawidłowe ocieplenie domu oraz izolacje z wykorzystaniem piany PUR
            poddasza, dachu, podłogi oraz fundamentów mają ogromne znaczenie. To
            właśnie w tych obszarach odnotowujemy największe straty ciepła. Od
            doboru odpowiedniej technologii termoizolacji i wykorzystanych
            materiałów w trakcie wykonywania ocieplenia domu, zależeć będzie nie
            tylko Twój komfort, ale też ponoszone regularnie koszty eksploatacji
            obiektu. Warto więc skorzystać z rozwiązań, które pozwolą na
            znaczące zmniejszenie wysokości rachunków za ogrzewanie.
          </p>
          <p className="mb-4 font-light leading-relaxed text-gray-700 text-md">
            Ocieplanie pianą poliuretanową zamkniętokomórkową lub
            otwartokomórkową, aplikowanymi metodą natryskową na wybranym
            obszarze, jest doskonałym rozwiązaniem dla wymagających klientów
            ceniących najwyższą jakość realizowanych usług oraz znakomite efekty
            końcowe, przekładające się na niezmienne parametry energetyczne
            przez wiele lat eksploatacji obiektu.
          </p>
          <div className="lg:pt-4 mn:pt-2">
            <Modal
              activator={({ setShow }) => (
                <button
                  type="button"
                  className="px-4 py-2 font-bold text-white bg-navy active:bg-gray-700"
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

        <div className="w-5/12 ml-auto mr-auto mn:w-full mn:mt-6">
          <div className="relative flex flex-col w-full min-w-0 mb-6 break-words shadow-lg bg-navy">
            <img
              className="w-full align-middle rounded-t-lg"
              src={piana}
              alt="piana"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 block w-full"
                style={{
                  height: "95px",
                  top: "-94px",
                }}
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="fill-current text-navy"
                ></polygon>
              </svg>
              <h4 className="text-xl font-bold text-white">
                ZASTOSOWANIE SYSTEMÓW POLIURETANOWYCH
              </h4>
              <p className="mt-2 font-light text-white text-md">
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
