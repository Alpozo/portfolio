import Icon from '../Icon/Icon';
import './Modal.css';
export const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

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