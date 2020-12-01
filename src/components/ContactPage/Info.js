import React from "react";

export default function Info() {
  return (
    <div className="flex-auto p-5 lg:p-10">
      <h4 className="text-2xl font-semibold text-navy">Dane kontaktowe</h4>

      <div>
        <div className="pt-6">
          <h6 className="text-xl font-bold">Nazwa firmy</h6>
          <p className="mt-1 text-sm text-gray-800 uppercase font-semibold">
            Pur Concept s.c.
          </p>
        </div>
      </div>

      <div>
        <div className="pt-6">
          <h6 className="text-xl font-bold">Adres</h6>
          <p className="mt-1 text-sm text-gray-800 uppercase font-semibold">
            ul. Działkowa 4a lok. 5 <br /> 55-002 Kamieniec Wrocławski
          </p>
        </div>
      </div>

      <div>
        <div className="pt-6">
          <h6 className="text-xl font-bold">Kontakt</h6>
          <p className="mt-1 text-sm text-gray-800 uppercase font-semibold">
            Telefon: 510-510-499
          </p>
        </div>
      </div>
    </div>
  );
}
