import { forwardRef, useImperativeHandle, useState } from "react";
import { ModalItem } from "./ModalItem";
export const Modal = forwardRef((props, ref) => {
  const [modals, setModals] = useState([]);

  useImperativeHandle(ref, () => ({
    open,
  }));

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
    <>
      {modals.map((modal, index) => (
        <ModalItem
          key={index}
          component={modal.component}
          model={modal.model}
          onClose={handleClose}
          onChange={(result) => handleChange(result, modal)}
        />
      ))}
    </>
  );
});
