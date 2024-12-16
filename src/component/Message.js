"use client";
import { FiMessageCircle } from "react-icons/fi";

const Message = () => {
  return (
    <div className="fixed bottom-8 left-12 z-50 flex items-center justify-center">
      
      <div className="h-12 w-12 bg-red-600 flex items-center justify-center rounded-full shadow-lg">
        <FiMessageCircle className="h-8 w-6 text-white" />
      </div>
    </div>
  );
};

export default Message;
