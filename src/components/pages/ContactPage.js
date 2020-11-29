import React from "react";
import parse from "html-react-parser";
import Form from "../ContactPage/Form";
import Info from "../ContactPage/Info";

const createMap = () => {
  const address = "Kamieniec Wrocławski Działkowa 4a";
  const encode = encodeURIComponent(address);
  const map = `<iframe
			height="540"
			width="100%"
			src="https://maps.google.com/maps?hl=pl&amp;q=${encode}+(Tytu%C5%82)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed"
			frameborder="0"
			scrolling="no"
			marginheight="0"
			marginwidth="0"
			title="map"
	/>`;

  return parse(map);
};

export default function Contact() {
  return (
    <div className="pt-5">
      <div className="full-width">{createMap()}</div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
            <Form />
          </div>
          <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
            <Info />
          </div>
        </div>
      </div>
    </div>
  );
}
