import React, { ReactNode } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, className }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={`fixed inset-0 flex items-center justify-center z-50 ${className}`}>
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="fixed bg-white p-4 rounded shadow-md">
                <button
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <AiFillCloseCircle />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;
