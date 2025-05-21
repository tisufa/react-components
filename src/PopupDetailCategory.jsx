import { useEffect, useState } from "react";
import { Popup } from "./components/Popup";
export const PopupDetailCategory = ({ onClose, model }) => {
  const [state, setState] = useState({
    isLoading: true,
    isProcessing: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setState((prev) => ({
        ...prev,
        isLoading: false,
      }));
    }, 2000);
  }, []);

  return (
    <Popup
      header="Detail Category"
      isLoading={state.isLoading}
      isProcessing={state.isProcessing}
    >
      <p>Nama: {model.name}</p>
      <div className="flex justify-end gap-2 mt-3">
        <button
          className="bg-lime-500 p-3 py-2 rounded-md hover:bg-lime-600"
          onClick={onClose}
        >
          Ok
        </button>
      </div>
    </Popup>
  );
};
