import Faculty from "@/components/department/Faculty";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className=" lg:max-w-[70%] m-auto min-h-screen flex flex-col p-3 gap-8">
      <div className=" border-2 border-[#b8483ba5] py-12 text-center rounded-sm  ">
        <h1 className=" capitalize text-4xl font-bold text-[#82261B]">
          {"Department of Prosthodontics"}
        </h1>
      </div>
      <h1 className=" text-center text-6xl font-bold mt-10 tracking-wide">
        Site Under Maintainance
      </h1>
      <div>
        <h1 className="text-2xl font-bold text-[var(--primary-color)] text-center mb-4">
          Introduction
        </h1>
        <p className="text-justify pb-8">
          This is the 1st branch of dentistry. This is a vast department with
          four branches in it viz.., Removable prosthodontics , Fixed
          prosthodontics ,Maxillofacial prosthodontics and Implants. Daily 80-85
          patients are treated for complete dentures, removable and fixed
          partial dentures. Around 35-40 Implants are placed every month and
          10-15 maxillofacial prosthesis are delivered.
        </p>
        <p className="text-justify pb-8">
          We have post graduation in the department since 1995 and around 60
          postgraduate students are passed out. We have fellowship in oral
          implantology and the department is MUHS Ph.D approved center. We have
          state-of-art facilities like VRF system in pre-clinical laboratory,
          well equipped with all the latest instruments and machines in ceramic
          laboratory. We also have CAD-CAM machine for the welfare of
          postgraduate students and patients. The department is actively
          involved in the research activities, copyrights and have frequent
          research publications in various international and national scientific
          journals.
        </p>
      </div>
      <div id="faculty">
        <div className=" flex flex-col justify-center items-center pt-3">
          <h1 className=" text-3xl font-semibold text-[#82261B]">
            Our Faculty
          </h1>
        </div>
        <div className=" grid place-items-center sm:grid-cols-4 grid-cols-1 p-6 gap-4  ">
          <Faculty
            profilePicSrc="/departments/department-of-prosthodontics/Kishor-Mahale/Photo.jpg"
            cvSrc="/departments/department-of-prosthodontics/Kishor-Mahale/CV Dr Kishor Mahale.pdf"
            facultyName="Dr. Kishor Madhukar Mahale"
            facultyDesignation="Professor & Head of Department, Dept. of Periodontology"
          />
          {/* <Faculty
              profilePicSrc="/departments/department-of-prosthodontics/Ashok-Bhansali/Photo.png"
              cvSrc="/departments/department-of-prosthodontics/Ashok-Bhansali/Dr Bhansali CV WEBSITE_122707.pdf"
              facultyName="Dr. Ashok Bhansali"
              facultyDesignation="Associate profesor, Dept. of Periodontology"
            />
            <Faculty
              profilePicSrc="/departments/department-of-prosthodontics/Chandulal-Dhalkari/Photo.jpg"
              cvSrc="/departments/department-of-prosthodontics/Chandulal-Dhalkari/CV Dr. CD Dhalkari.pdf"
              facultyName="Dr. Chandulal Digambarrao Dhalkari"
              facultyDesignation="Professor and Head, Dept. of Periodontology"
            />
            <Faculty
              profilePicSrc="/departments/department-of-prosthodontics/Diksha-Dhage/Photo.png"
              cvSrc="/departments/department-of-prosthodontics/Diksha-Dhage/dr. diksha dhage CV.pdf"
              facultyName="Dr. Diksha Tukaram Dhage"
              facultyDesignation="Associate profesor, Dept. of Periodontology"
            />
            <Faculty
              profilePicSrc="/departments/department-of-prosthodontics/Nikhil-Chawla/Photo.jpg"
              cvSrc="/departments/department-of-prosthodontics/Nikhil-Chawla/NIKHIL CV COLLEGE WEBSITE.pdf"
              facultyName="Dr. Nikhil Rajesh Chawla"
              facultyDesignation="Dental Surgeon, Dept. of Periodontology"
            />
            <Faculty
              profilePicSrc="/departments/department-of-prosthodontics/Priyanka-Pawar/Photo.png"
              cvSrc="/departments/department-of-prosthodontics/Priyanka-Pawar/priyanka CV Website.pdf"
              facultyName="Dr. PRIYANKA PAWAR"
              facultyDesignation="Dental Surgeon, Dept. of Periodontology, Dept. of Periodontology"
            />
            <Faculty
              profilePicSrc="/departments/department-of-prosthodontics/Sanjivani-Mamilwad/Photo.jpg"
              cvSrc="/departments/department-of-prosthodontics/Sanjivani-Mamilwad/dr. sanjivani mamilwad CV.pdf"
              facultyName="Dr. Sanjivani Mamilwad"
              facultyDesignation="Assistant Profesor, Department of Periodontology"
            />
            <Faculty
              profilePicSrc="/departments/department-of-prosthodontics/Sharda-Shelke/Photo.jpg"
              cvSrc="/departments/department-of-prosthodontics/Sharda-Shelke/Dr. sharda shelke CV.pdf"
              facultyName="Dr. Sharda P Shelke"
              facultyDesignation="Assistant Profesor, Department of Periodontology"
            /> */}
          <Faculty
            profilePicSrc="/departments/department-of-prosthodontics/Smita-Khalikar/Photo.jpg"
            cvSrc="/departments/department-of-prosthodontics/Smita-Khalikar/DR. SMITA KHALIKAR CV MAY 2024 GOVERNMENT DENTAL COLLEGE.pdf"
            facultyName="Dr. SMITA ARUN KHALIKAR"
            facultyDesignation="Associate Profesor, Department of Periodontology"
          />
          <Faculty
            profilePicSrc="/departments/department-of-prosthodontics/Vilas-Rajguru/Photo.jpg"
            cvSrc="/departments/department-of-prosthodontics/Vilas-Rajguru/CV dr RAJGURU for college website.pdf"
            facultyName="Dr. Vilas L. Rajguru"
            facultyDesignation="Associate Profesor, Department of Periodontology"
          />
          <Faculty
            profilePicSrc=""
            cvSrc="/departments/department-of-prosthodontics/Sonali-Mahajan/CV dr sonali for college website.pdf"
            facultyName="Dr. Sonali Vishal Mahajan"
            facultyDesignation="Associate Profesor, Department of Periodontology"
          />
          <Faculty
            profilePicSrc="/departments/department-of-prosthodontics/Ulhas-Tandale/Photo.jpg"
            cvSrc="/departments/department-of-prosthodontics/Ulhas-Tandale/CV dr ULHAS for college website.pdf"
            facultyName="Dr. Ulhas Eaknathrao Tandale"
            facultyDesignation="Associate Profesor, Department of Periodontology"
          />
        </div>
      </div>
      <hr />
      {/* <div id="vision">
        <div className=" p-3 text-lg text-justify shadow-md rounded-sm border-t-2 border-slate-100 ">
          <h1 className=" text-4xl font-semibold text-[#82261B] text-center py-3">
            Vision
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            expedita sit, aliquid fuga, quia dignissimos neque dolore corporis
            officia eos quidem. Sunt nostrum doloremque eius suscipit obcaecati
            consequuntur perferendis eum veniam accusamus! Harum consequatur
            atque veritatis soluta accusantium porro, animi ad nisi
            reprehenderit laboriosam? Rerum, cumque ullam animi quod consectetur
            consequuntur repudiandae, aut non illum nostrum officiis quas, vitae
            nesciunt magnam rem asperiores iste inventore placeat obcaecati
            sequi vero illo quae! Facere unde necessitatibus ex dolore odit non
            corporis beatae. Debitis ea similique velit amet, porro at fugit in
            esse magni facilis iure doloribus perspiciatis quos! Commodi
            corrupti fugiat eius eum voluptatem velit incidunt veritatis
            similique hic? Reprehenderit, placeat. Totam ullam et expedita dolor
            non provident debitis saepe modi labore, odit velit optio quisquam
            maxime illum quasi quo itaque dolorum! Rem ea vero amet repudiandae
            dolore ipsum quod maxime inventore accusamus nulla? Adipisci eaque
            quasi rerum fugit non! Nam earum accusantium quasi eligendi odit a
            esse similique delectus assumenda quae temporibus ut sequi maxime,
            reprehenderit enim beatae labore ratione commodi, atque repellat
            blanditiis adipisci fuga! Quas, hic! Unde itaque sunt nulla deleniti
            autem vel iste quia iusto libero in mollitia fugit, earum nobis
            cumque iure necessitatibus, amet cupiditate debitis natus?
          </p>
        </div>
      </div>
      <div id="mission">
        <div className=" p-3 text-lg text-justify shadow-md rounded-sm border-t-2 border-slate-100 ">
          <h1 className=" text-4xl font-semibold text-[#82261B] text-center py-3">
            Mission
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            expedita sit, aliquid fuga, quia dignissimos neque dolore corporis
            officia eos quidem. Sunt nostrum doloremque eius suscipit obcaecati
            consequuntur perferendis eum veniam accusamus! Harum consequatur
            atque veritatis soluta accusantium porro, animi ad nisi
            reprehenderit laboriosam? Rerum, cumque ullam animi quod consectetur
            consequuntur repudiandae, aut non illum nostrum officiis quas, vitae
            nesciunt magnam rem asperiores iste inventore placeat obcaecati
            sequi vero illo quae! Facere unde necessitatibus ex dolore odit non
            corporis beatae. Debitis ea similique velit amet, porro at fugit in
            esse magni facilis iure doloribus perspiciatis quos! Commodi
            corrupti fugiat eius eum voluptatem velit incidunt veritatis
            similique hic? Reprehenderit, placeat. Totam ullam et expedita dolor
            non provident debitis saepe modi labore, odit velit optio quisquam
            maxime illum quasi quo itaque dolorum! Rem ea vero amet repudiandae
            dolore ipsum quod maxime inventore accusamus nulla? Adipisci eaque
            quasi rerum fugit non! Nam earum accusantium quasi eligendi odit a
            esse similique delectus assumenda quae temporibus ut sequi maxime,
            reprehenderit enim beatae labore ratione commodi, atque repellat
            blanditiis adipisci fuga! Quas, hic! Unde itaque sunt nulla deleniti
            autem vel iste quia iusto libero in mollitia fugit, earum nobis
            cumque iure necessitatibus, amet cupiditate debitis natus?
          </p>
        </div>
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
              className=""
              height={25}
              width={25}
              alt=""
            />
            <div className="w-full ">
              <hr className="bg-black border-none h-[1.5px]" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center py-10 justify-center gap-y-5">
            <div className="w-70 h-44 md:w-[30rem] md:h-64  ">
              <iframe
                src="https://youtube.com/embed/H_ThvSdZ_HE"
                className="mx-auto w-full h-full rounded-md"
              ></iframe>
            </div>
            <div className="w-70 h-44 md:w-[30rem] md:h-64 ">
              <iframe
                src="https://youtube.com/embed/TI5gppbFDK8"
                className="mx-auto w-full h-full rounded-md"
              ></iframe>
            </div>
            <div className="w-70 h-44 md:w-[30rem] md:h-64 ">
              <iframe
                src="https://youtube.com/embed/zuB30480L9w"
                className="mx-auto w-full h-full rounded-md"
              ></iframe>
            </div>
            <div className="w-70 h-44 md:w-[30rem] md:h-64 ">
              <iframe
                src="https://youtube.com/embed/mQvGtwXf1UY"
                className="mx-auto w-full h-full rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
