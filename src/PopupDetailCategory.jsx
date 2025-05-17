import { Popup } from "./components/Popup";
export const PopupDetailCategory = ({ onClose, model }) => {
  return (
    <Popup header="Detail Category">
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
