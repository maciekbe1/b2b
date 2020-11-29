import React from "react";

export default function Contact() {
  return (
    <section className="relative block lg:pt-0 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center py-24">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <h4 className="text-2xl font-semibold text-navy">
                  Napisz do nas
                </h4>
                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                  Jeśli zastanawiasz się jak skutecznie ocieplić poddasze, dom,
                  budynek to dobrze trafiłeś, bo znamy się na tym. Wypełnij
                  poniższy formularz, a nasz ekspert skontaktuje się z Tobą
                  najszybciej jak będzie to możliwe.
                  {/*
                  Jeśli masz wątpliwości czy
                  warto ocieplić poddasze lub dom pianką poliuretanową, to
                  zapytaj naszego eksperta od ocieplania budynków. Po pierwsze
                  poznasz zalety ocieplenia pianką PUR, a po drugie dowiesz się
                  czy w Twoim przypadku warto zastosować takie rozwiązanie.
                  Zapraszamy – izolacje natryskowe, izolacja poddasza pianką,
                  ocieplenie. */}
                </p>
                <div className="relative w-full mb-3 mt-8">
                  <label
                    className="block uppercase text-gray-700 text-xs font-bold mb-2"
                    htmlFor="full-name"
                  >
                    Imie i Nazwisko
                  </label>
                  <input
                    type="text"
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Imie i Nazwisko"
                    style={{
                      transition: "all .15s ease",
                    }}
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
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Email"
                    style={{
                      transition: "all .15s ease",
                    }}
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
                    className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                    placeholder="Napisz wiadomość..."
                  />
                </div>
                <div className="text-center mt-6">
                  <button
                    className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    style={{
                      transition: "all .15s ease",
                    }}
                  >
                    Wyślij Wiadomość
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
