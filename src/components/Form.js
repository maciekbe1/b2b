import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";

export default function Form({ text }) {
  const data = [
    { value: "poddasze", label: "Poddasze" },
    { value: "dach-płaski-zewnętrzny", label: "Dach płaski zewnętrzny" },
    { value: "fundament", label: "Fundament" },
    { value: "podłogi", label: "Podłogi" },
    { value: "ściany-wewnętrzne", label: "Ściany wewnętrzne" },
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
  const [selectedValue, setSelectedValue] = useState();
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [success, setSuccess] = useState(false);
  const handleChange = (e) => {
    setSelectedValue(e);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!success) {
      setPending(true);
      const data = {
        subject: selectedValue.map((item) => item.label).join(", "),
        client: name,
        email: email,
        message: message,
      };
      axios({
        method: "post",
        url: "/api/send",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      })
        .then((res) => {
          setPending(false);
          setSuccess(true);
        })
        .catch((err) => {
          setPending(false);
          console.log(err);
        });
    }
    setSuccess(false);
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <h4 className="text-2xl font-semibold text-navy">Napisz do nas</h4>
      {text ? (
        <p className="leading-relaxed mt-1 mb-4 text-gray-600">{text}</p>
      ) : null}

      <div className="relative w-full mb-3 mt-8">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="full-name"
        >
          Imie i Nazwisko
        </label>
        <input
          type="text"
          required
          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm border border-gray-300 focus:outline-none focus:shadow-outline w-full"
          placeholder="Imie i Nazwisko"
          style={{
            transition: "all .15s ease",
          }}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          required
          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm border border-gray-300 focus:outline-none focus:shadow-outline w-full"
          placeholder="Email"
          style={{
            transition: "all .15s ease",
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="relative w-full mb-3">
        <label className="block uppercase text-gray-700 text-xs font-bold mb-2">
          Miejse aplikacji piany
        </label>
        <Select
          closeMenuOnSelect
          isMulti
          options={data}
          styles={customStyles}
          placeholder="Wybierz miejsce aplikacji"
          onChange={handleChange}
          value={data.find((obj) => obj.value === selectedValue)}
        />
      </div>

      <div className="relative w-full mb-3">
        <label
          className="block uppercase text-gray-700 text-xs font-bold mb-2"
          htmlFor="message"
        >
          Wiadomość
        </label>
        <textarea
          rows="4"
          cols="80"
          className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white text-sm rounded border border-gray-300 focus:outline-none focus:shadow-outline w-full"
          placeholder="Napisz wiadomość..."
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </div>
      <div className="text-center mt-6">
        {!success ? (
          <button
            type="submit"
            className={`text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ${
              pending ? "cursor-not-allowed bg-gray-500" : "bg-navy"
            }`}
            disabled={pending}
            style={{
              transition: "all .15s ease",
            }}
          >
            Wyślij Wiadomość
          </button>
        ) : (
          <button className="bg-logoGreen text-white hover:bg-geen-700 text-sm font-bold uppercase px-6 py-3 shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1">
            Wiadomość Wysłana
          </button>
        )}
      </div>
    </form>
  );
}
