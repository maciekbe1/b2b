import React, { useState } from "react";
import ok from "../../assets/img/CERTYFIKAT-OK.webp";
import po from "../../assets/img/CERTYFIKAT-PO.webp";
import zk from "../../assets/img/CERTYFIKAT-ZK.webp";

import work1 from "../../assets/img/work1.webp";
import work2 from "../../assets/img/work2.webp";
import work3 from "../../assets/img/work3.webp";

import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const certificatesImage = [ok, zk, po];
const workImage = [work2, work1, work3];
export default function Certificates() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap justify-center">
      {certificatesImage.map((image, index) => {
        return (
          <div className="w-full p-4 lg:w-1/3 md:w-1/2" key={index}>
            <img
              className="transition duration-500 transform shadow-lg cursor-pointer hover:scale-110 hover:z-10"
              src={image}
              alt="certificate"
              onClick={() => {
                setIsOpen(true);
                setIndex(index);
              }}
            />
            <img src={workImage[index]} alt="work" className="w-full mt-8 " />
          </div>
        );
      })}
      {isOpen && (
        <Lightbox
          mainSrc={certificatesImage[index]}
          nextSrc={certificatesImage[(index + 1) % certificatesImage.length]}
          prevSrc={
            certificatesImage[
              (index + certificatesImage.length - 1) % certificatesImage.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() =>
            setIndex(
              (index + certificatesImage.length - 1) % certificatesImage.length
            )
          }
          onMoveNextRequest={() =>
            setIndex((index + 1) % certificatesImage.length)
          }
        />
      )}
    </div>
  );
}
