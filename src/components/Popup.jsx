import { useActiveModal } from "../hooks";
const Popup = ({ header, isLoading, isProcessing, children }) => {
  const activeModal = useActiveModal();
  return (
    <div className="bg-white">
      <div className="bg-slate-100 p-3 flex justify-between items-center">
        <h3 className="text-xl font-medium">{header}</h3>
        <a
          href="#"
          className="group"
          onClick={(e) => {
            e.preventDefault();
            activeModal.close();
          }}
        >
          <em className="fas fa-times text-red-500 group-hover:text-red-600 group-hover:scale-125 transition-all duration-300"></em>
        </a>
      </div>
      <div className="p-3">{children}</div>
    </div>
  );
};

export { Popup };
