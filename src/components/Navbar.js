import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/img/logo-2.png";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="fixed z-10 bg-white w-full border-b-2 border-navy">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
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
            <Link className="hidden lg:block w-auto absolute" to="/">
              <img className="h-24" src={logo} alt="Logo" />
            </Link>
            <div className="flex-1 flex items-center justify-center sm:items-stretch">
              <div className="hidden sm:block">
                <div className="flex space-x-4">
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
          <div className="px-2 pt-2 pb-3 space-y-1 flex flex-col">
            <NavLink
              to="/"
              exact
              className="px-3 py-2 text-sm font-medium z-10"
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
          </div>
        </div>
      </nav>
    </>
  );
}
