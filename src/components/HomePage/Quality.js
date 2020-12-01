import React from "react";
import piana2 from "../../assets/img/piana-2.jpg";

export default function Quality() {
  return (
    <section className="relative py-20 mn:py-3">
      <div className="container mx-auto px-4">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img alt="..." className="max-w-full shadow-lg" src={piana2} />
          </div>
          <div className="w-full md:w-5/12 ml-auto mr-auto px-4 mn:pt-2">
            <div className="md:pr-12">
              <h3 className="text-3xl font-semibold text-navy">
                Jakość i doświadczenie
              </h3>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                Wysoka jakość naszych usług wynika z wiedzy, zaangażowania oraz
                wieloletniego doświadczenia w pracy z pianką poliuretanową PUR.
                Do tej pory zrealizowaliśmy setki usług obejmujących ocieplanie
                i docieplanie pianką PUR budynków, domów, magazynów i hal.
                Skutecznie ocieplamy newralgiczne elementy konstrukcyjne
                budynku, takie jak poddasze, dach, ściana czy strop. Główne
                zalety pianki PUR to:
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase  text-navy bg-navy mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">Brak mostów termicznych</h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase  text-navy bg-navy mr-3">
                        <i className="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">
                        Duża odporność na niekorzystne zewnętrzne czynniki
                        atmosferyczne jak wilgoć czy wiatr
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase  text-navy bg-navy mr-3">
                        <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">
                        Niski współczynnik przewodzenia ciepła
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase  text-navy bg-navy mr-3">
                        <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-gray-600">
                        Bezpieczeństwo dla zdrowia – po zastygnięciu ma
                        całkowicie zwartą strukturę i nie pyli w przeciwieństwie
                        do wełny mineralnej.
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
