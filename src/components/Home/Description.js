import React from "react";
import { Link } from "react-router-dom";
import piana from "../../assets/img/piana-pur-ekodom-2.jpg";

export default function Description() {
  return (
    <div className="flex flex-wrap items-center mt-2">
      <div className="flex flex-wrap items-center mt-10">
        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
          {/* <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
            <i className="fas fa-user-friends text-xl"></i>
          </div> */}
          <h3 className="text-3xl mb-2 font-semibold leading-normal text-navy">
            Natrysk pianką poliuretanową
          </h3>
          <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Ocieplenie pianką poliuretanową, czyli tzw. termoizolacja pianką PUR
            wymaga specjalistycznej wiedzy i umiejętności. Ponieważ precyzyja
            wykonania i jakość użytych materiałów ma kluczowe znaczenie warto
            zdecydować się na profesjonalną firmę z doświadczeniem. Uzyskanie
            należytej szczelności i jakości wymaga precyzji i dokłądności, które
            synikają z doświadczenia.
          </p>
          <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
            Izolacja poddasza, dachu, podłogi, fundamentu ma duże znaczenie,
            gdyż tą drogą zwykle ucieka dużo ciepła. Ocieplenie kluczowych
            elementów konstrukcji budynku jest ważne, bo znacząco wpływa na
            redukcję kosztów związanych z opłatami za ogrzewanie. To ważne, gdyż
            koszty ogrzewania ciągle rosną.
          </p>
          <Link
            to="/oferta"
            className="font-bold text-white mt-8 bg-logoGreen px-4 py-2 rounded-lg active:bg-green-600"
          >
            Sprawdź ofertę!
          </Link>
        </div>

        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
          <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-navy">
            <img
              alt="..."
              src={piana}
              className="w-full align-middle rounded-t-lg"
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
                OCIEPLANIE PIANKĄ
              </h4>
              <p className="text-md font-light mt-2 text-white">
                Naszym klientom oferujemy wykonanie izolacji najnowocześniejszym
                (pianka poliuretanowa PUR) dostępnym na rynku oraz zapewniamy
                fachową obsługę. Specjalizujemy się w kompleksowym docieplaniu
                domów Wykonujemy ocieplenia poddaszy, dachów (od wewnątrz i od
                zewnątrz), elewacji, tarasów oraz izolację fundamentów.
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
