import React from "react";

export default function QuestionType() {
  return (
    <div>
      <span className="font-semibold text-sm leading-relaxed mt-4 mb-4 text-gray-700">
        Ze względu na strukturę, wyróżniamy piany o strukturze
        zamkniętokomórkowej (inaczej piana sztywna, piana twarda) oraz o
        strukturze otwartokomórkowej (inaczej piana półsztywna, piana miękka).
        <br />
        <br />
        Ze strukturą piany mocno związana jest gęstość. Im więcej komórek
        zamkniętych tym wyższa jest gęstość materiału. Struktura ma istotny
        wpływ na zastosowanie piany.
        <br />
        <br />
        <ul className="list-disc pl-4">
          <li>
            Piany PUR <strong>otwartokomórkowe</strong> jak sama nazwa wskazuje,
            zawierają w swojej strukturze otwarte komórki. Ich zastosowanie
            można znaleźć w budownictwie domów jednorodzinnych do ocieplania
            poddaszy, stropów oraz ścian. Doskonale sprawdzają się też jako
            izolacja w domach szkieletowych. Jest materiałem oddychającym i
            paroprzepuszczalnym.
          </li>
          <br />
          <li>
            Piany <strong>zamkniętokomórkowe</strong> charakteryzują się dużą
            sztywnością i posiadają w swojej strukturze zamknięte komórki (stąd
            też jej nazwa). Zawierają one wypełnione gazem niewielkie
            pęcherzyki, a całość może wyglądem nieco przypominać gąbkę. Dzięki
            temu piana zamkniętokomórkowa posiada lepsze właściwości w zakresie
            izolacji termicznej. Dodatkowo cechuje je duża wodoszczelność i
            wytrzymałość. Swoje zastosowanie znajdą też przy izolacji magazynów,
            budynków przemysłowych, rolnych, hal i dachów płaskich. W
            budownictwie piana ta najczęściej ociepla ściany, poddasza, stropy,
            fundamenty oraz wzmacnia różne elementy konstrukcyjne.
          </li>
        </ul>
      </span>
    </div>
  );
}
