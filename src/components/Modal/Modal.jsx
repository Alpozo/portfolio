import Icon from '../Icon/Icon';
import './Modal.css';
// import closeIcon from "../../assets/profile-picture.jpg";
import closeIcon from "../../assets/icons/close.svg";

export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null; // Si el modal no está abierto, no se renderiza nada

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={onClose}>
                    <Icon name="close" />
                </button>
                {children}
            </div>
        </div>
    );
};