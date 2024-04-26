import Image from "next/image";
import React from "react";

const Life_At_GDC = () => {
  return (
    <>
      <div className=" py-7 min-h-96 text-center">
        <h2 className="text-3xl text-center tracking-wider">LIFE AT GDC</h2>
        <div className="flex items-center w-[10%] mx-auto my-4">
          <div className="w-full">
            <hr className="bg-black border-none h-[1.5px]" />
          </div>
          <Image
            src={"/teeth.svg"}
            className="mx-2"
            height={25}
            width={25}
            alt=""
          />
          <div className="w-full ">
            <hr className="bg-black border-none h-[1.5px]" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-0 px-[15%] py-10 justify-center gap-y-5">
          <div className=" h-[300px] w-[500px]">
            <iframe
              src="https://youtube.com/embed/H_ThvSdZ_HE"
              className="mx-auto w-full h-full"
            ></iframe>
          </div>
          <div className=" h-[300px] w-[500px]">
            <iframe
              src="https://youtube.com/embed/TI5gppbFDK8"
              className="mx-auto w-full h-full"
            ></iframe>
          </div>
          <div className=" h-[300px] w-[500px]">
            <iframe
              src="https://youtube.com/embed/zuB30480L9w"
              className="mx-auto w-full h-full"
            ></iframe>
          </div>
          <div className=" h-[300px] w-[500px]">
            <iframe
              src="https://youtube.com/embed/mQvGtwXf1UY"
              className="mx-auto w-full h-full"
            ></iframe>
          </div>
        </div>
        <button className="bg-[#82261B] px-4 py-2 rounded-tr-2xl rounded-bl-2xl text-center w-fit mx-auto text-xl font-semibold text-slate-50">
          read more
        </button>
      </div>
    </>
  );
};

export default Life_At_GDC;
