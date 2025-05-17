import { createContext } from "react";

const ModalContext = createContext({
  open: (component, model) => {},
});

export { ModalContext };
