import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/img/logo-3.webp";
import instagram from "../assets/img/instagram.webp";
import facebook from "../assets/img/facebook.webp";
import youtube from "../assets/img/youtube.webp";
export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed z-20 w-full bg-white border-b-2 border-navy">
        <div className="px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-24">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* <!-- Mobile menu button--> */}
              <button
                className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-expanded="false"
                onClick={() => setNavbarOpen(!navbarOpen)}
              >
                <span className="sr-only">Otwórz menu</span>
                {/* <!-- Icon when menu is closed. -->
          <!--
            Heroicon name: menu

            Menu open: "hidden", Menu closed: "block"
          --> */}
                <svg
                  className={`${navbarOpen ? "hidden" : "block"} h-6 w-6"`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                {/* <!-- Icon when menu is open. -->
          <!--
            Heroicon name: x

            Menu open: "block", Menu closed: "hidden"
          --> */}
                <svg
                  className={`${navbarOpen ? "block" : "hidden"} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <Link className="absolute hidden w-auto lg:block" to="/">
              <img className="h-24" src={logo} alt="Logo" />
            </Link>
            <div className="flex items-center justify-center flex-1 sm:items-stretch">
              <div className="hidden sm:block">
                <div className="flex lg:space-x-4 md:space-x-2">
                  <NavLink
                    to="/"
                    className="px-3 py-2 text-sm font-medium hover:bg-navy hover:text-white"
                    activeClassName="bg-navy text-white"
                    exact
                  >
                    Strona główna
                  </NavLink>
                  <NavLink
                    to="/oferta"
                    className="px-3 py-2 text-sm font-medium hover:bg-navy hover:text-white"
                    activeClassName="bg-navy text-white"
                  >
                    Oferta
                  </NavLink>
                  <NavLink
                    to="/o-nas"
                    className="px-3 py-2 text-sm font-medium hover:bg-navy hover:text-white"
                    activeClassName="bg-navy text-white"
                  >
                    O nas
                  </NavLink>
                  <NavLink
                    to="/kontakt"
                    className="px-3 py-2 text-sm font-medium hover:bg-navy hover:text-white"
                    activeClassName="bg-navy text-white hover:text-white"
                  >
                    Kontakt
                  </NavLink>
                  <NavLink
                    to="/synthesia-technology"
                    className="px-3 py-2 text-sm font-medium hover:bg-navy hover:text-white"
                    activeClassName="bg-navy text-white hover:text-white"
                  >
                    Synthesia Technology
                  </NavLink>
                  <NavLink
                    to="/rodo"
                    className="px-3 py-2 text-sm font-medium hover:bg-navy hover:text-white"
                    activeClassName="bg-navy text-white hover:text-white"
                  >
                    RODO
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute right-0 flex flex-col justify-center align-middle bottom-3">
              <div className="justify-center lg:flex sm:hidden mn:flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  height="24"
                  width="24"
                  className="mr-2"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>

                <a
                  href="tel:510 510 499"
                  className="font-bold text-md text-navy "
                >
                  510 510 499
                </a>
              </div>
              <div className="ml-2 sm:hidden lg:block">
                <div className="flex justify-center sm:hidden lg:flex">
                  <button
                    className="items-center justify-center w-10 h-10 p-3 font-normal text-blue-600 bg-white outline-none align-center focus:outline-none"
                    type="button"
                  >
                    <img src={facebook} alt="" />
                  </button>
                  <button
                    className="items-center justify-center w-10 h-10 p-3 font-normal text-pink-400 bg-white outline-none align-center focus:outline-none"
                    type="button"
                  >
                    <img src={instagram} alt="" />
                  </button>
                  <button
                    className="items-center justify-center w-10 h-10 p-3 font-normal text-pink-400 bg-white outline-none align-center focus:outline-none"
                    type="button"
                  >
                    <img src={youtube} alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--
    Mobile menu, toggle classes based on menu state.

    Menu open: "block", Menu closed: "hidden"
  --> */}

        <div
          className={`${navbarOpen ? "block" : "hidden"} sm:hidden mn:-mt-8`}
        >
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
            <NavLink
              to="/"
              exact
              className="z-10 px-3 py-2 text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Strona główna
            </NavLink>
            <NavLink
              to="/oferta"
              className="px-3 py-2 text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Oferta
            </NavLink>
            <NavLink
              to="/o-nas"
              className="px-3 py-2 text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              O nas
            </NavLink>
            <NavLink
              to="/kontakt"
              className="px-3 py-2 text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Kontakt
            </NavLink>
            <NavLink
              to="/synthesia-technology"
              className="px-3 py-2 text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              Synthesia Technology
            </NavLink>
            <NavLink
              to="/rodo"
              className="px-3 py-2 text-sm font-medium"
              activeClassName="bg-gray-900 text-white"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              RODO
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}
