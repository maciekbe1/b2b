import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  shadow: {
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,1.12) !important",
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className={classes.root}>
      <Accordion
        className={classes.shadow}
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p className="text-sm text-navy font-bold">
            Co to jest pianka natryskowa PUR?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-sm font-light leading-relaxed mt-4 mb-4 text-gray-700">
            <strong>Natryskowa pianka poliuretanowa</strong> (inaczej natrysk,
            pianka PUR) jest sprawdzonym materiałem izolacyjnym, mechanicznie
            nanoszonym na izolowaną powierzchnię. Piany natryskowe to nowoczesny
            materiał izolacyjny charakteryzujący się jednymi z najlepszych
            parametrów termoizolacyjnych.
            <br />
            <br />
            Piana pur to materiał o niskiej nasiąkliwości, gwarantujący
            zachowanie doskonałych właściwości termoizolacyjnych,
            przeciwwilgociowych oraz akustycznych przez cały okres użytkowania
            domu. Natryskowy sposób aplikacji piany zapewnia bezspoinową warstwę
            izolacyjną, pozbawioną tzw. mostków termicznych. W odróżnieniu od
            tradycyjnych materiałów jak np. wełna mineralna, podczas aplikacji
            piana trwale łączy się z podłożem i jest odporna na osuwanie i
            przemieszczanie się materiału wraz z upływem lat.
          </span>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.shadow}
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <p className="text-sm text-navy font-bold">
            Rodzaje pian natryskowych
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-sm font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Pianki natryskowe mogą mieć różną strukturę. Wyróżniamy pianki o
            strukturze zamkniętokomórkowej (inaczej pianka sztywna, pianka
            twarda) oraz o strukturze otwartokomórkowej (inaczej pianka
            półsztywna, pianka miękka).
            <br />
            <br />
            Ze strukturą pianki mocno związana jest gęstość. Im więcej komórek
            zamkniętych tym wyższa jest gęstość materiału. Struktura ma istotny
            wpływ na zastosowanie pianki.
            <br />
            <br />
            <ul className="list-disc pl-4">
              <li>
                Piany pur <strong>otwartokomórkowe</strong> stosowane są w
                budownictwie jednorodzinnym, do ocieplania poddaszy, stropów,
                ścian. Doskonale sprawdzają się jako izolacja w domach
                szkieletowych.
              </li>
              <br />
              <li>
                Piany <strong>zamkniętokomórkowe</strong> mają zastosowanie przy
                izolacji magazynów, budynków przemysłowych, rolnych, hal i
                dachów płaskich. W budownictwie jednorodzinnym, piany
                zamkniętokomórkowe wykorzystywane są jako izolacja fundamentów
                oraz izolacja posadzek.
              </li>
            </ul>
          </span>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.shadow}
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <p className="text-sm text-navy font-bold">
            Co to są mostki termiczne i gdzie są zlokalizowane?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-sm font-light leading-relaxed mt-4 mb-4 text-gray-700">
            <strong>Mostki termiczne</strong> (inaczej mostki cieplne) to
            miejsca w warstwie izolacji, gdzie z powodu obniżonych własności
            termoizolacyjnych z racji np. łączeń, następuje zwiększona utrata
            ciepła. Mostki termiczne powstają np. w wyniku użycia niewłaściwej
            technologii, nieprawidłowego montażu czy złego przylegania jednego
            materiału do drugiego (np. miedzy krokwią, a tradycyjnym materiałem
            izolacyjnym lub w skutek obwiśnięcia na sznurach konstrukcyjnych czy
            też osunięcia). Najłatwiejszym sposobem na zaobserwowanie efektów
            mostków termicznych jest lekkie rozszczelnienie okna zimą. Wówczas
            można poczuć z jak dużą siłą zimne powietrze dostaje do
            pomieszczenia. Mostki cieplne widoczne są również w przypadku
            przemarzających krokwi, które często dają czarne pionowe pasy na
            sufitach pokrytych płytami kartonowo-gipsowymi.
            <br />
            <br />
            <strong>Izolacja pianą PUR</strong> pozwala na uniknięcie
            powstawania mostków termicznych. Piana natryskowa pozwala na
            szczelne jej aplikowanie nawet przy skomplikowanych konstrukcjach
            dachu. Trwale łącząc się z podłożem nie zmienia swojego położenia z
            czasem, zapewniając szczelność izolacji przez cały okres użytkowania
            domu.
          </span>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.shadow}
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4a-content"
          id="panel4a-header"
        >
          <p className="text-sm text-navy font-bold">
            Czy izolacja pianą PUR oddycha ?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-sm font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Piana PUR o strukturze otwartokomórkowej jest materiałem{" "}
            <strong>oddychającym i paroprzepuszczalnym</strong>.
          </span>
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.shadow}
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5a-content"
          id="panel5a-header"
        >
          <p className="text-sm text-navy font-bold">
            Czy izolacje natryskowe są bezpieczne dla ludzi i zwierząt?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-sm font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Izolacje metodą natrysku od wielu lat stosowane są w budownictwie
            mieszkaniowym, które chronione jest coraz bardziej zaostrzającymi
            się przepisami prawa budowlanego. Dlatego oferowane przez nas
            systemy natryskowej pianki PUR zostały wcześniej dokładnie
            przebadane i sprawdzone. Dodatkowo posiadają wszystkie niezbędne
            badania, atesty oraz certyfikaty. Izolacje natryskowe są wręcz
            wskazane do stosowania w pomieszczeniach, w których będą przebywać
            osoby chorujące na alergię. Izolacje natryskowe w przeciwieństwie do
            wełny nie pylą. Piany poliuretanowe otaczają nas w codziennym życiu.
            Pianki poliuretanowe są wypełnieniem materacy, większości siedzisk
            meblowych, siedzeń i desek rozdzielczych w samochodach, wypełnienia
            lodówek. Powyższe przykłady można mnożyć, co potwierdzaa
            bezpieczeństwo dla zdrowia stosowania pian poliuretanowych.
          </span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
