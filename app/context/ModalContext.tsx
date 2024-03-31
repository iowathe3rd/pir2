import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
  useState,
} from "react";

interface ModalContextType {
  isOpen: boolean;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  modalContent: ReactNode;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalProvider: React.FC = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <ModalContext.Provider
      value={{ isOpen, openModal, closeModal, modalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}

export { ModalProvider, useModal };
