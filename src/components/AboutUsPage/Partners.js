import React from "react";
import wiazar_pl from "../../assets/img/wiazar_pl.webp";
import rekuperatory from "../../assets/img/REKU_LOGO.webp";

export default function Partners() {
  return (
    <div>
      <h3 className="pt-8 pb-2 text-xl font-semibold text-center text-navy">
        Nasi partnerzy
      </h3>
      <div className="flex flex-wrap items-center justify-center lg:justify-start">
        <div className="p-4">
          <a target="_blank" rel="noreferrer" href="https://wiazarpolska.pl/">
            <img
              src={wiazar_pl}
              alt="Wiązar Polska"
              className="lg:h-40 md:h-36 sm:h-36 mn:h-36"
            />
          </a>
        </div>
        <div className="p-4">
          <a
            target="_blank"
            href="https://www.rekuperatory.pl/"
            rel="noreferrer"
          >
            <img
              src={rekuperatory}
              alt="Rekuperatory"
              className="h-16 mn:h-auto mn:w-full"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
