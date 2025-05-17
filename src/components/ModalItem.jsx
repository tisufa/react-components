import { useEffect, useState } from "react";
import { ActiveModalProvider } from "../provider";
const ModalItem = ({ onChange, onClose, ...props }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 10);
  }, []);

  const handleChange = (result) => {
    if (!onChange) return;
    setIsShow(false);
    setTimeout(() => {
      onChange(result);
    }, 200);
  };

  const handleClose = () => {
    setIsShow(false);
    setTimeout(() => {
      if (!onClose) return;
      onClose();
    }, 200);
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`fixed inset-0 bg-gray-500/75 transition-opacity duration-300 opacity-0 ${
          isShow ? "opacity-100" : ""
        }`}
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div
            className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg duration-300 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 ${
              isShow ? "opacity-100 translate-y-0 sm:scale-100" : ""
            }`}
          >
            <ActiveModalProvider onClose={onClose} onChange={handleChange}>
              <props.component
                model={props.model}
                onChange={handleChange}
                onClose={handleClose}
              />
            </ActiveModalProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export { ModalItem };
