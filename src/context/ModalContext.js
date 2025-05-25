import { createContext } from "react";

const ModalContext = createContext({
  open: (component, model, options) => {},
});

export { ModalContext };

