import React from "react";

import Header from "../HomePage/Header.js";
import Form from "../HomePage/Form.js";
import Cards from "../HomePage/Cards.js";
import Description from "../HomePage/Description.js";
import Quality from "../HomePage/Quality.js";

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
