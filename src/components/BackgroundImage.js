import React from "react";
import useWindowDimensions from "./utils/ViewPort";

export default function BackgroundImage({ item }) {
  const { width } = useWindowDimensions();

  return (
    <div
      className="bg-no-repeat bg-center relative"
      style={{
        backgroundImage: `url('${item.path}')`,
        height: width >= 768 ? "600px" : "400px",
        backgroundSize: item.backgroundSize,
      }}
    >
      <div className="absolute bottom-0 right-0 bg-black opacity-60 text-white lg:text-3xl md:text-2xl py-3 px-4 w-full text-center">
        {item.text}
      </div>
    </div>
  );
}
