import React from "react";
import { Link } from "react-router-dom";
import instagram from "../assets/img/instagram.png";
import facebook from "../assets/img/facebook.png";
import linkedin from "../assets/img/linkedin.png";
import twitter from "../assets/img/twitter.png";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold text-navy">
                Potrzebujesz więcej informacji?
              </h4>
              <div className="flex items-center mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  height="24"
                  width="24"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <h5 className="text-lg mt-0 ml-2 text-gray-700">
                  Zadzwoń do nas: 510-510-499
                </h5>
              </div>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <img src={twitter} alt="" />
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <img src={facebook} alt="" />
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <img src={instagram} alt="" />
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <img src={linkedin} alt="" />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-navy text-sm font-bold mb-2">
                    Przydatne linki
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link
                        className="text-gray-700 hover:text-logoGreen font-semibold block pb-2 text-sm "
                        to="/oferta"
                      >
                        Oferta
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-logoGreen font-semibold block pb-2 text-sm"
                        to="/o-nas"
                      >
                        O nas
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-gray-700 hover:text-logoGreen font-semibold block pb-2 text-sm"
                        to="/kontakt"
                      >
                        Kontakt
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-navy text-sm font-bold mb-2">
                    Adres
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <p className="text-gray-700 font-semibold block pb-2 text-sm">
                        Pure Concept Sp. z o.o.
                      </p>
                    </li>
                    <li>
                      <p className="text-gray-700 font-semibold block pb-2 text-sm">
                        ul. Działkowa 4a lok. 5
                      </p>
                    </li>
                    <li>
                      <p className="text-gray-700 font-semibold block pb-2 text-sm">
                        55-002 Kamieniec Wrocławski
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-gray-600 font-semibold py-1">
                Copyright © {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
