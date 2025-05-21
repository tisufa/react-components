import { useActiveModal } from "../hooks";
const Popup = ({
  header,
  isLoading,
  isProcessing,
  children,
  loading,
  processing,
}) => {
  const activeModal = useActiveModal();

  const createLoader = (loadingText = "Memuat Data...") => {
    return (
      <div className="min-h-44 grid items-center justify-center">
        <div className="text-center">
          <div className="lds-ripple mx-auto">
            <div></div>
            <div></div>
          </div>
          <p>
            {isLoading
              ? loading
                ? loading()
                : loadingText
              : isProcessing
              ? processing
                ? processing()
                : loadingText
              : loadingText}
          </p>
        </div>
      </div>
    );
  };

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
      {isLoading ? (
        createLoader()
      ) : (
        <>
          {isProcessing && (
            <div className="absolute top-0 left-0 w-full h-full bg-white/35">
              {createLoader("Processing...")}
            </div>
          )}
          <div className="p-3">{children}</div>
        </>
      )}
    </div>
  );
};

export { Popup };

