import { useRef } from "react";
import ReactModal from "react-modal";

export const Modal = ({ isOpen, onRequestClose, style, children }) => {
  const modalRef = useRef();

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      ref={modalRef}
      style={{
        overlay: {
          backgroundColor: "none",
        },
        content: {
          position: "absolute",
          inset: 0,
          background: 'var(--background2)',
          WebkitOverflowScrolling: 'touch',
          borderRadius: 0,
          outline: "none",
          padding: "0",
          zIndex: "100",
        },
        ...style
      }}
    >
      {children}
    </ReactModal>
  );
};
