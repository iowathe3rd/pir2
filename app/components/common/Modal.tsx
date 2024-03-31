import ReactDOM from "react-dom";
import { useModal } from "~/context/ModalContext";

const Modal = () => {
  const { isOpen, closeModal, modalContent } = useModal();

  return isOpen
    ? ReactDOM.createPortal(
        <div className="absolute inset-0 left-[50%] top-[50%] z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative rounded bg-white p-6 text-black shadow-lg">
            <button
              className="absolute right-0 top-0 mr-4 mt-4"
              onClick={closeModal}
            >
              &times;
            </button>
            {modalContent}
          </div>
        </div>,
        document.body,
      )
    : null;
};

export default Modal;
