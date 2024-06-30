import Faculty from "@/components/department/Faculty";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="lg:max-w-[70%] m-auto min-h-screen flex flex-col p-3 gap-8">
      <div className=" border-2 border-[#b8483ba5] py-12 text-center rounded-sm  ">
        <h1 className=" capitalize text-2xl font-bold text-[var(--primary-color)]">
          {"Department of Oral Pathology and Microbiology"}
        </h1>
      </div>
      <div
        id="about"
        className=" w-full flex flex-col justify-center items-center py-3"
      >
        {/* <Image
          src={"/departments/department-of-oral-pathology/Department-image.jpg"}
          alt="Department Image"
          width={1200}
          height={200}
          className=" rounded h-[600px] object-fit max-sm:h-[250px] "
        /> */}
        <div className=" p-3 mt-5 text-justify text-lg shadow rounded-md  max-sm:p-4 max-sm:text-base">
          <h1 className="text-2xl font-bold text-[var(--primary-color)] text-center mb-4">
            Introduction
          </h1>
          <p className=" text-justify">
            Oral pathology is at the confluence of basic sciences and clinical
            dentistry. It deals with nature, identification and management of
            diseases of oral and maxillofacial structures. It is the science
            that investigates the causes, process & effects of these diseases.
            It utilizes various means like cytology, biopsy, biochemical
            investigations & advanced investigative techniques (e.g. IHC & PCR)
            for accurate diagnosis and further patient management.
          </p>
        </div>
      </div>
      {/* <div id="faculty">
        <div className=" flex flex-col justify-center items-center pt-3">
          <h1 className=" text-2xl font-semibold text-[var(--primary-color)]">
            Our Faculty
          </h1>
        </div>
        <div className=" flex flex-wrap gap-8 justify-center p-6 ">
          <Faculty
            profilePicSrc="/departments/department-of-oral-surgery/Kanchan-Shah/Photo.png"
            cvSrc="/departments/department-of-oral-surgery/Kanchan-Shah/Kanchan-Shah.pdf"
            facultyName="Dr.Kanchan Shah"
            facultyDesignation="HOD & Professor"
          />
          
        </div>
      </div> */}
      <div id="vision">
        <div className="p-4 my-8 text-lg text-justify shadow rounded-sm border-t-2 border-slate-100  max-sm:p-4 max-sm:text-base">
          <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center py-1">
            Mission & Vision
          </h1>
          <div className="pl-8">
            <p className="list-item">
              To bring up the professionals with highest cognitive, affective
              and psychomotor skills of global standards.
            </p>
            <p className="list-item">
              To train graduate and postgraduate students competent to deliver
              best possible treatment modalities for oral and dental diseases at
              rural as well as global levels.
            </p>
            <p className="list-item">
              To inculcate ethical values in day-to-day practice.
            </p>
            <p className="list-item">
              An institute which can provide a high-quality education in health
              sciences at par with global standards in terms of knowledge and
              skills which would be beneficial to the society.
            </p>
          </div>
        </div>
      </div>

      <div className=" shadow py-4 text-lg px-8 rounded-sm  max-sm:p-4 max-sm:text-base">
        <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center py-3">
          Scope of the Department
        </h1>

        <p className=" text-justify">
          Department has teaching program for first year BDS ( Dental anatomy
          and histology) and Third year BDS (Oral pathology and microbiology)
          The educational program of the department is comprised of a broad
          range of didactic, practical (Carvings of tooth models & Microscopy of
          normal and abnormal oral tissue) and clinical activities for
          undergraduate and postgraduate students. The well trained teaching
          faculty, advanced audiovisual aids and museum create a good learning
          atmosphere for the students. The strong basics regarding oral anatomy
          and histology & oral pathology remain the backbone of entire
          dentistry. The knowledge of oral pathology helps to develop treatment
          plans that address existing problems as well as disease prevention and
          health promotion. The art & photography unit in the department
          supports the academic & extracurricular activities by providing
          illustrations.
        </p>
      </div>
      <div className=" shadow py-4 text-lg px-8 rounded-sm max-sm:p-4 max-sm:text-base">
        <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center py-3">
          Patient services
        </h1>

        <p className=" text-justify">
          In the department Investigative Procedures such as Complete hemogram
          manually or using automated blood cell counter, Biochemical
          investigations like blood sugar, Biopsy & cytology processing and
          reporting are carried out. Microbial staining and special staining are
          also done if required. Immunohistochemistry is done for academic and
          research activities. Clinical examination of various pathologies
          particularly oral premalignant and malignant lesions – counseling &
          referral to appropriate department for further management.
        </p>
        <div className="pl-8">
          <p className="list-item">
            Hematology: Blood investigations (complete hemogram, Bleeding time,
            clotting time)
          </p>
          <p className="list-item">
            Histopathology: Biopsy, cytology, special stains,
            immunohistochemistry
          </p>
          <p className="list-item">Microbiology: Microbial stains</p>
          <p className="list-item">
            Clinical: Thorough examination of the patient and counseling and
            referral to appropriate department for further evaluation.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-8 mt-8  p-2">
        <h1 className="text-center text-3xl font-bold w-full text-[var(--primary-color)]">
          Department Gallery
        </h1>
        <div className=" flex flex-col items-center justify-center p-2 w-full gap-y-14 ">
          <div className=" flex flex-col justify-center items-center w-full shadow rounded py-3 max-sm:p-2">
            <p className=" text-2xl  font-bold text-center mb-2">
              Training programmes and Lectures
            </p>
            <div className=" flex gap-x-8 py-1 max-md:flex-col max-md:gap-y-5">
              <Image
                src={
                  "/departments/department-of-oral-pathology/Training-lec1.jpg"
                }
                alt=""
                width={450}
                height={300}
                className=" rounded-sm"
              />
              <Image
                src={
                  "/departments/department-of-oral-pathology/Training-lec2.jpg"
                }
                alt=""
                width={450}
                height={300}
                className=" rounded-sm"
              />
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center w-full overflow-hidden shadow rounded max-sm:p-4">
            <p className=" text-2xl  font-bold text-center mb-2">
              Training and Screening Camps
            </p>
            <div className=" flex max-md:flex-col max-md:gap-y-5 gap-x-5 py-1">
              <Image
                src={
                  "/departments/department-of-oral-pathology/Training-screening1.png"
                }
                alt=""
                width={450}
                height={300}
                className=" rounded-sm"
              />
              <Image
                src={
                  "/departments/department-of-oral-pathology/Training-screening2.png"
                }
                alt=""
                width={450}
                height={300}
                className=" rounded-sm"
              />
            </div>
            <Image
              src={
                "/departments/department-of-oral-pathology/Training-screening3.png"
              }
              alt=""
              width={900}
              height={300}
              className=" rounded-sm my-3"
            />
          </div>
          <div className=" flex flex-col justify-center items-center w-full overflow-hidden shadow rounded max-sm:p-4">
            <p className=" text-2xl  font-bold text-center mb-2">
              Competitions for Undergraduate Students
            </p>
            <div className=" flex max-md:flex-col max-md:gap-y-5 gap-x-5 py-1">
              <Image
                src={
                  "/departments/department-of-oral-pathology/competition-model-making.png"
                }
                alt=""
                width={450}
                height={300}
                className=" rounded-sm"
              />
              <Image
                src={
                  "/departments/department-of-oral-pathology/competition-rangoli.png"
                }
                alt=""
                width={450}
                height={300}
                className=" rounded-sm"
              />
            </div>
            <div className=" flex max-md:flex-col max-md:gap-y-5 gap-x-5 py-1">
              <Image
                src={
                  "/departments/department-of-oral-pathology/competition-soap-carving.png"
                }
                alt=""
                width={450}
                height={300}
                className=" rounded-sm"
              />
              <Image
                src={
                  "/departments/department-of-oral-pathology/competition-face-painting.png"
                }
                alt=""
                width={450}
                height={300}
                className=" rounded-sm"
              />
            </div>

            <Image
              src={
                "/departments/department-of-oral-pathology/competition-face-painting2.png"
              }
              alt=""
              width={450}
              height={300}
              className=" rounded-sm my-3"
            />
          </div>
          <div className=" flex flex-col justify-center items-center w-full overflow-hidden shadow rounded max-sm:p-4">
            <p className=" text-2xl  font-bold text-center mb-2">
              Achievements
            </p>
            <div className=" flex max-md:flex-col max-md:gap-y-5 gap-x-5 py-1">
              <div className="flex flex-col items-center">
                <Image
                  src={
                    "/departments/department-of-oral-pathology/MUHS-gold-medal.jpg"
                  }
                  alt=""
                  width={450}
                  height={300}
                  className=" rounded-sm"
                />
                <p className=" font-semibold text-center">
                  MUHS University Gold Medallist 2023
                </p>
              </div>
              <div className=" w-1/2 max-md:w-full flex flex-col items-center">
                <Image
                  src={
                    "/departments/department-of-oral-pathology/First-prize-nlqc.jpg"
                  }
                  alt=""
                  width={450}
                  height={300}
                  className=" rounded-sm"
                />
                <p className=" w-96 max-sm:w-64 font-semibold text-center">
                  First Prize Winner in National Level Quiz Competition in
                  Microscope Rapid Review Program, SRIHER 2023
                </p>
              </div>
            </div>
            <div className=" flex flex-col max-md:gap-y-5 gap-x-5 py-1 mt-3">
              <div className=" flex gap-x-6 max-md:flex-col items-center">
                <Image
                  src={
                    "/departments/department-of-oral-pathology/Paper-presentation.jpg"
                  }
                  alt=""
                  width={450}
                  height={300}
                  className=" rounded-sm h-[270px] object-cover  "
                />
                <Image
                  src={
                    "/departments/department-of-oral-pathology/Paper-presentation2.jpg"
                  }
                  alt=""
                  width={450}
                  height={300}
                  className=" rounded-sm"
                />
              </div>
              <p className=" font-semibold text-center text-lg mt-2 ">
                Best Paper Presentations in 30th IAOMP Conference, Belagavi 2023
              </p>
            </div>

            <Image
              src={
                "/departments/department-of-oral-pathology/Winner-vrmehta.jpg"
              }
              alt=""
              width={450}
              height={300}
              className=" rounded-sm mb-3 mt-4 "
            />
            <p className=" font-semibold text-center pb-4">
              Winner of VR Mehta Award at 30th IAOMP Conference, Belagavi 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
