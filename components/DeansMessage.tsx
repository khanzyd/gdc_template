import Image from "next/image";
import React from "react";

const Deans_Message = () => {
    return (
        <>
            <div className=" relative min-h-80 h-fit w-full flex my-20 justify-center pl-72 pr-48 gap-32">
                <div className="flex flex-col justify-center items-center">
                    <div className="mt-10 w-[250px]">
                        <Image src={"/dean.png"} height={500} width={500} alt="" />
                    </div>
                    <h3 className="text-xl font-bold tracking-wide mt-3 text-center">
                        DR A. B. C
                    </h3>
                    <p className="text-lg font-semibold tracking-wide text-center">
                        DEAN & PROFESSOR
                    </p>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h2 className="text-3xl tracking-wider w-fit">DEAN'S MESSAGE</h2>
                    <div className="flex items-center w-[32%] my-3 pr-4">
                        <div className="w-full pr-1">
                            <hr className="bg-black border-none h-[1.3px]" />
                        </div>
                        <Image
                            src={"/teeth.svg"}
                            className="mx-4"
                            height={30}
                            width={30}
                            alt=""
                        />
                        <div className="w-full pl-1">
                            <hr className="bg-black border-none h-[1.3px]" />
                        </div>
                    </div>
                    <p className="text-lg leading-6 text-justify">
                        Welcome to this prestigious, Govt. Dental College and Hospital, Aurangabad one of its oldest dental education institutions in central India. Popularly known as GDC, this institution was established in the year 1968 by Govt. of Maharashtra, with the primary objective of spreading dental education and oral health care in Vidarbha and Central India. Today GDC Aurangabad is an important integral part of the health care system due to efforts of visionary leaders, skilled staff, dedicated students, use of newer technology and research in Oral Health.
                    </p>
                </div>
                <button className="bg-[#82261B] px-4 py-2 rounded-tr-2xl rounded-bl-2xl text-center w-fit mx-auto text-xl font-semibold text-slate-50 absolute top-[93%] left-0 right-0 ">
                    read more
                </button>
            </div>
        </>
    );
};

export default Deans_Message;
