import * as React from "react";
import { createPortal } from "react-dom";

export function Dialog({ open, onOpenChange, children }) {
  if (!open) return null;

  const overlay = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-lg shadow-lg p-6 min-w-[320px] max-w-[90vw] relative">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-primary text-2xl font-bold"
          onClick={() => onOpenChange(false)}
          aria-label="Fechar"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );

  // Renderiza no body para evitar problemas com containers transformados (ex.: Lenis)
  return createPortal(overlay, document.body);
}
