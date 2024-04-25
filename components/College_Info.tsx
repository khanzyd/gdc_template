import Image from "next/image";
import React from "react";

const College_Info = () => {
  return (
    <>
      <div className="College_info h-fit min-h-96 flex w-screen items-center">
        <div className=" w-[60%] px-14 py-6 text-justify text-lg tracking-wide leading-6 flex flex-col justify-center">
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
            &emsp;&emsp;&emsp;&emsp; Government Dental College & Hospital,
            Nagpur (GDCHN) is a Premier Dental Institute catering to oral health
            care needs of the population of Central India. It is located in the
            geographical centre of India in the campus of the Government Medical
            College, which boasts to be the largest medical campus in Asia.
            Established in the year 1968, the institute is recognized by its
            governing bodies, Directorate of Medical Education & Research
            (DMER), Medical Education & Drug Dept. (MEDD, GOM) and Dental
            Council of India (DCI). Since its inception, it has served as a
            nurturing alma mater to more than 2000 dental graduates. GDCHN was
            earlier affiliated to Nagpur University (RSTMU) with an intake
            capacity of 30 students for BDS. Since then, the intake capacity has
            more than doubled, to 63 in 2019. In the year 1998, GDCHN got its UG
            program affiliated to the Maharashtra University of Health Sciences
            (MUHS), the largest Health Education University in Maharashtra. The
            institute has been a pioneer in establishing the MDS Post Graduate
            program in all specialties. The PG degree program got affiliated to
            MUHS in the year 2009. GDCHN grew further with the addition of PhD
            program in 2014 and fellowship program in 2017.
          </p>
          <button className="bg-[#82261B] px-4 py-2 rounded-tr-2xl rounded-bl-2xl text-center w-fit mx-auto mt-4 text-xl font-semibold text-slate-50 ">
            read more
          </button>
        </div>
        <div className="  w-[40%]">
          <iframe
            src="https://youtube.com/embed/kHhK1icL3qw"
            height={300}
            width={560}
            className="mx-auto"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default College_Info;
