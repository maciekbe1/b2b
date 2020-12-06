import React from "react";
import parse from "html-react-parser";
import Form from "../Form";
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
  const text = `Jeśli masz wątpliwości czy warto ocieplić poddasze lub dom pianką
  poliuretanową, to zapytaj naszego eksperta od ocieplania budynków. Po
  pierwsze poznasz zalety ocieplenia pianką PUR, a po drugie dowiesz się
  czy w Twoim przypadku warto zastosować takie rozwiązanie. Zapraszamy –
  izolacje natryskowe, izolacja poddasza pianką, ocieplenie.`;
  return (
    <div className="pt-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
            <div className="flex-auto p-5 lg:p-10">
              <Form text={text} />
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4 flex items-center">
            <Info />
          </div>
        </div>
      </div>
      <div className="full-width">{createMap()}</div>
    </div>
  );
}
