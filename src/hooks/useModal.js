import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

const useModal = () => {
  const context = useContext(ModalContext);
  if (context) return context;
  throw new Error("useModal must be used within a ModalProvider");
};

export { useModal };
