import { useRef } from "react";
import { Modal } from "../components/Modal";
import { ModalContext } from "../context/ModalContext";

const ModalProvider = ({ children }) => {
  const ref = useRef();

  const open = (component, model, options) => {
    return ref.current.open(component, model, options);
  };

  return (
    <ModalContext.Provider value={{ open }}>
      <>{children}</>
      <Modal ref={ref} />
    </ModalContext.Provider>
  );
};

export { ModalProvider };

