import { useContext } from "react";
import { ActiveModalContext } from "../context/ActiveModalContext";

const useActiveModal = () => {
  const context = useContext(ActiveModalContext);
  if (context) return context;
  throw new Error("useActiveModal must be used within a ActiveModalContext");
};

export { useActiveModal };
