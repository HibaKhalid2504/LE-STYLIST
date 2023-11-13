import React from "react";

const Badge = ({ text }) => {
  return (
    <div className="bg-slate w-[92px] h-[35px] text-white flex justify-center items-center text-base font-semibold hover:bg-[#d1cf6d] duration-300 cursor-pointer">
      {text}
    </div>
  );
};

export default Badge;
