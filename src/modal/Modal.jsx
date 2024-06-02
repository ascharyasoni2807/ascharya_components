// src/App.js
import React, { useState } from "react";

import ModalBox from "./ModalBox";

function ModalButton() {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div>
      <h1>ModalBox Component Demo</h1>
      <button type="button" onClick={showModal}>
        Show ModalBox
      </button>
      <ModalBox show={show} handleClose={hideModal}>
        <p>ModalBox Content</p>
      </ModalBox>
    </div>
  );
}

export default ModalButton;
