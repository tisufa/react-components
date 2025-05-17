import { useState } from "react";
import { Modal } from "./components/Modal";

function App() {
  const [isShow, setIsShow] = useState(false);

  const handleShowModal = () => {
    setIsShow(true);
  };

  const handleSubmit = (result) => {
    console.log(result);
    setIsShow(false);
  };

  const handleCancel = () => {
    setIsShow(false);
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
      {isShow && <Modal onChange={handleSubmit} onClose={handleCancel} />}
    </>
  );
}

export default App;
