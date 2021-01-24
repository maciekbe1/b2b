import React from "react";
import useWindowDimensions from "../utils/ViewPort";
import Footer from "../Footer";
import synthesiaMap from "../../assets/img/synthesiaMap.webp";
import SynthesiaHome from "../../assets/img/synthesiaHome.webp";
export default function Synthesia() {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="container px-6 mx-auto sm:pt-32 mn:pt-24 mn:px-4">
        <section className="container mx-auto mn:hidden">
          <div
            className="flex items-center justify-between"
            style={{ height: width > 1024 ? "360px" : "260px" }}
          >
            <div className="ml-auto mr-auto lg:w-6/12 md:w-7/12 sm:w-7/12">
              <div className="italic font-bold text-center uppercase maxlg:text-3xl mdlg:text-2xl md:text-xl text-logoGreen">
                <p className="lg:py-1" style={{ color: "#af1a17" }}>
                  SYNTHESIA TECHNOLOGY
                </p>
              </div>
            </div>
            <div className="h-full pb-6 lg:w-6/12 md:w-5/12 sm:w-6/12">
              <div
                className="h-full"
                style={{
                  background: `url(${synthesiaMap}) center / cover no-repeat`,
                }}
              />
            </div>
          </div>
        </section>
        <div className="mn:pt-2">
          <h3
            className="hidden text-xl font-semibold mn:block mn:pb-2"
            style={{ color: "#af1a17" }}
          >
            SYNTHESIA TECHNOLOGY
          </h3>
          <p className="font-light leading-relaxed text-justify text-gray-700 text-md">
            Naszym głównym partnerem handlowym jest Synthesia Technology SLU.
            Firma została założona w 1964 roku w Hiszpanii, zatrudnia około 450
            osób, i posiada 12 zakładów produkcyjnych na całym świecie. W
            ostatnich latach została przejęta przez Grupę Kingspan.
            Zdecydowaliśmy się na wybór hiszpańskiej firmy, która ma oddział w
            Polsce z kilku powodów: przede wszystkim postawiliśmy na jakość
            materiałów (komponenty są czyste, nie zatykają filtrów maszyn,
            spełniają rygorystyczne normy certyfikowanych laboratoriów w całej
            Europie, posiadają pełną dokumentację, co pozwala na składanie ofert
            w każdym, nawet zagranicznym przetargu). Po drugie jakość
            natryśniętej piany (produkty są bezzapachowe, odporne na grzyby,
            pleśń, obojętne fizjologiczne, posiadają wysoką wydajność z jednego
            zestawu, są ich wzrost i aplikacja są przewidywalne). Po trzecie
            wsparcie producenta na każdym kroku: aplikacja, sprzedaż, marketing.
            Synthesia jest członkiem AECOR, ANDIMAT, AISLA, IPUR, PU Europe,
            EUROPUR, C.E.P. oraz FEDEQUIM, dzięki temu mamy pewność, że
            producent dokłada wszelkich starań do produkcji swoich systemów. To
            wszystko sprawiło, że zdecydowaliśmy się na wybór hiszpańskiego
            producenta.
          </p>
        </div>
        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold text-navy">
            W naszej ofercie znajdą Państwo:
          </h3>
          <p className="font-light leading-relaxed text-justify text-gray-700 text-md">
            <span className="font-semibold">Systemy otwartokomórkowe</span>,
            które znajdują zastosowanie w izolacji skosów poddasza, stropów, czy
            ścian działowych. Posiadają dwie bardzo dobre cechy – są izolacją
            akustyczną (α=0,5), a zarazem izolacją termiczną. Ciągłość warstwy,
            brak mostków termicznych, i paroprzepuszczalność sprawiają, że
            system nie ma sobie równych spośród klastycznych materiałów
            izolacyjnych.
          </p>
          <p className="mt-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            <span className="font-semibold">Systemy otwartokomórkowe </span>z
            kolei doskonale sprawdzają się w izolacjach termicznych stropów,
            posadzek, fundamentów, ścian zewnętrznych, czy dachów zarówno od
            zewnątrz jak i od wewnątrz. Ze względu na swoje cechy
            hydroizolacyjne, a zarazem paroprzepuszczalność jest to jeden z
            najskuteczniejszych systemów do naprawy cieknących dachów, nawet
            tych są narażone na duże wibracje.
          </p>
          <p className="mt-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            <span className="font-semibold">
              Powłoki poliuretanowo-polimocznikowe
            </span>{" "}
            aplikowane w jako izolacja wodna, zabezpieczenie miejsc narażonych
            na ścieranie, bariera dla kwasów i zasad, a także jako warstwa
            naprawcza dla betonu. Stosowany w zbiornikach wodnych, również tych
            dla wody pitnej, tarasach, parkingach, basenach, ogrodach, rurach,
            urządzeń górniczych, pakach samochodów.
          </p>
        </div>
        <img src={SynthesiaHome} alt="synthesia" />
      </div>
      <Footer />
    </>
  );
}
