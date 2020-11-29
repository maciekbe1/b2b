import React from "react";

import Header from "../home/Header.js";
import Form from "../home/Form.js";
import Cards from "../home/Cards.js";
import Description from "../home/Description.js";
import Quality from "../home/Quality.js";

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
