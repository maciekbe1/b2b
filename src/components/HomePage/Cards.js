import React from "react";
import shield from "../../assets/img/shield.webp";
import economic from "../../assets/img/profits.webp";
import ecology from "../../assets/img/plant.webp";

export default function Cards() {
  return (
    <div className="pt-5">
      <div className="flex flex-wrap">
        <div className="w-full px-4 pt-6 text-center lg:pt-12 md:w-4/12">
          <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white shadow-2xl ">
            <div className="flex-auto px-4 py-5">
              <div className="inline-flex items-center justify-center w-20 h-20 p-3 mb-5 text-center text-white border-2 rounded-full shadow-lg">
                <i className="fas fa-award">
                  <img src={shield} alt="" />
                </i>
              </div>
              <h6 className="text-xl font-semibold text-navy">Bezpiecznie</h6>
              <p className="mt-2 mb-4 font-light leading-relaxed text-gray-700 text-md">
                Piana PUR jest systemem nietoksycznym i bezzapachowym
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 text-center md:w-4/12">
          <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white shadow-2xl ">
            <div className="flex-auto px-4 py-5">
              <div className="inline-flex items-center justify-center w-20 h-20 p-3 mb-5 text-center text-white border-2 rounded-full shadow-lg">
                <i className="fas fa-retweet">
                  <img src={economic} alt="" />
                </i>
              </div>
              <h6 className="text-xl font-semibold text-navy">Ekonomicznie</h6>
              <p className="mt-2 mb-4 font-light leading-relaxed text-gray-700 text-md">
                Ocieplenie i izolacja pianą PUR to mniejsze zużycie energii
                nawet 50 %
              </p>
            </div>
          </div>
        </div>

        <div className="w-full px-4 text-center lg:pt-12 md:w-4/12 mn:pt-0 sm:pt-0">
          <div className="relative flex flex-col w-full min-w-0 mb-8 break-words bg-white shadow-2xl ">
            <div className="flex-auto px-4 py-5">
              <div className="inline-flex items-center justify-center w-20 h-20 p-3 mb-5 text-center text-white border-2 rounded-full shadow-lg">
                <i className="fas fa-fingerprint">
                  <img src={ecology} alt="" />
                </i>
              </div>
              <h6 className="text-xl font-semibold text-navy">
                Przyjazne Alergikom
              </h6>
              <p className="mt-2 mb-4 font-light leading-relaxed text-gray-700 text-md">
                Piana PUR nie pyli i nie zawiera żadnych środków alergennych
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
