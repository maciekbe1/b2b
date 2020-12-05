import React from "react";

export default function Footer() {
  return (
    <footer className="relative pt-8 pb-6">
      <div className="container mx-auto px-4">
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap  ">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              PUR CONCEPT © {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
