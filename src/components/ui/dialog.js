import React from "react";

export const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={() => onOpenChange(false)}
    >
      <div
        className="bg-white rounded-lg shadow-lg p-4 w-96"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export const DialogContent = ({ children }) => <div>{children}</div>;
export const DialogHeader = ({ children }) => (
  <div className="mb-4 border-b pb-2">{children}</div>
);
export const DialogTitle = ({ children }) => (
  <h2 className="text-lg font-bold">{children}</h2>
);
