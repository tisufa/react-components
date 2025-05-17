import { createContext } from "react";

const ActiveModalContext = createContext({
  close: () => {},
  change: (result) => {},
});

export { ActiveModalContext };
