import React from "react";
import shield from "../../assets/img/shield.png";
import economic from "../../assets/img/profits.png";
import ecology from "../../assets/img/plant.png";

export default function Cards() {
  return (
    <div className="pt-5">
      <div className="flex flex-wrap">
        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl ">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full border-2">
                <i className="fas fa-award">
                  <img src={shield} alt="" />
                </i>
              </div>
              <h6 className="text-xl font-semibold text-navy">Bezpiecznie</h6>
              <p className="text-md leading-relaxed font-light text-gray-700 mt-2 mb-4">
                Piana PUR jest systemem nietoksycznym i bezzapachowym
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-4/12 px-4 text-center">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl ">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full border-2">
                <i className="fas fa-retweet">
                  <img src={economic} alt="" />
                </i>
              </div>
              <h6 className="text-xl font-semibold text-navy">Ekonomicznie</h6>
              <p className="text-md leading-relaxed font-light text-gray-700 mt-2 mb-4">
                Ocieplenie i izolacja pianą PUR to mniejsze zużycie energii
                nawet 50 %
              </p>
            </div>
          </div>
        </div>

        <div className="lg:pt-12 w-full md:w-4/12 px-4 text-center mn:pt-0 sm:pt-0">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-2xl ">
            <div className="px-4 py-5 flex-auto">
              <div className="text-white p-3 text-center inline-flex items-center justify-center w-20 h-20 mb-5 shadow-lg rounded-full border-2">
                <i className="fas fa-fingerprint">
                  <img src={ecology} alt="" />
                </i>
              </div>
              <h6 className="text-xl font-semibold text-navy">
                Przyjazne Alergikom
              </h6>
              <p className="text-md leading-relaxed font-light text-gray-700 mt-2 mb-4">
                Piana PUR nie pyli i nie zawiera żadnych środków alergennych
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
