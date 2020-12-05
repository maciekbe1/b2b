import React from "react";
import { Link } from "react-router-dom";
import pianka1 from "../../assets/img/pianka1.jpg";
import pianka2 from "../../assets/img/pianka2.jpg";
import Carousel from "../Carousel";
import ImageCarusel from "../OffertPage/ImageCarusel";
import Footer from "../Footer";

const settings = {
  autoplay: true,
  dots: true,
  autoplaySpeed: 5000,
  arrows: false,
  adaptiveHeight: true,
};

const images = [
  <ImageCarusel
    path={pianka2}
    text={`Piana otwartokomórkowa jest materiałem lekkim, dzięki czemu nie obciąża konstrukcji. Znakomicie nadaje się do izolacji poddasza. Ta odmiana piany bardzo przypomina gąbkę. Jej struktura składa się w minimu 80% z komórek otwartych wypełnionych powietrzem. To właśnie powietrze jest świetnym izolatorem akustycznym, przepuszcza parę wodną ("oddycha"). Piana otwaryokomórkowa, nie wykazuje odporności na ściskanie. Chwilę po aplikacji piana rozpręża się bardzo dynamicznie, zwiększając swoją obiętość nawet 120 razy. Dzięki tej właściwości dociera w szczeliny i miejsca, które są trudno dostępne, wypełniając je i tym samym nie doprowadza do powstawania mostków termicznych.`}
    title="Piany Otwartokomórkowe"
  />,
  <ImageCarusel
    path={pianka1}
    text="Druga odmiana izolacyjnej piany PUR ma strukturę zamkniętokomórkową. Ten rodzaj piany składa się w minimum 80% z komórek zamkniętych, wypełnionych gazem (czasem również powietrzem). Jest o wiele cięższa od piany otwartokomórkowej. Wyróżnia się wysoką odpornością na zgniatanie oraz niską paroprzepuszczalnością. Dzięki tym cechą wykorzystywana jest w szczególności do izolowania posadzek, zbiorników, fundamentów, basenów oraz rur. Nadaję się również do ocieplenia obór, stajni i chlewni."
    title="Piany Zamkniętokomórkowe"
  />,
];
export default function OffertPage() {
  return (
    <>
      <div className="pt-24 container mx-auto px-4">
        <div className="pt-6">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4 mn:pt-2">
              <h5 className="text-xl font-light leading-relaxed mt-4 mb-4 text-gray-700">
                Zapewniamy każdemu klientowi profesjonalną usługę. Oferujemy
                idealne rozwiązania, przeznaczone do izolacji budynków
                mieszkalnych, biurowych, obiektów przemysłowych,
                handlowo-usługowych oraz pomieszczeń gospodarczych.
                <br />
                <br />
                Innowacyjne systemy ociepleń pianą PUR mogą być stosowane do
                wykonywania izolacji termicznej zarówno w budynkach nowo
                wznoszonych, jak i tych podlegających termomodernizacji.
              </h5>
            </div>
            <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
              <Carousel settings={settings} images={images} type="component" />
            </div>
          </div>
        </div>
        <div className=" px-10 py-10">
          <h5 className="text-lg text-navy">
            Piana PUR może poszczycić się bardzo dobrymi parametrami i łatwością
            użycia.
            <br /> Do jej właściwości można zaliczyć:
          </h5>

          <ul className="list-disc pl-4 text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
            <li>zapewnia bardzo dobrą izolację cieplną,</li>
            <li>
              ma dużo niższy współczynnik przewodzenia ciepła niż w przypadku
              wełny lub styropianu mając przy tym mniejszą grubość,
            </li>
            <li>zapewnia izolację akustyczną, </li>
            <li>wykazuje się paroprzepuszczalnością,</li>
            <li>nie jest szkodliwa dla zdrowia,</li>
            <li>jest bezwonna,</li>
            <li>jest odporna na działanie grzybów czy pleśni,</li>
            <li>
              nie lubią jej owady i gryzonie (i z tego powodu nie jest przez nie
              uszkadzana czy gryziona),
            </li>
            <li>łatwo się przyczepia do różnego rodzaju nawierzchni,</li>
            <li>
              nie zmienia swoich właściwości po upływie czasu w przeciwieństwie
              do tradycyjnych materiałów izolacyjnych,
            </li>
            <li>może być pokrywana lakierem lub farbami.</li>
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
      <Footer />
    </>
  );
}
