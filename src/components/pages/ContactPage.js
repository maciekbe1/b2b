import React from "react";
import parse from "html-react-parser";
import Form from "../ContactPage/Form";
import Info from "../ContactPage/Info";
import slider4 from "../../assets/img/ergopigg.jpg";
import BackgroundImage from "../BackgroundImage";

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
const image = {
  text: "Ocieplenie pianą natryskową PUR zapewnia oszczędności nawet do 50 % ",
  backgroundSize: "100% 470px",
  background: `url('${slider4}') 100% -68px no-repeat`,
};

export default function Contact() {
  const text = `Jeśli masz wątpliwości czy warto ocieplić poddasze lub dom pianą
  poliuretanową, to zapytaj naszego eksperta od ocieplania budynków. Po
  pierwsze poznasz zalety ocieplenia pianą PUR, a po drugie dowiesz się
  czy w Twoim przypadku warto zastosować takie rozwiązanie. Zapraszamy –
  izolacje natryskowe, izolacja poddasza pianą, ocieplenie.`;
  return (
    <>
      <div className="pt-24 container px-6 mn:px-4 mx-auto">
        <section className="mn:hidden">
          <BackgroundImage item={image} />
        </section>

        <div className="flex flex-wrap">
          <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-4 lg:px-4">
            <div className="flex-auto md:p-5 lg:p-10">
              <Form text={text} />
            </div>
          </div>
          <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 lg:pt-48 md:pt-48">
            <Info />
          </div>
        </div>
      </div>
      <div className="full-width">{createMap()}</div>
    </>
  );
}
