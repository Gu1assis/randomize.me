import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

export default function Portal({ children }: PortalProps) {
  const modalRoot = document.getElementById('modal-root');
  
  if (!modalRoot) {
    console.error('modal-root element not found');
    return null;
  }

  return createPortal(children, modalRoot);
}