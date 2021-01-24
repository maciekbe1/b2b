import React from "react";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import youtube from "../../assets/img/youtube.png";
export default function Info() {
  return (
    <div className="flex-auto lg:px-20 md:px-10">
      <h4 className="text-xl font-semibold text-navy">Dane kontaktowe</h4>

      <div className="pt-6">
        <p className="mt-1 text-sm font-semibold text-gray-600">
          Pur Concept S.C.
        </p>
      </div>

      <div className="pt-6">
        <p className="mt-1 text-sm font-semibold text-gray-600">
          ul. Działkowa 4a lok. 4 <br /> 55-002 Kamieniec Wrocławski
        </p>
      </div>

      <div className="pt-6">
        <p className="mt-1 text-sm font-semibold text-gray-600">
          Telefon: 510-510-499
        </p>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          Email: kontakt@purconcept.pl
        </p>
      </div>

      <div className="pt-6">
        <p className="mt-1 text-sm font-semibold text-gray-600">
          NIP: 8942322883
        </p>
        <p className="mt-1 text-sm font-semibold text-gray-600">
          REGON: 020144019
        </p>
      </div>

      <div className="mt-6 mn:mt-2 mn:mb-2">
        <button
          className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-blue-600 bg-white border border-gray-200 rounded-full shadow-lg outline-none align-center focus:outline-none"
          type="button"
        >
          <img src={facebook} alt="" />
        </button>
        <button
          className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-pink-400 bg-white border border-gray-200 rounded-full shadow-lg outline-none align-center focus:outline-none"
          type="button"
        >
          <img src={instagram} alt="" />
        </button>
        <button
          className="items-center justify-center w-10 h-10 p-3 mr-2 font-normal text-pink-400 bg-white border border-gray-200 rounded-full shadow-lg outline-none align-center focus:outline-none"
          type="button"
        >
          <img src={youtube} alt="" />
        </button>
      </div>
    </div>
  );
}
