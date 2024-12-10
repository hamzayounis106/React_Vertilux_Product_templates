import React from "react";

export default function HeadingBar({heading}) {
  return (
    <div className="p-[10px] w-[100%] md:w-full flex justify-start items-center border-t-[1px] border-b-[1px] border-[#58585A] ">
     <h2 className=" text-[#58585A] text-[18px] md:text-[20px] font-[400]  Roboto"> {heading}</h2>
    </div>
  );
}
