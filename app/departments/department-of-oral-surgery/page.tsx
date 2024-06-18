import Faculty from "@/components/department/Faculty";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="lg:max-w-[70%] m-auto min-h-screen flex flex-col p-3 gap-8">
      <div className=" border-2 border-[#b8483ba5] py-12 text-center rounded-sm  ">
        <h1 className=" capitalize text-2xl font-bold text-[var(--primary-color)]">
          {"Department of Oral and Maxillofacial Surgery"}
        </h1>
      </div>
      <div
        id="about"
        className=" w-full flex flex-col justify-center items-center py-3"
      >
        {/* <Image
          src={"/departments/department-of-oral-surgery/Department-Image.png"}
          alt="Department Image"
          width={1200}
          height={200}
          className=" rounded"
        /> */}
        <div className=" p-3 text-justify text-lg">
          <h1 className="text-2xl font-bold text-[var(--primary-color)] text-center mb-4">
            HoD's Message
          </h1>
          <p>
            We, at the department of OMFS, provide comprehensive medical and
            surgical management to patients. Not only this, We also address
            emotional and psychological issues of the patients. We provide care
            not only in terms of disease but also their entire well being-their
            home, school, office, work – anything and everything that they
            forget they are ill and feel like they are at home away from home.
            Our patients too follow this and care for other patients – an idea
            of ‘Pay it forward’. <br /> We follow the philosophy of —{" "}
            <span className="italic">
              “ If you treat a disease – you win or you lose; but if you treat a
              person, I guarantee you will win, no matter what the outcome.”
            </span>
          </p>
        </div>
      </div>
      <div id="faculty">
        <div className=" flex flex-col justify-center items-center pt-3">
          <h1 className=" text-2xl font-semibold text-[var(--primary-color)]">
            Our Faculty
          </h1>
        </div>
        <div className=" grid place-items-center sm:grid-cols-4 grid-cols-1 p-6 gap-4  ">
          <Faculty
            profilePicSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/profile_pic.png"
            cvSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/cv.pdf"
            facultyName="Dr. Govind Raghunath Suryawanshi"
            facultyDesignation="ASSOCIATE PROFESSOR (ACADEMIC)"
          />
          <Faculty
            profilePicSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/profile_pic.png"
            cvSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/cv.pdf"
            facultyName="Dr. Govind Raghunath Suryawanshi"
            facultyDesignation="ASSOCIATE PROFESSOR (ACADEMIC)"
          />
          <Faculty
            profilePicSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/profile_pic.png"
            cvSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/cv.pdf"
            facultyName="Dr. Govind Raghunath Suryawanshi"
            facultyDesignation="ASSOCIATE PROFESSOR (ACADEMIC)"
          />
          <Faculty
            profilePicSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/profile_pic.png"
            cvSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/cv.pdf"
            facultyName="Dr. Govind Raghunath Suryawanshi"
            facultyDesignation="ASSOCIATE PROFESSOR (ACADEMIC)"
          />
          <Faculty
            profilePicSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/profile_pic.png"
            cvSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/cv.pdf"
            facultyName="Dr. Govind Raghunath Suryawanshi"
            facultyDesignation="ASSOCIATE PROFESSOR (ACADEMIC)"
          />
          <Faculty
            profilePicSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/profile_pic.png"
            cvSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/cv.pdf"
            facultyName="Dr. Govind Raghunath Suryawanshi"
            facultyDesignation="ASSOCIATE PROFESSOR (ACADEMIC)"
          />
          <Faculty
            profilePicSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/profile_pic.png"
            cvSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/cv.pdf"
            facultyName="Dr. Govind Raghunath Suryawanshi"
            facultyDesignation="ASSOCIATE PROFESSOR (ACADEMIC)"
          />
          <Faculty
            profilePicSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/profile_pic.png"
            cvSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/cv.pdf"
            facultyName="Dr. Govind Raghunath Suryawanshi"
            facultyDesignation="ASSOCIATE PROFESSOR (ACADEMIC)"
          />
        </div>
      </div>
      <div id="vision">
        <div className="p-4 my-8 text-lg text-justify shadow-md rounded-sm border-t-2 border-slate-100">
          <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center py-1">
            Vision
          </h1>
          <div className="pl-8">
            <p className="list-item">
              Vision of Department of Oral and Maxillofacial Surgery is to train
              under graduate and post graduate students to attend the highest
              standard of education in the field of oral and maxillofacial
              surgery.
            </p>
            <p className="list-item">
              Department of Oral and Maxillofacial Surgery hopes to bring
              together all education facilities of the highest order to train
              personnel in the field of oral and Maxillofacial surgery and set
              up state of art facilities in order to provide best possible care
              for patients.
            </p>
            <p className="list-item">
              In addition setting a platform for research of international
              standards and conducting high-quality research is an integral part
              of Department of oral and Maxillofacial surgery.
            </p>
          </div>
        </div>
      </div>
      <div id="mission">
        <div className=" p-3 text-lg text-justify shadow-md rounded-sm border-t-2 border-slate-100 ">
          <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center py-1">
            Mission
          </h1>
          <p>
            The mission of Department of Oral and Maxillofacial Surgery is to
            improve performance of the oral health system, oral health status
            and awareness through education, research and service. Department of
            Oral and Maxillofacial Surgery believes in being paradigm shift in
            education & healing.
          </p>
        </div>
      </div>
      <div className=" shadow py-4 px-8 rounded-sm max-sm:px-2">
        <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center py-3">
          Departmental Achievements
        </h1>
        <table className=" table border-collapse border border-zinc-200 table-fixed text-center">
          <thead>
            <tr className=" text-lg text-zinc-800">
              <th className="border border-zinc-200 font-semibold w-[20%] max-sm:text-xs">
                Sr. No.
              </th>
              <th className="border border-zinc-200 font-semibold  max-sm:text-xs">
                Departmental <br className=" max-sm:block hidden" />{" "}
                Achievements
              </th>
              <th className="border border-zinc-200 font-semibold w-[20%] max-sm:text-xs">
                Year
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-zinc-200">1</td>
              <td className="border border-zinc-200">
                CELEBRATION OF ORAL SURGERY DAY – “ HELMET AWARENESS DRIVE “ ON
                13 TH FEBRUARY STARTED
              </td>
              <td className="border border-zinc-200">2013</td>
            </tr>
            <tr>
              <td className="border border-zinc-200">2</td>
              <td className="border border-zinc-200">
                INCREASE INTAKE CAPACITY FROM 40 TO 50 SEATS IN GOVERNMENT
                DENTAL COLLEGE & HOSPITAL ,AURANGABAD
              </td>
              <td className="border border-zinc-200">2018</td>
            </tr>
            <tr>
              <td className="border border-zinc-200">3</td>
              <td className="border border-zinc-200">
                PREDICTABLE LOCAL ANAESTHESISA SCIENTIFIC ACTIVITY ORGANIZED
              </td>
              <td className="border border-zinc-200">2019</td>
            </tr>
            <tr>
              <td className="border border-zinc-200">4</td>
              <td className="border border-zinc-200">
                INCREASE INTAKE CAPACITY FROM 50 TO 57 SEATS IN GOVERNMENT
                DENTAL COLLEGE & HOSPITAL ,AURANGABAD
              </td>
              <td className="border border-zinc-200">2020-21</td>
            </tr>
            <tr>
              <td className="border border-zinc-200">5</td>
              <td className="border border-zinc-200">
                INCREASE INTAKE CAPACITY FROM 57 TO 63 SEATS IN GOVERNMENT
                DENTAL COLLEGE & HOSPITAL ,AURANGABAD
              </td>
              <td className="border border-zinc-200">2020-21</td>
            </tr>
            <tr>
              <td className="border border-zinc-200">6</td>
              <td className="border border-zinc-200">
                ORAL & MAXILLOFACIAL SURGERY (WITH 3 MDS SEATS GRANTED ON &
                AFTER 16/09/2021)
              </td>
              <td className="border border-zinc-200">2021</td>
            </tr>
            <tr>
              <td className="border border-zinc-200">7</td>
              <td className="border border-zinc-200">
                POST COVID MUCORMYCOSIS TREATMENT & ORAL REHABILITATION CLINIC
                STARTED
              </td>
              <td className="border border-zinc-200">2021</td>
            </tr>
            <tr>
              <td className="border border-zinc-200">8</td>
              <td className="border border-zinc-200">
                WORKSHOP , LECTURE AND HANDS ON COURSE ON DIRECT/INDIRECT SINUS
                LIFT ORGANIZED
              </td>
              <td className="border border-zinc-200">JUNE 2023</td>
            </tr>
            <tr>
              <td className="border border-zinc-200">9</td>
              <td className="border border-zinc-200">
                LECTURE ON CORTICOBASAL IMPLANTS ORGANIZED
              </td>
              <td className="border border-zinc-200">2023</td>
            </tr>
            <tr>
              <td className="border border-zinc-200">10</td>
              <td className="border border-zinc-200">
                TRAUMA AWARENESS CAMPAIGN ESTABLISHED
              </td>
              <td className="border border-zinc-200">AUGUST 2023</td>
            </tr>
            <tr>
              <td className="border border-zinc-200">11</td>
              <td className="border border-zinc-200">
                ORIENTATION OF HYBRID CORTICOBASAL IMPLANTS IN FULL ARCH CASES &
                HANDS-ON WORKSHOP ON PTERYGOID IMPLANTS ON MODELS
              </td>
              <td className="border border-zinc-200">APRIL 2024</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div
        id="videos"
        className=" shadow-md rounded-md border-t-2 border-slate-100 "
      >
        <div className=" py-3 text-center">
          <h2 className="text-3xl text-center tracking-wider">Videos</h2>
          <div className="flex items-center w-[10%] mx-auto my-4">
            <div className="w-full">
              <hr className="bg-black border-none h-[1.5px]" />
            </div>
            <Image
              src={"/teeth.svg"}
              className=" "
              height={25}
              width={25}
              alt=""
            />
            <div className="w-full ">
              <hr className="bg-black border-none h-[1.5px]" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center py-5 justify-center gap-y-5">
            <div className=" w-70 h-44 md:w-[30rem] md:h-64 ">
              <iframe
                src="https://youtube.com/embed/H_ThvSdZ_HE"
                className="w-full h-full rounded-md"
              ></iframe>
            </div>
            <div className=" w-70 h-44 md:w-[30rem] md:h-64  ">
              <iframe
                src="https://youtube.com/embed/TI5gppbFDK8"
                className="mx-auto w-full h-full rounded-md"
              ></iframe>
            </div>
            <div className="  w-70 h-44 md:w-[30rem] md:h-64  ">
              <iframe
                src="https://youtube.com/embed/zuB30480L9w"
                className="mx-auto w-full h-full rounded-md"
              ></iframe>
            </div>
            <div className="  w-70 h-44 md:w-[30rem] md:h-64  ">
              <iframe
                src="https://youtube.com/embed/mQvGtwXf1UY"
                className="mx-auto w-full h-full rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
