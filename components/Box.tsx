import Image from "next/image";
import React from "react";

type box = {
  svg: string;
  heading: string;
  para: string;
};

const Box: React.FC<box> = ({ svg, heading, para }) => {
  return (
    <div className="relative h-40 hover:bg-[#d2766B88]  border rounded-2xl border-slate-900 w-[480px]  ease-in-out  duration-300">
      <div className="bg-[#82261B] rounded-lg border-4 absolute min-w-fit min-h-fit p-2 top-[-30%] left-1/2 transform -translate-x-1/2">
        <Image className="invert" src={svg} height={60} width={60} alt="" />
      </div>
      <h2 className=" mt-12  text-center text-2xl font-semibold">{heading}</h2>
      <p className="text-md text-center mt-2 ">{para}</p>
    </div>
  );
};

export default Box;
