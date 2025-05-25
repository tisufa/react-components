import { useActiveModal, useModal } from "../hooks";
import { Popup } from "./Popup";

const ConfirmDialog = ({ model }) => {
  const activeModal = useActiveModal();
  return (
    <Popup>
      <div className="text-center grid gap-2">
        { model.icon ? model.icon() : <></>}
        <h3 className="font-medium text-xl">{model.header}</h3>
        <p className="mb-2">{model.message}</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            className="bg-slate-100 px-3 py-2 rounded-md cursor-pointer hover:bg-slate-200 transition-all duration-300 w-full"
            onClick={() => activeModal.change(false)}
          >
            {model.negativeButton}
          </button>
          <button
            type="button"
            className={`px-3 py-2 rounded-md cursor-pointer transition-all duration-300 w-full ${model.variantClassName}`}
            onClick={() => activeModal.change(true)}
          >
            {model.positiveButton}
          </button>
        </div>
      </div>
    </Popup>
  );
};

const useConfirmDialog = () => {
  const modal = useModal();

  const saveConfirmation = ({ header, message, positiveButton, negativeButton} = {}) => {
    return modal.open(
      ConfirmDialog,
      {
        header: header || "Save Confirmation",
        message: message || "Are you sure to save this item?",
        positiveButton: positiveButton || "Save",
        negativeButton: negativeButton || "Cancel",
        variantClassName: 'bg-lime-500 hover:bg-lime-500',
        icon: () => <em className="far fa-circle-question text-[46px] text-lime-500"></em>
      },
      {}
    );
  };

  const updateCofirmation = ({ header, message, positiveButton, negativeButton} = {})=> {
    return modal.open(
      ConfirmDialog,
      {
        header: header || "Update Confirmation",
        message: message || "Are you sure to update this item?",
        positiveButton: positiveButton || "Update",
        negativeButton: negativeButton || "Cancel",
        variantClassName: 'bg-orange-500 hover:bg-orange-500',
        icon: () => <em className="far fa-circle-question text-[46px] text-orange-500"></em>
      },
      {}
    );
  };

  const deleteConfirmation = ({ header, message, positiveButton, negativeButton} ={})=> {
    return modal.open(
      ConfirmDialog,
      {
        header: header || "Delete Confirmation",
        message: message || "Are you sure to delete this item?",
        positiveButton: positiveButton || "Delete",
        negativeButton: negativeButton || "Cancel",
        variantClassName: 'bg-red-500 hover:bg-red-500',
        icon: () => <em className="far fa-times-circle text-[46px] text-red-500"></em>
      },
      {}
    );
  };

  return { saveConfirmation, updateCofirmation, deleteConfirmation };
};

export { useConfirmDialog };

