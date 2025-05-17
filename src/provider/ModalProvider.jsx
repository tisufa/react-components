import { useState } from "react";
import { Modal } from "../components/Modal";
import { ModalContext } from "../context/ModalContext";

const ModalProvider = ({ children }) => {
  const [modals, setModals] = useState([]);

  const open = (component, model) => {
    return new Promise((resolve) => {
      const modal = { component, model, resolve };
      setModals((prev) => [...prev, modal]);
    });
  };

  const handleChange = (result, modal) => {
    modal.resolve(result);
    setModals((prev) => prev.slice(0, -1));
  };

  const handleClose = () => {
    setModals((prev) => prev.slice(0, -1));
  };

  return (
    <ModalContext.Provider value={{ open }}>
      <>{children}</>
      {modals.map((modal, index) => (
        <Modal
          key={index}
          component={modal.component}
          model={modal.model}
          onClose={handleClose}
          onChange={(result) => handleChange(result, modal)}
        />
      ))}
    </ModalContext.Provider>
  );
};

export { ModalProvider };
