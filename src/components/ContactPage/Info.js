import React from "react";
import instagram from "../../assets/img/instagram.png";
import facebook from "../../assets/img/facebook.png";
import youtube from "../../assets/img/youtube.png";
export default function Info() {
  return (
    <div className="flex-auto lg:px-10">
      <h4 className="text-2xl font-semibold text-navy">Dane kontaktowe</h4>

      <div className="pt-6">
        <h6 className="text-xl font-bold">Nazwa firmy</h6>
        <p className="mt-1 text-sm text-gray-600 uppercase font-semibold">
          Pur Concept s.c.
        </p>
      </div>

      <div>
        <div className="pt-6">
          <h6 className="text-xl font-bold">Adres</h6>
          <p className="mt-1 text-sm text-gray-600 uppercase font-semibold">
            ul. Działkowa 4a lok. 4 <br /> 55-002 Kamieniec Wrocławski
          </p>
        </div>
      </div>

      <div>
        <div className="pt-6">
          <h6 className="text-xl font-bold">Kontakt</h6>
          <p className="mt-1 text-sm text-gray-600 uppercase font-semibold">
            Telefon: 510-510-499
          </p>
          <p className="mt-1 text-sm text-gray-600 uppercase font-semibold">
            Email: kontakt@purconcept.pl
          </p>
          <div className="mn:mt-2 mn:mb-2 mt-6">
            <button
              className="bg-white text-blue-600 border border-gray-200 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <img src={facebook} alt="" />
            </button>
            <button
              className="bg-white text-pink-400 border border-gray-200 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <img src={instagram} alt="" />
            </button>
            <button
              className="bg-white text-pink-400 border border-gray-200 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
              type="button"
            >
              <img src={youtube} alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
