import React from "react";
import backgroundImage from "../../assets/img/home-5574909_1920.jpg";

export default function Header() {
  return (
    <section>
      <div
        className="relative pt-16 pb-32 flex content-center items-center justify-center"
        style={{
          minHeight: "110vh",
        }}
      >
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-60 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-semibold text-4xl">
                  Izolacja pianą PUR
                </h1>
                <p className="mt-4 text-lg text-gray-300">
                  Doskonała termoizolacja
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
