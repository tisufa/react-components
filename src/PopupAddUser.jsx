import { Popup } from "./components/Popup";
import { useActiveModal } from "./hooks";

export const PopupAddUser = ({ model }) => {
  const activeModal = useActiveModal();

  const handleSubmit = () => {
    activeModal.change({ id: 1, name: "Jane Doe" });
  };

  return (
    <Popup header="Add User">
      <p>Masukkan semua data yang diperlukan lalu klik Tambah</p>
      <p>Nama Pengguna: {model.name}</p>
      <div className="flex justify-end gap-2 mt-3">
        <button
          className="bg-slate-200 p-3 py-2 rounded-md hover:bg-slate-300"
          onClick={activeModal.close}
        >
          Cancel
        </button>
        <button
          className="bg-lime-500 p-3 py-2 rounded-md hover:bg-lime-600"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </Popup>
  );
};
