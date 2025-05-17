import { useModal } from "./hooks";
import { PopupAddUser } from "./PopupAddUser";
import { PopupDetailCategory } from "./PopupDetailCategory";

function App() {
  const modal = useModal();

  const handleShowModal = () => {
    const model = { id: 1, name: "John Doe" };
    modal.open(PopupAddUser, model).then((result) => {
      console.log(result);
    });
  };

  const handleShowDetailCategory = () => {
    modal.open(PopupDetailCategory, { name: "ReactJS" });
  };

  return (
    <>
      <div className="w-screen min-h-screen flex items-center justify-center gap-3">
        <button
          type="button"
          className="bg-lime-500 p-3 rounded-md cursor-pointer hover:bg-lime-600 transition-all duration-300"
          onClick={handleShowModal}
        >
          <em className="fas fa-plus"></em> Add User
        </button>

        <button
          type="button"
          className="bg-lime-500 p-3 rounded-md cursor-pointer hover:bg-lime-600 transition-all duration-300"
          onClick={handleShowDetailCategory}
        >
          <em className="fas fa-search"></em> Detail Category
        </button>
      </div>
    </>
  );
}

export default App;
