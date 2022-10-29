import React, { useState } from "react";
import Select from "react-select";
import emailjs from "emailjs-com";

export default function Form({ text }) {
  const data = [
    { value: "poddasze", label: "Poddasze" },
    { value: "dach-płaski-zewnętrzny", label: "Dach płaski zewnętrzny" },
    { value: "fundament", label: "Fundament" },
    { value: "podłogi", label: "Podłogi" },
    { value: "ściany-wewnętrzne", label: "Ściany wewnętrzne" },
    { value: "strop", label: "Strop" },
  ];
  const customStyles = {
    placeholder: () => ({
      color: "#9CA3AF",
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    }),
    control: (provided) => ({
      ...provided,
      borderRadius: "0.25rem",
      borderColor: "#D1D5DB",
      padding: "0.4rem",
    }),
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedValue, setSelectedValue] = useState([]);
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [consent, setConsent] = useState(false);
  const handleChange = (e) => {
    setSelectedValue(e);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!success && consent) {
      setPending(true);
      const data = {
        place: selectedValue.map((item) => item.label).join(", ") || "",
        client: name,
        email: email,
        message: message,
      };
      emailjs
        .send(
          process.env.REACT_APP_SERVICE,
          process.env.REACT_APP_TEMPLATE,
          data,
          process.env.REACT_APP_USER
        )
        .then(
          (result) => {
            console.log(result.text);
            setPending(false);
            setSuccess(true);
          },
          (error) => {
            console.log(error.text);
            setPending(false);
            console.log(error);
          }
        );
    }
    setSuccess(false);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h4 className="text-xl font-semibold text-navy">Napisz do nas</h4>
      {text ? (
        <p className="mt-1 mb-4 font-light leading-relaxed text-justify text-gray-700 text-md">
          {text}
        </p>
      ) : null}
      <div className="relative w-full mt-8 mb-3">
        <label
          className="block mb-2 text-xs font-bold text-gray-600 uppercase"
          htmlFor="full-name"
        >
          Imie i Nazwisko
        </label>
        <input
          type="text"
          required
          className="w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border border-gray-300 rounded focus:outline-none focus:shadow-outline"
          placeholder="Imie i Nazwisko"
          style={{
            transition: "all .15s ease",
          }}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="relative w-full mb-3">
        <label
          className="block mb-2 text-xs font-bold text-gray-600 uppercase"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          required
          className="w-full px-3 py-3 text-sm text-gray-600 placeholder-gray-400 bg-white border border-gray-300 rounded focus:outline-none focus:shadow-outline"
          placeholder="Email"
          style={{
            transition: "all .15s ease",
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="relative w-full mb-3">
        <label className="block mb-2 text-xs font-bold text-gray-600 uppercase">
          Miejse aplikacji piany
        </label>
        <Select
          closeMenuOnSelect
          isMulti
          options={data}
          styles={customStyles}
          placeholder="Wybierz miejsce aplikacji"
          onChange={handleChange}
        />
      </div>
      <div className="relative w-full mb-3">
        <label
          className="block mb-2 text-xs font-bold text-gray-600 uppercase"
          htmlFor="message"
        >
          Wiadomość
        </label>
        <textarea
          rows={4}
          cols={80}
          className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded focus:outline-none focus:shadow-outline"
          placeholder="Napisz wiadomość..."
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>

      <div className="w-full">
        <label className="flex w-full">
          <p className="leading-relaxed text-gray-600 cursor-pointer text-sxs">
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez PUR
            CONCEPT S.C. z siedzibą w Kamieńcu Wrocławskim, 55-002, ul.
            Działkowa 4A LOK. 4, w celu przesyłania mi treści marketingowych na
            mój adres e-mail podany wyżej w formularzu kontaktowym. Informujemy,
            że Państwa zgoda może zostać cofnięta w dowolnym momencie przez
            wysłanie wiadomości e-mail na adres: kontakt@purconcept.pl, spod
            adresu, którego zgoda dotyczy. Informujemy, że nie jesteście Państwo
            profilowani. Państwa dane nie będą przekazywane poza EOG ani
            udostępniane organizacjom międzynarodowym.
          </p>
          <input
            type="checkbox"
            className="ml-2 border-2 form-checkbox border-navy text-logoGreen"
            onChange={() => setConsent(!consent)}
            value={consent ? 1 : 0}
          />
        </label>
      </div>

      <div className="mt-6 text-center">
        {!success ? (
          <button
            type="submit"
            className={`text-white active:bg-gray-700 text-xs font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ${
              pending || !consent ? "cursor-not-allowed bg-gray-500" : "bg-navy"
            }`}
            disabled={pending}
            style={{
              transition: "all .15s ease",
            }}
          >
            Wyślij Wiadomość
          </button>
        ) : (
          <button className="px-6 py-3 mb-1 mr-1 text-xs font-bold text-white uppercase shadow outline-none bg-logoGreen hover:bg-geen-700 hover:shadow-lg focus:outline-none">
            Wiadomość Wysłana
          </button>
        )}
      </div>
    </form>
  );
}
