import { ActiveModalContext } from "../context";
const ActiveModalProvider = ({ children, onClose, onChange }) => {
  const handleClose = () => {
    onClose();
  };

  const handleChange = (result) => {
    onChange(result);
  };

  return (
    <ActiveModalContext.Provider
      value={{ close: handleClose, change: handleChange }}
    >
      <>{children}</>
    </ActiveModalContext.Provider>
  );
};

export { ActiveModalProvider };
