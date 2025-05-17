import { useModal } from "./hooks";
import { PopupAddUser } from "./PopupAddUser";

function App() {
  const modal = useModal();
  const handleShowModal = () => {
    const model = { id: 1, name: "John Doe" };
    modal.open(PopupAddUser, model).then((result) => {
      console.log("Updated");
      console.log(result);
    });
  };

  return (
    <>
      <div className="w-screen min-h-screen flex items-center justify-center">
        <button
          type="button"
          className="bg-lime-500 p-3 rounded-md cursor-pointer hover:bg-lime-600 transition-all duration-300"
          onClick={handleShowModal}
        >
          Open Modal
        </button>
      </div>
    </>
  );
}

export default App;
