"use client";
import { FiMessageCircle } from "react-icons/fi";

const Message = () => {
  return (
    <div className="fixed bottom-4 left-8 z-50 flex items-center justify-center">
      
      <div className="h-16 w-16 bg-red-600 flex items-center justify-center rounded-full shadow-lg">
        <FiMessageCircle className="h-12 w-10 text-white" />
      </div>
    </div>
  );
};

export default Message;
