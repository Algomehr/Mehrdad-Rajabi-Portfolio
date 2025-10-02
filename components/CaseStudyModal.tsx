
import React, { useEffect, useRef } from 'react';
import { CloseIcon } from './Icons';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ isOpen, onClose, children }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);
  
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="relative bg-gray-900 border border-gray-700 w-full max-w-4xl max-h-[90vh] rounded-lg shadow-2xl shadow-blue-500/10 overflow-y-auto"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
          aria-label="Close case study"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};
