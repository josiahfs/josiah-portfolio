import React from "react";

interface ButtonProps {
  onClick: () => void;
  text: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text }) => {
  return (
    <button
      className="bg-[#ECECEC] text-[#0B0B0B] font-medium text-[20px] px-[40px] py-[12px] rounded-[8px] hover: hover:bg-[#C19C63] hover:text-[#ECECEC] transition-all"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
