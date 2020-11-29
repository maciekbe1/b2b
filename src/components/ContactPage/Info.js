import React from "react";

export default function Info() {
  return (
    <div className="flex-auto p-5 lg:p-10">
      <h4 className="text-2xl font-semibold text-navy">Dane kontaktowe</h4>

      <div>
        <div class="pt-6">
          <h6 class="text-xl font-bold">Nazwa firmy</h6>
          <p class="mt-1 text-sm text-gray-800 uppercase font-semibold">
            Pure Concept Sp. z o.o.
          </p>
        </div>
      </div>

      <div>
        <div class="pt-6">
          <h6 class="text-xl font-bold">Adres</h6>
          <p class="mt-1 text-sm text-gray-800 uppercase font-semibold">
            ul. Działkowa 4a lok. 5 <br /> 55-002 Kamieniec Wrocławski
          </p>
        </div>
      </div>

      <div>
        <div class="pt-6">
          <h6 class="text-xl font-bold">Kontakt</h6>
          <p class="mt-1 text-sm text-gray-800 uppercase font-semibold">
            Telefon: 510-510-499
          </p>
          <p class="mt-1 text-sm text-gray-800 uppercase font-semibold">
            Email: biuro@pur-concept.pl
          </p>
        </div>
      </div>

      <div>
        <div class="pt-6">
          <h6 class="text-xl font-bold">Godziny otwarcia</h6>
          <ul>
            <li>Poniedziałek: 8:00-17:00 </li>
            <li>Wtorek: 8:00-17:00</li>
            <li>Środa: 8:00-17:00</li>
            <li>Czwartek: 8:00-17:00</li>
            <li>Piątek: 8:00-17:00</li>
            <li>Sobota: Zamknięte </li>
            <li>Niedziela: Zamknięte</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
