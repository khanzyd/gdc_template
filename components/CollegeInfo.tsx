import Image from "next/image";
import React from "react";

const College_Info = () => {
  return (
    <>
      <div className="  flex w-screen items-center">
        <div className=" w-3/5 px-14 py-6 text-justify text-lg tracking-wide leading-6 flex flex-col justify-center">
          <div className="flex items-center w-[27%] mx-auto  mb-4">
            <div className="w-full">
              <hr className="bg-black border-none h-[1.5px]" />
            </div>
            <Image
              src={"/teeth.svg"}
              className="mx-4"
              height={30}
              width={30}
              alt=""
            />
            <div className="w-full ">
              <hr className="bg-black border-none h-[1.5px]" />
            </div>
          </div>
          <p>
            &emsp;&emsp;&emsp;&emsp; One of Maharashtra's prestigious government dental schools, Government Dental College & Hospital (GDCH) Aurangabad was established in 1982 and 1983. The goal of the college, which is more commonly referred to as GDCH Aurangabad, was to provide the best dental care and services for oral and maxillofacial surgery to the rural population and the less fortunate in society. The college, which is a part of the Maharashtra University of Health Sciences in Nashik and has been approved by the Dental Council of India, is well-known for its dedication to providing dental education and healthcare of the highest possible quality. Dentistry programs are available for both undergraduates and postgraduates at GDCH Aurangabad. The four-year Bachelor of Dental Surgery (BDS) program provides students with comprehensive knowledge and skills in a variety of dental fields. Preventive, curative, and rehabilitative dental services are all possible for students who complete this program, which trains them to be competent dental professionals.
          </p>
          <button className="bg-[#82261B] px-4 py-2 rounded-tr-2xl rounded-bl-2xl text-center w-fit mx-auto mt-4 text-xl font-semibold text-slate-50 ">
            read more
          </button>
        </div>
        <div className="  w-2/5 -mt-9 ">
          <iframe
            src="https://youtube.com/embed/kHhK1icL3qw"
            height={300}
            width={560}
            className=""
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default College_Info;
