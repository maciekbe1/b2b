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
            <strong>Pianka PUR czyli pianka poliuretanowa,</strong> jest to
            stosowany powszechnie w budownictwie materiał termoizolacyjny, który
            nanosi się mechanicznie na izolowaną powierzchnię metodą natrysku.
            Służy do ocieplania budynku, podnosząc tym samym komfort, zdrowie i
            bezpieczeństwo jego użytkowników.
            <br />
            <br />
            Pianka PUR wykonana jest z materiałów o bardzo niskiej
            nasiąkliwości, dzięki czemu daje ona gwarancję zachowania
            doskonałych właściwości termoizolacyjnych, akustycznych, a także
            zapobiega powstawaniu wilgoci przez cały okres użytkowania domu.
            Poprzez natryskową metodę aplikacji piany mamy zapewnioną
            bezspoinową warstwę izolacyjną, która jest pozbawiona tzw. mostków
            termicznych. Pianka PUR w odróżnieniu od tradycyjnych materiałów
            trwale łączy się z podłożem, dzięki czemu nawet po upływie lat nie
            ulega osuwaniu się, filcowaniu oraz przemieszczaniu się materiału.
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
            Jakie występują rodzaje natryskowych pianek PUR?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-sm font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Ze względu na strukturę, wyróżniamy pianki o strukturze
            zamkniętokomórkowej (inaczej pianka sztywna, pianka twarda) oraz o
            strukturze otwartokomórkowej (inaczej pianka półsztywna, pianka
            miękka).
            <br />
            <br />
            Ze strukturą pianki mocno związana jest gęstość. Im więcej komórek
            zamkniętych tym wyższa jest gęstość materiału. Struktura ma istotny
            wpływ na zastosowanie pianki.
            <br />
            <br />
            <ul className="list-disc pl-4">
              <li>
                Piany PUR <strong>otwartokomórkowe</strong> jak sama nazwa
                wskazuje, zawierają w swojej strukturze otwarte komórki. Ich
                zastosowanie można znaleźć w budownictwie domów jednorodzinnych
                do ocieplania poddaszy, stropów oraz ścian. Doskonale sprawdzają
                się też jako izolacja w domach szkieletowych.
              </li>
              <br />
              <li>
                Piany <strong>zamkniętokomórkowe</strong> charakteryzują się
                dużą sztywnością i posiadają w swojej strukturze zamknięte
                komórki (stąd też jej nazwa). Zawierają one wypełnione gazem
                niewielkie pęcherzyki, a całość może wyglądem nieco przypominać
                gąbkę. Dzięki temu pianka zamkniętokomórkowa posiada lepsze
                właściwości w zakresie izolacji termicznej. Dodatkowo cechuje je
                duża wodoszczelność i wytrzymałość. Swoje zastosowanie znajdą
                też przy izolacji magazynów, budynków przemysłowych, rolnych,
                hal i dachów płaskich. W budownictwie pianka ta najczęściej
                ociepla ściany, poddasza, stropy, fundamenty oraz wzmacnia różne
                elementy konstrukcyjne.
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
            Czym jest mostek termiczny?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-sm font-light leading-relaxed mt-4 mb-4 text-gray-700">
            <strong>Mostek termiczny</strong> (zwany także cieplnym) to miejsce
            w warstwie izolacji, gdzie z powodu obniżonych własności
            termoizolacyjnych np. w miejscu występowania łączeń, następuje{" "}
            <strong>niekontrolowana utrata ciepła.</strong> Mostki termiczne
            powstają np. w wyniku źle zaprojektowanego i wykonanego obiektu.
            Mostki termiczne najczęściej występują na łaczeniach różnych
            elementów przegród zewnętrznych budynku.
            <br />
            <br />
            <strong>Izolacja pianą PUR</strong> pozwala na uniknięcie
            powstawania mostków termicznych. Pianka natryskowa pozwala na
            szczelne jej aplikowanie nawet przy skomplikowanych konstrukcjach
            dachu. Trwale łącząc się z podłożem nie zmienia swojego
            położenia,dzięki czemu zapewnia szczelność izolacji przez cały okres
            użytkowania budynku.
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
            Czy pianka PUR "oddycha"?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-sm font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Pianka PUR o strukturze otwartokomórkowej jest materiałem{" "}
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
            Czy pianka PUR jest bezpieczna?
          </p>
        </AccordionSummary>
        <AccordionDetails>
          <span className="text-sm font-light leading-relaxed mt-4 mb-4 text-gray-700">
            Pianka PUR nie wchodzi w reakcje z parą wodną i środkami
            chemicznymi. Nie wydziela substancji toksycznych, a jej struktura
            jest fizjologicznie obojętna. Ponadto, pianka chroni Twoje
            najbliższe środowisko przed powstawaniem niebezpiecznych pleśni i
            grzybów, a szczelna warstwa produktu tworzy skuteczną barierę
            przeciw owadom i gryzoniom, które często zasiedlają poddasza lub
            piwnice. Izolacje natryskowe, w przeciwieństwie do wełny, nie pylą
            więc są wręcz wskazane do stosowania w pomieszczeniach, w których
            będą przebywać osoby chorujące na alergię.
          </span>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
