export const PopupAddUser = ({ onChange, onClose, model }) => {
  const handleSubmit = () => {
    setTimeout(() => {
      console.log("Date received!");
      onChange({ id: 1, name: "Jane Doe" });
    }, 3000);
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold">Ubah Pengguna</h1>
      <p>Masukkan semua data yang diperlukan lalu klik Tambah</p>
      <p>Nama Pengguna: {model.name}</p>
      <div className="flex justify-end gap-2 mt-3">
        <button
          className="bg-slate-200 p-3 py-2 rounded-md hover:bg-slate-300"
          onClick={onClose}
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
    </div>
  );
};
