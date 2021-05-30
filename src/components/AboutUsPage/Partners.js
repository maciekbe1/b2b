import React from "react";
import wiazar_pl from "../../assets/img/wiazar_pl.webp";
import rekuperatory from "../../assets/img/REKU_LOGO.webp";
import swiatokien from "../../assets/img/swiat_okien.webp";

import mir from "../../assets/img/logo_mir.webp";

export default function Partners() {
  return (
    <div>
      <h3 className="pt-8 pb-2 text-xl font-semibold text-center text-navy">
        Nasi partnerzy
      </h3>
      <div className="flex flex-wrap items-center justify-center mdlg:justify-center lg:justify-between">
        <div className="p-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://wiazarpolska.pl/"
          >
            <img src={wiazar_pl} alt="Wiązar Polska" className="h-36" />
          </a>
        </div>
        <div className="p-4">
          <a
            target="_blank"
            href="https://www.rekuperatory.pl/"
            rel="noopener noreferrer"
          >
            <img
              src={rekuperatory}
              alt="Rekuperatory"
              className="h-20 mn:h-auto mn:w-full"
            />
          </a>
        </div>
        <div className="p-4">
          <a
            target="_blank"
            href="https://www.mirenergia.pl/"
            rel="noopener noreferrer"
          >
            <img src={mir} alt="Mir" className="h-36" />
          </a>
        </div>
        <div className="p-4">
          <a
            target="_blank"
            href="https://www.swiatokienidrzwi.pl/"
            rel="noopener noreferrer"
          >
            <img src={swiatokien} alt="Mir" className="h-40" />
          </a>
        </div>
      </div>
    </div>
  );
}
