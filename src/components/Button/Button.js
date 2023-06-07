import React, { useState } from "react";
import "./Button.css";
import { Plus } from "react-feather";
import Modal from "../Modal/Modal";

export default function Button(props) {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    if (props.id) {
      props.setBudgetDataId(null);
    }
    setShowModal(false);
  };

  return (
    <div className="addBtn">
      <div onClick={() => setShowModal(true)}>
        <Plus />
      </div>
      {(showModal || props.id) && (
        <Modal
          showModal={showModal}
          closeModal={closeModal}
          setBudgetDataId={props.setBudgetDataId}
          id={props.id}
        />
      )}
    </div>
  );
}
