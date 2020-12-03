import React from "react";
import { Link } from "react-router-dom";
import pianka1 from "../../assets/img/purios-h77.png";
import pianka2 from "../../assets/img/piana-poliuretanowa-otwartokomorkowa-purios-s.png";
import Carousel from "../Carousel";
import ImageCarusel from "../OffertPage/ImageCarusel";
const settings = {
  autoplay: true,
  dots: true,
  autoplaySpeed: 5000,
  arrows: false,
};

const images = [
  <ImageCarusel
    path={pianka1}
    text="Purios HO to piana poliuretanowa o strukturze zamkniętych komórek, stosowana do produkcji sztywnej pianki natryskowej. System posiada w swoim składzie środek spieniający nowej generacji (HFO) o potencjale zubożenia warstwy ozonowej (ODP) równym zero oraz niskim współczyniku ocieplenia globalnego (GWP). Purios HO charakteryzuje się możliwością natryskiwania znacznie grubszych warstw (od 5 do 10 cm), co skutkuje znaczną oszczędnością czasu podczas aplikacji i zmniejszenie kosztów."
    title="Piany HO"
  />,
  <ImageCarusel
    path={pianka2}
    text="Piana otwartokomórkowa służy głównie do wykonywania izolacji wewnątrz budynków. W 90% składa się z otwartych komórek. Cechuje się niskim współczynnikiem oporu dyfuzyjnego pary wodnej, dzięki czemu wilgoć nie jest zatrzymywana w warstwie izolacyjnej. Piana Purios otwartokomórkowa posiada λ od 0,033, co pozwala wyraźnie obniżyć rachunki za energię w budynkach."
    title="Piany Otwartokomórkowe"
  />,
];
export default function OffertPage() {
  return (
    <div className="pt-24 container mx-auto px-4">
      <div className="pt-6">
        <div className="items-center flex flex-wrap">
          <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mn:pt-2">
            <h5 className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
              Oferujemy idealne rozwiązania, przeznaczone do izolacji budynków
              mieszkalnych, biurowych, obiektów przemysłowych i
              handlowo-usługowych oraz pomieszczeń gospodarczych.
              <br />
              <br />
              Innowacyjne systemy ociepleń pianą PUR mogą być stosowane do
              wykonywania izolacji termicznej zarówno w budynkach nowo
              wznoszonych, jak i tych, podlegających termomodernizacji Gwarancja
              producenta 25 lat na pianę
            </h5>
          </div>
          <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
            <Carousel settings={settings} images={images} type="component" />
          </div>
        </div>
      </div>
      <div className=" px-10 py-10">
        <h5 className="text-lg text-navy">
          Pianka PUR może poszczycić się bardzo dobrymi parametrami i łatwością
          użycia.
          <br /> Do jej właściwości zaliczyć można więc to, że pianka
          poliuretanowa:
        </h5>

        <ul className="list-disc pl-4 text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
          <li>
            może być stosowana w zakresie temperatur od –50°C do +100-130°C, co
            więcej: przez krótki okres wytrzyma nawet temperaturę wynoszącą
            +250°C,
          </li>
          <li>
            zapewnia bardzo dobrą izolację cieplną (w zakresie od –60°C do
            +95°C),
          </li>
          <li>
            ma dwukrotnie niższy współczynnik przewodzenia ciepła niż w np.
            przypadku wełny lub styropianu przy jednoczesnej mniejszej grubości
            izolacji,
          </li>
          <li>zapewnia także izolację akustyczną, </li>
          <li>wykazuje się paroprzepuszczalnością,</li>
          <li>
            ma trzy stopnie palności (zgodnie z normą DIN 4102), to znaczy
            stopień: łatwo zapalny (B3), średnio palny (B2) oraz trudno zapalny
            (B1),
          </li>
          <li>nie jest szkodliwa dla zdrowia,</li>
          <li>nie jest kłopotliwa w transporcie,</li>
          <li>jest łatwa w obróbce oraz montażu,</li>
          <li>jest odporna na działanie grzybów czy pleśni,</li>
          <li>
            nie lubią jej owady i gryzonie (nie jest więc przez nie uszkadzana
            czy gryziona),
          </li>
          <li>
            jest odporna na dyfuzję pary wodnej, a także na opary chemiczne,
            większość rozpuszczalników organicznych oraz kwasy i zasady,
          </li>
          <li>posiada wersje palną i samogasnącą,</li>
          <li>
            „nie starzeje się”, to znaczy z upływem czasu nie zmienia swoich
            parametrów mechanicznych i izolacyjnych,
          </li>
          <li>
            może być pokrywana lakierem, pokrywana farbami (na bazie tworzyw
            sztucznych), a nawet laminowana.
          </li>
        </ul>
        <h4 className="text-xl font-semibold text-navy pb-5">
          Chciałbyś dowiedzieć się wiecej o naszej ofercie?
        </h4>
        <Link
          to="/kontakt"
          className="font-bold text-white mt-8 bg-navy px-4 py-2 active:bg-gray-700"
        >
          Napisz do nas!
        </Link>
      </div>
    </div>
  );
}
