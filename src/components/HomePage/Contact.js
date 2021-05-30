import React, { useState, forwardRef } from "react";
import { Link } from "react-router-dom";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dateUtil from "../../dateUtil";
import pl from "date-fns/locale/pl";
registerLocale("pl", pl);

const CustomInput = forwardRef(({ value, onClick }, ref) => (
  <button
    className="px-4 py-2 font-bold text-white bg-navy hover:bg-gray-700"
    onClick={onClick}
  >
    {value}
  </button>
));

export default function Contact({ setShow }) {
  const [startDate, setStartDate] = useState(new Date());
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const message = `email: ${email}%0D%0Anumer telefonu: ${phone}%0D%0APreferowana godzina kontaktu: ${dateUtil(
    startDate
  )}%0D%0A%0D%0AWyrażam zgodę na przetwarzanie moich danych osobowych w celach handlowych i marketingowych przez PUR CONCEPT S.C.`;
  return (
    <div className="p-2 bg-white lg:p-4">
      <div className="flex justify-between pb-2 modal-header">
        <p className="text-2xl font-semibold text-navy">Umów się na rozmowę</p>
        <button
          className="modal-close"
          type="button"
          onClick={() => setShow(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="modal-body">
        <div className="relative w-full mb-3">
          <label
            className="block mb-2 text-xs font-bold text-gray-700 uppercase"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded focus:outline-none focus:shadow-outline"
            placeholder="Email"
            style={{
              transition: "all .15s ease",
            }}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="relative w-full mb-3">
          <label
            className="block mb-2 text-xs font-bold text-gray-700 uppercase"
            htmlFor="email"
          >
            Numer tefelonu
          </label>
          <input
            type="number"
            className="w-full px-3 py-3 text-sm text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded focus:outline-none focus:shadow-outline"
            placeholder="Numer Telefonu"
            style={{
              transition: "all .15s ease",
            }}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label className="block mb-2 text-xs font-bold text-gray-700 uppercase">
            Preferowany czas kontaktu
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            timeInputLabel="Godzina:"
            dateFormat="dd/MM/yyyy HH:mm"
            showTimeInput
            locale="pl"
            customInput={<CustomInput />}
          />
          <p className="leading-relaxed text-gray-600 text-sxs w-">
            Kliknij aby wybrać preferowaną datę i godzinę kontatku.
          </p>
        </div>
      </div>
      <div className="flex justify-end pt-2 modal-footer">
        <Link
          to="/"
          className="px-4 py-2 mr-2 text-sm font-semibold text-white bg-navy active:bg-gray-700"
          onClick={(e) => {
            window.location = `mailto:kontakt@purconcept.pl?subject=Kontakt%20PUR%20Concept&body=${message}`;
            e.preventDefault();
          }}
        >
          Wyślij
        </Link>
        <button
          className="text-sm font-semibold hover:underline"
          onClick={() => setShow(false)}
        >
          Anuluj
        </button>
      </div>
    </div>
  );
}
