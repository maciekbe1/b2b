import React from "react";
import { Link } from "react-router-dom";
import pianka1 from "../../assets/img/pianka1.jpg";
import pianka2 from "../../assets/img/pianka2.jpg";
import slider2 from "../../assets/img/slider2.jpg";
import image1 from "../../assets/img/IMG_2764.jpeg";
import image2 from "../../assets/img/IMG_2765.jpeg";
import image3 from "../../assets/img/IMG_2768.jpeg";

import BackgroundImage from "../BackgroundImage";
import SectionBox from "../OffertPage/SectionBox";
import Footer from "../Footer";

const image = {
  text:
    "Profesjonalna izolacja oraz ocieplenie domu zapewnia komfort i oszczędności na wiele lat",
  backgroundSize: "cover",
  background: `url('${slider2}') center / 200px 200px no-repeat`,
};
export default function OffertPage() {
  return (
    <>
      <main className="pt-24 container mx-auto px-4">
        <section className="mn:hidden">
          <BackgroundImage item={image} />
        </section>
        <div className="pt-6 flex flex-col">
          <section className="flex pb-6">
            <div className="lg:w-7/12 md:w-full ml-auto mr-auto lg:px-4 mn:pt-2">
              <h5 className="text-xl font-medium leading-relaxed mb-6 text-gray-700">
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
              <hr />
            </div>
            <div className="lg:w-5/12 px-4 md:hidden sm:hidden mn:hidden lg:block">
              <div className="overflow-hidden" style={{ height: "430px" }}>
                <img
                  src={image1}
                  alt="pur1"
                  className="mr-auto ml-auto"
                  style={{ height: "650px" }}
                />
              </div>
            </div>
          </section>
          <section className="flex pb-6">
            <div className="lg:w-7/12 md:w-full ml-auto mr-auto lg:px-4 mn:pt-2">
              <SectionBox
                path={pianka2}
                text={`Piana otwartokomórkowa jest materiałem lekkim, dzięki czemu nie obciąża konstrukcji. Znakomicie nadaje się do izolacji poddasza. Ta odmiana piany bardzo przypomina gąbkę. Jej struktura składa się w minimu 80% z komórek otwartych wypełnionych powietrzem. To właśnie powietrze jest świetnym izolatorem akustycznym, przepuszcza parę wodną ("oddycha"). Piana otwaryokomórkowa, nie wykazuje odporności na ściskanie. Chwilę po aplikacji piana rozpręża się bardzo dynamicznie, zwiększając swoją obiętość nawet 120 razy. Dzięki tej właściwości dociera w szczeliny i miejsca, które są trudno dostępne, wypełniając je i tym samym nie doprowadza do powstawania mostków termicznych.`}
                title="Piany Otwartokomórkowe"
              />
              <hr />
            </div>
            <div className="lg:w-5/12 px-4 lg:flex md:hidden sm:hidden mn:hidden items-center justify-center">
              <div className="overflow-hidden" style={{ height: "430px" }}>
                <img
                  src={image2}
                  alt="pur1"
                  className="mr-auto ml-auto"
                  style={{ height: "650px" }}
                />
              </div>
            </div>
          </section>
          <section className="flex">
            <div className="lg:w-7/12 md:w-full ml-auto mr-auto lg:px-4 mn:pt-2">
              <SectionBox
                path={pianka1}
                text="Druga odmiana izolacyjnej piany PUR ma strukturę zamkniętokomórkową. Ten rodzaj piany składa się w minimum 80% z komórek zamkniętych, wypełnionych gazem (czasem również powietrzem). Jest o wiele cięższa od piany otwartokomórkowej. Wyróżnia się wysoką odpornością na zgniatanie oraz niską paroprzepuszczalnością. Dzięki tym cechą wykorzystywana jest w szczególności do izolowania posadzek, zbiorników, fundamentów, basenów oraz rur. Nadaję się również do ocieplenia obór, stajni i chlewni."
                title="Piany Zamkniętokomórkowe"
              />
            </div>
            <div className="lg:w-5/12 px-4 md:hidden sm:hidden mn:hidden lg:flex items-center justify-center">
              <div className="overflow-hidden" style={{ height: "430px" }}>
                <img
                  src={image3}
                  alt="pur1"
                  className="mr-auto ml-auto"
                  style={{ height: "650px" }}
                />
              </div>
            </div>
          </section>
        </div>
        <div className="lg:px-4 px-0 py-10">
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
      </main>
      <Footer />
    </>
  );
}
