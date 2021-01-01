import React from "react";

export default function SectionBox({ path, text, title }) {
  return (
    <div>
      <h2 className="lg:text-2xl md:text-3xl sm:text-2xl mn:text-2xl font-semibold text-navy pb-2">
        {title}
      </h2>
      <div className="float-left mn:hidden">
        <img src={path} alt="" className="h-40 w-44 pr-4" />
      </div>
      <p className="text-md font-light leading-relaxed mt-4 mb-4 text-gray-700">
        {text}
      </p>
    </div>
  );
}
