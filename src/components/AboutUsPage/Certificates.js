import React, { useState } from "react";
import ok from "../../assets/img/CERTYFIKAT-OK.jpeg";
import po from "../../assets/img/CERTYFIKAT-PO.jpeg";
import zk from "../../assets/img/CERTYFIKAT-ZK.jpeg";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css"; // This only needs to be imported once in your app

const images = [ok, po, zk];
export default function Certificates() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((item, index) => {
        return (
          <div className="lg:w-1/3 md:w-1/2 w-full p-4" key={index}>
            <img
              className="shadow-lg cursor-pointer transform transition duration-500  hover:scale-110 hover:z-10"
              src={item}
              alt="certificates"
              onClick={() => {
                setIsOpen(true);
                setIndex(index);
              }}
            />
          </div>
        );
      })}
      {isOpen && (
        <Lightbox
          mainSrc={images[index]}
          nextSrc={images[(index + 1) % images.length]}
          prevSrc={images[(index + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setIndex((index + images.length - 1) % images.length)
          }
          onMoveNextRequest={() => setIndex((index + 1) % images.length)}
        />
      )}
    </div>
  );
}
