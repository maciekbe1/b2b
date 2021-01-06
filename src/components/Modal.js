import React, { useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, activator }) => {
  const [show, setShow] = useState(false);

  const content = show && (
    <div className="fixed inset-0 z-10 flex lg:items-center justify-center">
      <span
        id="blackOverlay"
        className="w-full h-full absolute opacity-60 bg-black"
      ></span>
      <div className="modal relative lg:w-2/6 sm:w-4/6 mn:w-11/12 mn:top-20">
        {React.cloneElement(children, { setShow })}
      </div>
    </div>
  );

  return (
    <>
      {activator({ setShow })}
      {createPortal(content, document.body)}
    </>
  );
};
export default Modal;
