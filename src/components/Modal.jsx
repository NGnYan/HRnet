import { useEffect } from "react";
import "../styles/components/Modal.css";

function Modal({ message, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        document.activeElement?.blur();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="modal-close" onClick={onClose}>
          x
        </button>

        <p>{message}</p>
      </div>
    </div>
  );
}

export default Modal;
