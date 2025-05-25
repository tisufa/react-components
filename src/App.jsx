import { useConfirmDialog } from "./components/ConfirmDialog";

function App() {
  const confirmDialog = useConfirmDialog();

  const handleDelete = () => {
    confirmDialog
      .deleteConfirmation({
        header: "Delete User",
        message: "Are you sure to delete this User?",
      })
      .then((confirm) => {
        if (!confirm) return;
        console.log("Do Delete!");
      });
  };

  const handleUpdate = () => {
    confirmDialog
      .updateCofirmation({
        header: "Update User",
        message: "Are you sure to update this User?",
      })
      .then((confirm) => {
        if (!confirm) return;
        console.log("Do Update!");
      });
  };

  const handleSave = () => {
    confirmDialog
      .saveConfirmation({
        header: "Save User",
        message: "Are you sure to save this User?",
      })
      .then((confirm) => {
        if (!confirm) return;
        console.log("Do Save!");
      });
  };

  return (
    <>
      <div className="w-screen min-h-screen grid items-center justify-center">
        <div>
          <div className="flex gap-3">
            <button
              type="button"
              className="bg-red-500 p-3 rounded-md cursor-pointer hover:bg-red-600 transition-all duration-300"
              onClick={handleDelete}
            >
              Delete User
            </button>

            <button
              type="button"
              className="bg-lime-500 p-3 rounded-md cursor-pointer hover:bg-lime-600 transition-all duration-300"
              onClick={handleUpdate}
            >
              Update User
            </button>

            <button
              type="button"
              className="bg-lime-500 p-3 rounded-md cursor-pointer hover:bg-lime-600 transition-all duration-300"
              onClick={handleSave}
            >
              Save User
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
