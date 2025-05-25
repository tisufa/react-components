import { useEffect, useState } from "react";
import { Popup } from "./components/Popup";
import { useActiveModal } from "./hooks";

export const PopupAddUser = ({ model }) => {
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

  const activeModal = useActiveModal();

  const handleSubmit = () => {
    setState((prev) => ({
      ...prev,
      isProcessing: true,
    }));

    setTimeout(() => {
      activeModal.change({ id: 1, name: "Jane Doe" });
    }, 2000);
  };

  return (
    <Popup
      header="Add User"
      isLoading={state.isLoading}
      isProcessing={state.isProcessing}
      loading={() => <>Memuat Data User...</>}
      processing={() => <>Sedang Menyimpan User...</>}
    >
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
