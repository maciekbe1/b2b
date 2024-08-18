import React from "react";
import privacy from "../../assets/img/privacy.png";
import Footer from "../Footer";
import useWindowDimensions from "../utils/ViewPort";
export default function RodoPage() {
  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      <div className="container px-6 mx-auto sm:pt-32 mn:pt-24 mn:px-4">
        <section className="container mx-auto mn:hidden">
          <div
            className="flex items-center justify-between"
            style={{ height: width > 1024 ? "360px" : "260px" }}
          >
            <div className="h-full pb-6 lg:w-6/12 md:w-5/12 sm:w-6/12">
              <div
                className="h-full"
                style={{
                  background: `url(${privacy}) center / contain no-repeat`,
                }}
              />
            </div>
            <div className="ml-auto mr-auto lg:w-6/12 md:w-7/12 sm:w-7/12">
              <div className="italic font-bold text-center uppercase maxlg:text-3xl mdlg:text-2xl md:text-xl text-logoGreen">
                <p className="lg:py-1">POLITYKA PRYWATNOŚCI</p>
              </div>
            </div>
          </div>
        </section>
        <h1 className="hidden pt-2 text-xl font-semibold mn:block text-navy">
          POLITYKA PRYWATNOŚCI
        </h1>

        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold mn:pt-2 mn:block text-navy">
            Administrator danych osobowych
          </h3>
          <p className="font-light leading-relaxed text-justify text-gray-700 text-md">
            Administratorem danych osobowych jest Przedsiębiorca Pan Patryk
            Krawczyk, prowadzący działalność gospodarczą pod firmą: PUR CONCEPT
            S.C., z siedzibą przy: Kościuszki 34/9, 57-550 Stronie Śląskie, NIP:
            8811504230 (zwany dalej: „Właściciel”).
          </p>
        </div>

        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold mn:block text-navy">
            Organ nadzorczy w zakresie danych osobowych
          </h3>
          <p className="font-light leading-relaxed text-justify text-gray-700 text-md">
            Organem nadzorczym w zakresie danych osobowych w Polsce jest obecnie
            Generalny Inspektor Danych Osobowych. Mają Państwo prawo wniesienia
            skargi do organu nadzorczego w zakresie przetwarzania przez nas
            Państwa danych osobowych.
          </p>
        </div>

        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold mn:block text-navy">
            Cel przetwarzania danych osobowych
          </h3>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            1. Administrator przetwarza dane osobowe Użytkownika w celu:
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            a. prezentowania oferty produktowej PUR CONCEPT S.C.,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            b. czynności związanych z zawarciem, wykonywaniem lub rozwiązywaniem
            umowy, dotyczącej usług i towarów oferowanych przez PUR CONCEPT
            S.C.,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            c. obsługi posprzedażowej,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            d. udzielania odpowiedzi na Państwa pisma, zapytania, wnioski,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            e. podejmowanie działań marketingowych podejmowanych przez Pur
            Concept samodzielnie lub we współpracy z innymi podmiotami,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            f. archiwizacja danych klientów i kontrahentów PUR CONCEPT S.C.,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            g. prowadzenie analiz i statystyk na potrzeby prowadzonej przez Pur
            Concept działalności gospodarczej,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            h. wykonywania prawnie uzasadnionych interesów PUR CONCEPT S.C.,
            które zostały wskazane powyżej, a także takich interesów jak
            dochodzenie lub obrona w sprawie roszczeń lub praw PUR CONCEPT S.C.
            lub podmiotu, który PUR CONCEPT S.C. reprezentuje,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            i. wykonywania obowiązku prawnego – obowiązki takie wynikają z
            przepisów powszechnie obowiązującego prawa, w tym przepisów prawa
            wspólnotowego (prawa Unii europejskiej) lub prawa polskiego.
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            j. wykonywania zaleceń lub rekomendacji wydawanych przez uprawnione
            organy lub instytucje
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            k. utrzymywania, wyświetlania stron internetowych lub komunikowania
            się przez te strony – wykorzystywane są do tego dane identyfikujące
            takie jak numer IP, numery urządzenia oraz inne dane np. imię i
            nazwisko, mail, jeżeli zostaną przez Państwa podane w formularzu
            kontaktowym. Dane te wykorzystywane są w zakresie i na podstawie
            zgody lub na podstawie właściwych przepisów prawa, w tym prawa
            telekomunikacyjnego lub prawa wspólnotowego. Te przepisy określają,
            kiedy przetwarzanie danych wymaga zgody. Opisują również sposób
            udzielania zgody lub jej odwołania.
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            l. rzetelnego wykonywania kosztorysów inwestorskich na świadczone
            usługi polegające na izolacji i ocieplaniu pianą PUR.
          </p>
        </div>

        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold mn:block text-navy">
            Rodzaj danych
          </h3>
          <p className="font-light leading-relaxed text-justify text-gray-700 text-md">
            Administrator przetwarza następujące dane osobowe, których podanie
            jest niezbędne do korzystania przez Państwa z usług PUR CONCEPT
            S.C.. Są to między innymi:
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            a. imiona, nazwiska,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            b. adres miejsca zamieszkania oraz adres korespondencyjny,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            c. numer kontaktowy oraz adres e-mail,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            d. adres miejsca zamieszkania oraz adres korespondencyjny,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            e. numer ewidencyjny PESEL – w przypadku obywatela Rzeczpospolitej
            Polskiej,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            f. nazwa, seria i numer dokumentu potwierdzającego tożsamość, a w
            przypadku cudzoziemca – numer paszportu lub katy pobytu,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            g. inne Państwa dane osobowe, z zachowaniem warunków wskazanych w
            pkt. 3 i 4 powyżej.
          </p>
        </div>

        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold mn:block text-navy">
            Podstawa prawna przetwarzania danych osobowych
          </h3>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            1. Dane osobowe są przetwarzane zgodnie z przepisami Rozporządzenia
            Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia
            2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem
            danych osobowych i w sprawie swobodnego przepływu takich danych oraz
            uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie
            danych), OJ L 119, 4.5.2016, p. 1–88, dalej zwane: „rozporządzenie
            RODO".
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            2. Administrator przetwarza dane osobowe wyłącznie po uprzednim
            uzyskaniu zgody Użytkownika.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            3. Wyrażenie zgody na przetwarzanie danych osobowych jest całkowicie
            dobrowolne.
          </p>
        </div>

        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold mn:block text-navy">
            Prawa przysługujące użytkownikowi
          </h3>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            1. Użytkownik może w każdej chwili zażądać od administratora
            informacji o zakresie przetwarzania danych osobowych.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            2. Użytkownik może w każdej chwili zażądać poprawienia bądź
            sprostowania swoich danych osobowych.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            3. Użytkownik może w każdej chwili wycofać swoją zgodę na
            przetwarzanie jego danych osobowych, bez podawania przyczyny.
            Żądanie nieprzetwarzania danych może dotyczyć wskazanego przez
            Użytkownika konkretnego celu przetwarzania np. wycofanie zgody na
            otrzymywanie informacji handlowych bądź dotyczyć wszystkich celów
            przetwarzania danych. Wycofanie zgody co do wszystkich celów
            przetwarzania spowoduje, że konto Użytkownika zostanie usunięte ze
            strony internetowej, wraz ze wszystkimi wcześniej przetwarzanymi
            przez administratora danymi osobowymi Użytkownika. Wycofanie zgody
            nie wpłynie na już dokonane czynności.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            4. Użytkownik może w każdej chwili żądać, bez podawania przyczyny,
            aby administrator usunął Jego dane. Żądanie usunięcia danych nie
            wpłynie na dotychczas dokonane czynności. Usunięcie danych oznacza
            jednoczesne usunięcie konta Użytkownika, wraz ze wszystkimi
            zapisanymi i przetwarzanymi do tej pory przez administratora danymi
            osobowymi.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            5. Użytkownik może w każdej chwili wyrazić sprzeciw przeciwko
            przetwarzaniu danych osobowych, zarówno w zakresie wszystkich
            przetwarzanych przez administratora danych osobowych Użytkownika,
            jak również jedynie w ograniczonym zakresie np. co do przetwarzania
            danych w konkretnie wskazanym celu. Sprzeciw nie wpłynie na
            dotychczas dokonane czynności. Wniesienie sprzeciwu spowoduje
            usunięcie konta Użytkownika, wraz ze wszystkimi zapisanymi i
            przetwarzanymi do tej pory, przez administratora, danymi osobowymi.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            6. Użytkownik może zażądać ograniczenia przetwarzania danych
            osobowych, czy to przez określony czas, czy też bez ograniczenia
            czasowego, ale w określonym zakresie, co administrator będzie
            obowiązany spełnić. Żądanie to nie wpłynie na dotychczas dokonane
            czynności.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            7. Użytkownik może zażądać, aby administrator przekazał innemu
            podmiotowi, przetwarzane dane osobowe Użytkownika. Powinien w tym
            celu napisać prośbę do administratora, wskazując, jakiemu podmiotowi
            (nazwa, adres) należy przekazać dane osobowe Użytkownika oraz jakie
            konkretnie dane Użytkownik życzy sobie, żeby administrator
            przekazał. Po potwierdzeniu przez Użytkownika swojego życzenia,
            administrator przekaże, w formie elektronicznej, wskazanemu
            podmiotowi, dane osobowe Użytkownika. Potwierdzenie przez
            Użytkownika żądania jest niezbędne z uwagi na bezpieczeństwo danych
            osobowych Użytkownika oraz uzyskanie pewności, że żądanie pochodzi
            od osoby uprawnionej.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            8. Administrator informuje Użytkownika o podjętych działaniach,
            przed upływem miesiąca od otrzymania jednego z żądań wymienionych w
            poprzednich punktach.
          </p>
        </div>

        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold mn:block text-navy">
            Okres przechowywania danych osobowych
          </h3>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            1. Zasadniczo dane osobowe są przechowywane tylko tak długo, jak to
            jest konieczne do wypełnienia zobowiązań umownych lub ustawowych,
            dla których zostały one zgromadzone. Dane te zostaną usunięte
            natychmiast, gdy ich przechowywanie nie będzie konieczne, w celach
            dowodowych, zgodnie z prawem cywilnym lub w związku z ustawowym
            obowiązkiem przechowywania danych.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            2. Informacje dotyczące umowy przechowuje się w celach dowodowych,
            przez okres trzech lat, począwszy od końca roku, w którym zakończono
            relacje handlowe z Użytkownikiem. Usunięcie danych nastąpi po
            upływie ustawowego terminu przedawnienia dochodzenia roszczeń
            umownych.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            3. Ponadto, administrator może zachować informacje archiwalne,
            dotyczące zawartych transakcji, gdyż ich przechowywanie jest
            związane z przysługującymi Użytkownikowi roszczeniami np. z tytułu
            rękojmi.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            4. Jeśli żadna umowa nie została zawarta, między Użytkownikiem i
            Właścicielem, dane osobowe Użytkownika są przechowywane do czasu
            usunięcia konta Użytkownika na stronie internetowej. Usunięcie konta
            może nastąpić w wyniku wysunięcia żądania przez Użytkownika,
            wycofania zgody na przetwarzanie danych osobowych, bądź też
            zgłoszenia sprzeciwu co do przetwarzania tych danych.
          </p>
        </div>

        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold mn:block text-navy">
            Powierzenie przetwarzania danych innym podmiotom
          </h3>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            1. Administrator może powierzać przetwarzanie danych osobowych
            podmiotom współpracującym z administratorem, w zakresie niezbędnym
            dla realizacji transakcji np. w celu przygotowania zamówionego
            towaru oraz dostarczania przesyłek lub przekazywania informacji
            handlowych, pochodzących od administratora (ostatnie dotyczy
            Użytkowników, którzy wyrazili zgodę na otrzymywanie informacji
            handlowych).
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            2. Poza celami wskazanymi w niniejszej Polityce Prywatności, dane
            osobowe Użytkowników, nie będą w żaden sposób udostępniane osobom
            trzecim ani przekazywane innym podmiotom, w celu przesyłania
            materiałów marketingowych tych osób trzecich.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            3. Dane osobowe Użytkowników strony internetowej nie są przekazywane
            poza obszar Unii Europejskiej.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            4. Niniejsza Polityka Prywatności jest zgodna z przepisami
            wynikającymi z art. 13 ust. 1 i ust. 2 rozporządzenia RODO.
          </p>
        </div>

        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold mn:block text-navy">
            Pliki cookies
          </h3>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            1. Strona internetowa używa plików cookies (ciasteczka) lub podobną
            technologię (dalej łącznie nazywane: "cookies") do zbierania
            informacji o dostępie Użytkownika do strony internetowej (np. za
            pomocą komputera lub smartfonu) oraz jego preferencjach. Są one
            wykorzystywane m.in. w celach reklamowych i statystycznych oraz w
            celu dostosowania strony internetowej do indywidualnych potrzeb
            Użytkownika.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            2. Pliki cookies to fragmenty informacji, które zawierają unikalny
            kod referencyjny, który strona internetowa przesyła na urządzenie
            Użytkownika, w celu przechowywania, a czasem śledzenia informacji
            dotyczących używanego urządzenia. Zwykle nie pozwalają one
            zidentyfikować osoby Użytkownika. Ich głównym zadaniem jest lepsze
            dopasowanie strony internetowej do Użytkownika.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            3. Niektóre z plików cookies, występujące na stronie internetowej,
            są dostępne tylko przez czas trwania danej sesji internetowej i
            wygasają po zamknięciu przeglądarki. Inne pliki cookies służą do
            zapamiętywania Użytkownika, który po powrocie na stronę internetową,
            jest na niej rozpoznawany. Są one wówczas zachowywane przed dłuższy
            czas.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            4. Pliki cookies używane na niniejszej stronie internetowej to:
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            _ga i są przechowywane przez okres 24 miesięcy ( 2 lata ).
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            5. Wszystkie pliki cookies, występujące na stronie internetowej, są
            ustalane przez administratora.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            6. Wszystkie pliki cookies, używane przez niniejszą stronę
            internetową, są zgodne z obowiązującym prawem Unii Europejskiej.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            7. Większość Użytkowników i niektórych przeglądarek mobilnych
            automatycznie akceptuje pliki cookies. Jeżeli Użytkownik nie zmieni
            ustawień, pliki cookies zostaną zapisane w pamięci urządzenia.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            8. Użytkownik może zmienić preferencje dotyczące akceptacji plików
            cookies lub zmienić przeglądarkę, aby móc otrzymać za każdym razem
            stosowne powiadomienie, gdy funkcja cookies jest ustawiona. Aby
            zmienić ustawienia akceptacji cookies, należy dostosować ustawienia
            w przeglądarce.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            9. Warto pamiętać, że blokowanie lub usuwanie plików cookies może
            uniemożliwić pełne korzystanie ze strony internetowej.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            10. Pliki cookies będą wykorzystywane do niezbędnego zarządzania
            sesją, w tym:
          </p>

          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            a. Tworzenia specjalnej sesji logowania dla Użytkownika strony
            internetowej, aby strona zapamiętała, że Użytkownik jest zalogowany,
            a jego żądania były dostarczane w sposób skuteczny, bezpieczny i
            spójny,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            b. Rozpoznawania Użytkownika, który już wcześniej odwiedził stronę
            internetową, co pozwala na identyfikację liczby unikalnych
            użytkowników, którzy skorzystali z serwisu i pozwala upewnić się co
            do wystarczającej pojemności serwisu dla liczby nowych użytkowników,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            c. Rozpoznawania, czy osoba odwiedzająca stronę internetową jest
            zarejestrowana na stronie internetowej,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            d. Rejestrowanie informacji z urządzenia Użytkownika, w tym: pliki
            cookies, adres IP i informacje o używanej przeglądarce, w celu
            możliwości diagnozowania problemów, administrowania i śledzenia
            Użytkowania witryny,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md">
            e. Dostosowywania elementów układu szaty graficznej lub zawartości
            strony internetowej,
          </p>
          <p className="mb-2 ml-8 font-light leading-relaxed text-justify text-gray-700 text-md ">
            f. Zbierania informacji statystycznych o tym, jak Użytkownik
            korzysta ze strony, w celu możliwości ulepszania witryny i
            stwierdzenia, które zakresy strony internetowej są najbardziej
            popularne dla Użytkowników.
          </p>
        </div>
        <div>
          <h3 className="pt-6 mb-1 text-xl font-semibold mn:block text-navy">
            Google Analytics
          </h3>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            1. Ta strona internetowa korzysta z Google Analytics, usługi
            analizowania usług internetowych, oferowanej przez Google Inc.
            („Google”). Google Analytics wykorzystuje tzw. „Cookies”, pliki
            tekstowe, które są zapisywane na Państwa komputerze i umożliwiają
            analizę korzystania przez Państwa ze strony internetowej. Uzyskane
            przez plik cookie informacje dotyczące sposobu korzystania przez
            Państwa z tej strony internetowej są zwykle przekazywane na serwer
            Google w USA i tam zapisywane. W przypadku aktywowania anonimizacji
            IP na tej stronie internetowej w obrębie państw członkowskich Unii
            Europejskiej lub w innych krajach, które są stronami Porozumienia o
            Europejskim Obszarze Gospodarczym, Państwa adres IP zostanie jednak
            najpierw skrócony przez Google. Tylko w wyjątkowych przypadkach
            pełny adres IP jest przekazywany na serwer Google w USA i tam
            skracany. Na zlecenie właściciela tej strony internetowej firma
            Google wykorzystuje te informacje do analizy Państwa sposobu
            korzystania ze strony internetowej, sporządzania raportów
            dotyczących aktywności na stronie internetowej oraz realizacji
            dalszych usług związanych z wykorzystaniem strony internetowej i
            Internetu na rzecz właściciela strony internetowej.
          </p>

          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            2. Adres IP przekazany przez Państwa przeglądarkę w ramach usługi
            Google Analytics nie jest zestawiany przez Google z innymi danymi.
          </p>

          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            3. Można zapobiec zapisywaniu plików cookies przez odpowiednie
            ustawienia w oprogramowaniu przeglądarki. Zwracamy jednak uwagę, że
            w takim przypadku nie będą Państwo mogli w pełni korzystać ze
            wszystkich funkcji tej strony internetowej. Ponadto mogą Państwo
            zapobiec pobieraniu danych uzyskanych przez plik cookie i
            odnoszących się do Państwa sposobu korzystania ze strony
            internetowej (łącznie z adresem IP) przez Google, a także
            przetwarzaniu tych danych przez Google, jeśli pobiorą Państwo i
            zainstalują wtyczkę do przeglądarki, dostępną pod następującym
            linkiem: tools.google.com/dlpage/gaoptout.
          </p>

          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            4. Ta strona internetowa korzysta z Google Analytics z rozszerzeniem
            „anonymizeIp()”. Oznacza to, że adresy IP są przetwarzane dalej po
            skróceniu, aby wykluczyć możliwość odniesienia ich do konkretnych
            osób. Jeśli w przypadku danych osobowych zebranych na Państwa temat
            możliwe jest odniesienie ich do konkretnej osoby, takie odniesienie
            jest od razu wykluczane, a dane osobowe są niezwłocznie usuwane.
          </p>

          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            5. Korzystamy z Google Analytics w celu analizowania korzystania z
            naszej strony internetowej oraz jej regularnego usprawniania. Dzięki
            uzyskanym statystykom możemy poprawiać naszą ofertę i uczynić ją
            bardziej interesującą dla Państwa jako użytkowników. W odniesieniu
            do wyjątkowych przypadków, w których dane osobowe przekazywane są do
            USA, Google podporządkowuje się porozumieniu EU-US Privacy Shield,
            www.privacyshield.gov/EU-US-Framework. Podstawę prawną dla
            korzystania z Google Analytics stanowi art. 6 ust. 1 zd. 1 lit.{" "}
            {"f) "}RODO.
          </p>
          <p className="mb-2 font-light leading-relaxed text-justify text-gray-700 text-md">
            6. Informacje dostawcy zewnętrznego: Google Dublin, Google Ireland
            Ltd., Gordon House, Barrow Street, Dublin 4, Ireland, fax: +353 (1)
            436 1001.
          </p>
          <p className="font-light leading-relaxed text-gray-700 break-words text-md">
            7. Warunki korzystania:
            https://marketingplatform.google.com/about/analytics/terms/pl/,
            informacje dotyczące ochrony danych osobowych:
            https://support.google.com/a/answer/60762?hl=pl, a także
            oświadczenie o ochronie danych osobowych:
            https://policies.google.com/privacy?hl=pl
          </p>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
}
