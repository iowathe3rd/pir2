import { Box, Modal as MuiModal } from "@mui/material";
import { useModal } from "~/context/ModalContext";

const Modal = () => {
  const { isOpen, closeModal, modalContent } = useModal();

  const sx = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: {
      xs: "100%",
      md: "50%",
      lg: "40%",
      xl: "30%",
    },
    backgroundColor: "white",
    p: 4,
    borderRadius: "15px",
  };

  return (
    <MuiModal
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box sx={sx} className="shadow">
        {/* Убедитесь, что ваш modalContent поддерживает атрибуты id, если они необходимы для доступности. */}
        {modalContent}
      </Box>
    </MuiModal>
  );
};

export default Modal;
