import './Modal.css';

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Si el modal no está abierto, no se renderiza nada

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};