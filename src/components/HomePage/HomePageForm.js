import React from "react";
import Form from "../Form";
export default function HomePageForm() {
  const text = `Jeśli zastanawiasz się jak skutecznie ocieplić poddasze, dom,
  budynek to dobrze trafiłeś, bo znamy się na tym. Wypełnij
  poniższy formularz, a nasz ekspert skontaktuje się z Tobą
  najszybciej jak będzie to możliwe.`;
  return (
    <section className="relative block lg:pt-0 bg-darkNavy">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center py-24">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-gray-300">
              <div className="flex-auto p-5 lg:p-10">
                <Form text={text} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
