import React from "react";

export default function ImageCarusel({ path, text, title }) {
  return (
    <div className="items-center flex flex-wrap">
      <div className="w-full lg:w-4/12 md:5/12 ml-auto mr-auto px-4 mn:pt-2">
        <img src={path} alt="" />
      </div>
      <div className="w-full lg:w-8/12 md:10/12 ml-auto mr-auto px-4 mn:pt-2">
        <h2 className="mn:text-xl text-2xl font-semibold text-navy">{title}</h2>
        <p className="text-sm font-light leading-relaxed mt-4 mb-4 text-gray-700">
          {text}
        </p>
      </div>
    </div>
  );
}
