import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-slate-800 group">
      <div className="max-w-container mx-auto border-t-[1px] pt-5 pb-5">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-white duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2023 | LE STYLIST | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
