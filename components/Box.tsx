import Image from "next/image";
import React from "react";

type box = {
  svg: string;
  heading: string;
  para: string;
};

const Box: React.FC<box> = ({ svg, heading, para }) => {
  return (
    <div className="relative h-40 hover:bg-yellow-200  border rounded-2xl border-slate-900 w-[480px]">
      <div className="bg-orange-400 border-4 absolute min-w-fit min-h-fit p-2 top-[-30%] left-1/2 transform -translate-x-1/2">
        <Image src={"/trophy.svg"} height={60} width={60} alt="" />
      </div>
      <h2 className=" mt-12  text-center text-2xl font-semibold">Outreach</h2>
      <p className="text-md text-center mt-2 ">
        Govt. Dental College & Hospital, Nagpur was established in 1968 to....
      </p>
    </div>
  );
};

export default Box;
