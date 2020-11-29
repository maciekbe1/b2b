import React from "react";

import Header from "./Header.js";
import Form from "./Form.js";
import Cards from "./Cards.js";
import Description from "./Description.js";
import Quality from "./Quality.js";

export default function HomePage() {
  return (
    <>
      <main className="">
        <Header />
        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <Cards />
            <Description />
          </div>
        </section>

        <Quality />

        <Form />
      </main>
    </>
  );
}
