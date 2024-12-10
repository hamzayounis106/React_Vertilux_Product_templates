import React, { useContext } from "react";
import { AcfContext } from "../Page/Home";

export default function Header() {
  const acfData = useContext(AcfContext);
  console.log("Header", acfData);
  return (
    <>
      <div className=" mt-10 w-[100%]  flex justify-center items-start flex-col">
        <h2 className="text-[#231F20] IBM  text-[39px] font-[300]">
          {acfData?.main_heading}
        </h2>
        <h2 className="text-[#231F20] IBM  text-[42px] font-[600]">
          {acfData?.sub_heading}
        </h2>
      </div>
    </>
  );
}
