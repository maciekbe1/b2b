import React from "react";
import parse from "html-react-parser";
import Form from "../ContactPage/Form";
import Info from "../ContactPage/Info";
import slider4 from "../../assets/img/slider4.webp";
import useWindowDimensions from "../utils/ViewPort";

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
  const text = `Jeśli masz wątpliwości czy warto ocieplić poddasze lub dom pianą
  poliuretanową, to zapytaj naszego eksperta od ocieplania budynków. Po
  pierwsze poznasz zalety ocieplenia pianą PUR, a po drugie dowiesz się
  czy w Twoim przypadku warto zastosować takie rozwiązanie. Zapraszamy –
  izolacje natryskowe, izolacja poddasza pianą, ocieplenie.`;
  const { width } = useWindowDimensions();

  return (
    <React.Fragment>
      <div className="container px-6 mx-auto sm:pt-32 mn:pt-24 mn:px-4">
        <section className="container mx-auto mn:hidden">
          <div
            className="flex items-center justify-between"
            style={{ height: width > 1024 ? "360px" : "260px" }}
          >
            <div className="h-full lg:w-6/12 md:w-5/12 sm:w-6/12">
              <div
                className="h-full"
                style={{
                  background: `url(${slider4}) center / cover no-repeat`,
                }}
              />
            </div>
            <div className="ml-auto mr-auto lg:w-6/12 md:w-7/12 sm:w-7/12">
              <div className="italic font-bold text-center uppercase maxlg:text-3xl mdlg:text-2xl md:text-xl text-logoGreen">
                <p className="lg:py-1">OCIEPLENIE PIANĄ </p>
                <p className="lg:py-1">NATRYSKOWĄ PUR </p>
                <p className="lg:py-1">ZAPEWNIA OSZCZĘDNOŚCI </p>
                <p className="lg:py-1">NAWET DO 50 %</p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex flex-wrap">
          <div className="w-full pt-4 mb-4 md:w-6/12 lg:w-6/12">
            <div className="flex-auto">
              <Form text={text} />
            </div>
          </div>
          <div className="w-full mb-12 md:w-6/12 lg:w-6/12 lg:pt-48 md:pt-48 sm:mb-4 mn:mb-4">
            <Info />
          </div>
        </div>
      </div>
      <div className="full-width">{createMap()}</div>
    </React.Fragment>
  );
}
