import { useEffect, useState } from "react";

export const Modal = ({ onChange, onClose }) => {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShow(true);
    }, 10);
  }, []);

  const handleChange = () => {
    if (!onChange) return;
    setIsShow(false);
    setTimeout(() => {
      onChange({ id: 1, name: "John Doe" });
    }, 200);
  };

  const handleClose = () => {
    if (!onClose) return;
    setIsShow(false);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`fixed inset-0 bg-gray-500/75 transition-opacity duration-300 opacity-0 ${
          isShow ? "opacity-100" : ""
        }`}
        aria-hidden="true"
      ></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          {/* Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
            From: ""
            To: ""
            Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" */}
          <div
            className={`relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg duration-300 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 ${
              isShow ? "opacity-100 translate-y-0 sm:scale-100" : ""
            }`}
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                  <svg
                    className="size-6 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                    />
                  </svg>
                </div>
                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-base font-semibold text-gray-900"
                    id="modal-title"
                  >
                    Deactivate account
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to deactivate your account? All of
                      your data will be permanently removed. This action cannot
                      be undone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md cursor-pointer bg-lime-500 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-lime-600 sm:ml-3 sm:w-auto"
                onClick={handleChange}
              >
                Submit
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md cursor-pointer bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
