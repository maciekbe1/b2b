import React from "react";
import { Helmet } from "react-helmet";

import pok1 from "../../assets/img/pok1.png";
import pok2 from "../../assets/img/pok2.png";
import pianaOtw from "../../assets/img/piana_otw.jpg";
import pianaZam from "../../assets/img/piana_zam.jpg";
import pianaZam2 from "../../assets/img/piana_zam2.png";
import slider2 from "../../assets/img/slider2.webp";

import Footer from "../Footer";
import useWindowDimensions from "../utils/ViewPort";

export default function OffertPage() {
  const { width } = useWindowDimensions();

  return (
    <>
      <Helmet>
        <title>
          Ocieplenie domu, poddasza pianą otwartokomórkową, zamkniętokomórkową,
          PUR - Pur Concept
        </title>
        <meta
          name="description"
          content="Oferta naszego przedsiębiorstwa obejmuje wykonawstwo termoizolacji przy użyciu wysokiej klasy piany PUR zamknięto- lub otwartokomórkowej. Zajmujemy się też OCIEPLANIEM poddasza PIANĄ!"
        />
      </Helmet>
      <main className="container px-6 mx-auto sm:pt-32 mn:pt-24 mn:px-4">
        <section className="container mx-auto mn:hidden">
          <div
            className="flex items-center justify-between"
            style={{ height: width > 1024 ? "360px" : "260px" }}
          >
            <div className="h-full pb-6 lg:w-6/12 md:w-5/12 sm:w-6/12">
              <div
                className="h-full"
                style={{
                  background: `url(${slider2}) center / cover no-repeat`,
                }}
              />
            </div>
            <div className="ml-auto mr-auto lg:w-6/12 md:w-7/12 sm:w-7/12">
              <div className="italic font-bold text-center uppercase maxlg:text-3xl mdlg:text-2xl md:text-xl text-logoGreen">
                <p className="lg:py-1">BEZ MOSTKÓW TERMICZNYCH</p>
                <p className="lg:py-1">BEZ WILGOCI I GRZYBÓW</p>
                <p className="lg:py-1">BEZ PYŁÓW I KURZU</p>
                <p className="lg:py-1">BEZ GRYZONI</p>
              </div>
            </div>
          </div>
        </section>
        <div className="mn:pt-2">
          <h3 className="hidden text-xl font-semibold mn:block text-navy mn:pb-2">
            Offerta
          </h3>
          <p className="font-light leading-relaxed text-justify text-gray-700 text-md">
            Oferujemy wszystkim klientom systemy poliuretanowe indywidualnie
            dopasowane do ich potrzeb i oczekiwań. Wykonujemy bezpłatne
            oględziny miejsc natrysku piany PUR, podczas których uzgadniamy z
            klientami wszystkie szczegóły. Dokonujemy pomiarów powierzchni,
            sprawdzamy wilgotność i temperaturę pomieszczeń oraz podłoża
            bezpośrednio przylegającego, weryfikujemy warunki, dostępność i
            możliwości do rzetelnej realizacji zlecenia. Po sprawdzeniu
            wszystkich koniecznych warunków w miejscu inwestycji jesteśmy
            zobligowani do rekomendowania klientom najlepszych rozwiązań.
            Posiadamy w swojej ofercie systemy poliuretanowe producentów
            krajowych i zagranicznych dzięki czemu, to klient decyduje z jakiego
            systemu będzie miał wykonaną izolację lub ocieplenie. Każdy klient
            otrzymuje (w formie pisemnej lub elektronicznej) szczegółową ofertę
            z Kartą Techniczną systemu na jaki się zdecydował. Na wszystkie
            nasze realizacje udzielamy wieloletnich gwarancji, każdy klient
            otrzymuje certyfikat zgodności.
          </p>
          <br />
          <p className="font-light leading-relaxed text-justify text-gray-700 text-md">
            Piana poliuretanowa (PUR) to materiał wytwarzany na budowie z
            gotowych składników i nanoszony za pomocą specjalnego agregatu. Na
            rynku spotkamy dwa rodzaje piany poliuretanowej układanej
            natryskowo:
          </p>
        </div>
        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold text-navy">
            Piana otwartokomórkowa
          </h3>
          <p className="font-light leading-relaxed text-justify text-gray-700 text-md">
            Pianę otwartokomórkową natryskuje się między elementy konstrukcji –
            krokwie, legary, jętki, elementy rusztu nośnego, do którego będą
            mocowane okładziny. Dzięki swojej dobrej przyczepności i niskiemu
            ciężarowi, piana poliuretanowa może być układana na starych
            izolacjach lub warstwach wykończeniowych. Ponieważ piana silnie się
            rozpręża, może posłużyć do docieplania ścian trójwarstwowych poprzez
            wypełnienie pustki powietrznej między murami. Jej zalety mają też
            znaczenie przy ocieplaniu strychów oraz przestrzeni wentylowanych w
            stropodachach. Są to miejsca, w których ciężko byłoby ułożyć
            tradycyjny materiał izolacyjny. Piana dostaje się we wszystkie nawet
            te trudno dostępne zakamarki co jest dodatkowym utrudnieniem dla
            niepożądanych gości takich jak np. kuna. Jedyną pewną formą ochrony
            jest udaremnienie penetracji dachu przez szczelne wykonanie
            termoizolacji pianą PUR.
          </p>
        </div>
        <div className="flex flex-wrap justify-center py-8">
          <img src={pok1} className="h-60" alt="piana" />
          <img src={pianaOtw} className="px-6 h-60 mn:h-48" alt="piana" />
          <img src={pok2} className="h-60" alt="piana" />
        </div>
        <div>
          <p className="font-light leading-relaxed text-justify text-gray-700 text-md">
            Swoją strukturą przypomina gąbkę. Jej struktura składa się w minimum
            80% z komórek otwartych wypełnionych powietrzem. To właśnie
            powietrze jest izolatorem termicznym i akustycznym, przepuszcza parę
            wodną ("oddycha"). Piana otwartokomórkowa nie wykazuje odporności na
            ściskanie. Chwilę po aplikacji piana rozpręża się bardzo
            dynamicznie, zwiększając swoją objętość nawet 120 razy. Jest
            niezwykle lekka dzięki czemu nie obciąża konstrukcji (8-10 kg/m3,
            dla porównania ciężar wełny to 10-80 kg/m3). Jest elastyczna dzięki
            czemu, gdy zaizoluje się nią konstrukcje drewniane nie odczepi się
            od belek i desek, które w naturalny sposób pracują. Piany
            poliuretanowe wg normy PN-EN 13501-1 najczęściej posiadają klasę
            reakcji na ogień E, która oznacza materiał palny, samogasnący. Tę
            samą klasę posiada np. styropian. Badania wykazują, że przegroda z
            płyt kartonowo-gipsowych wypełniona izolacją z piany poliuretanowej
            (czyli układ jaki występuje na ocieplonym poddaszu) posiada klasę
            reakcji na ogień B-s1,d0, co oznacza bardzo ograniczony udział w
            pożarze, prawie bez dymu i bez płonących kropel. Zastosowanie piany
            PUR zwiększy opór dyfuzyjny (μ = 3-4), co wyeliminuje zjawisko
            „przewiewania”. Piana nie jest podatna na wpływ czynników otoczenia
            i długo zachowuje niezmienione właściwości. Te kilka cech
            użytkowych, choć nie wynika to wprost z matematycznego przeliczenia
            oporu cieplnego, wpływa dużo korzystniej na ogólny bilans
            energetyczny budynku.
          </p>
          <br />
          <p className="font-light leading-relaxed text-justify text-gray-700 text-md">
            Producenci dają 25, a nawet 30-letnią gwarancję na niezmienność
            parametrów izolacji (mogą to zrobić na podstawie badań prowadzonych
            w krajach, gdzie już 30 lat temu tak ocieplano domy). Piana PUR nie
            ma prawa się skurczyć, stać się bardziej porowata, nie opadnie i nie
            ulegnie degradacji.
          </p>
        </div>
        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold text-navy">
            Piana zamkniętokomórkowa
          </h3>
          <p className="font-light leading-relaxed text-justify text-gray-700 text-md">
            Natryskowa poliuretanowa piana PUR zamkniętokomórkowa doskonale
            sprawdza się przy ocieplaniu budynków zarówno wewnątrz jak i na
            zewnątrz. Piana zbudowana jest z mikroskopijnych zamkniętych
            pęcherzyków wypełnionych gazem. Ma właściwości zbliżone do
            polistyrenu XPS (styrodur), dlatego można ją stosować w podobnych
            miejscach co tradycyjny styropian czy płyty poliuretanowe. Doskonała
            izolacja ścian fundamentowych, posadzki czy dachu płaskiego to
            najczęstsze zastosowania w budownictwie. Piana ta jest lekka (35-60
            kg/m3) i ma bardzo dobrą izolacyjność termiczną, w porównaniu z
            innymi materiałami do ociepleń (λ = 0,022-0,025 W/(m.K)). Piana
            zamkniętokomórkowa jest wodoszczelna, a przede wszystkim
            nienasiąkliwa. Doskonale nadaje się do termo i hydroizolacji.{" "}
          </p>
        </div>
        <div className="flex flex-wrap justify-center py-8">
          <img
            src={pianaZam}
            alt="piana"
            className="flex h-64 md:h-52 sm:h-44"
          />
          <img
            src={pianaZam2}
            alt="piana"
            className="flex h-64 md:h-52 sm:h-44 mn:object-contain"
          />
        </div>
        <div>
          <p className="font-light leading-relaxed text-justify text-gray-700 text-md">
            Po wyschnięciu jest twarda i sztywna, ma wytrzymałość na ściskanie
            rzędu 250 kPa. i bardzo niski współczynnik przewodzenia ciepła,
            dzięki czemu do zaizolowania fundamentów, ścian, piwnic czy podłogi
            na gruncie wystarcza warstwa grubości 5-7 cm. Jednolity natrysk
            piany (bezszwowa warstwa izolacji) powoduje, że nie powstają mostki
            termiczne. W przypadku natrysku na zewnętrz konieczne będzie
            zabezpieczenie piany PUR np. farbą akrylową, bitumiczną,
            poliuretanową lub silikonową, ponieważ piana nie jest odporna na
            dłuższe działanie promieni UV. Po natryskowym nałożeniu wytwarza
            ciągłą, bez spoinową warstwę izolacyjną, która szczelnie przylega do
            podłoża i trwale wypełnia nawet najtrudniej dostępne przestrzenie.
          </p>
        </div>
        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold text-navy">
            Najważniejsze zalety zastosowania piany poliuretanowej pur
          </h3>
          <ul className="pl-4 font-light text-gray-700 list-disc text-md">
            <li>zapewnia bardzo dobrą izolację cieplną,</li>
            <li> zapewnia doskonałą izolację akustyczną,</li>
            <li>nie jest szkodliwa dla zdrowia,</li>
            <li>jest bezwonna,</li>
            <li>jest odporna na działanie grzybów czy pleśni,</li>
            <li>nie lubią jej owady i gryzonie,</li>
            <li>łatwo się przyczepia do różnego rodzaju nawierzchni,</li>
            <li>
              nie zmienia swoich właściwości po upływie czasu w przeciwieństwie
              do tradycyjnych materiałów izolacyjnych,
            </li>
            <li>może być pokrywana lakierem lub farbami.</li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
