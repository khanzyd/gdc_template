import Faculty from "@/components/department/Faculty";
import React from "react";

export default function Page() {
  return (
    <div className="lg:max-w-[70%] m-auto">
      <div className="min-h-screen flex flex-col p-3">
        <div className=" border-2 border-[#b8483ba5] mb-4 py-12 text-center rounded-sm">
          <h1 className=" capitalize text-2xl font-bold text-[var(--primary-color)]">
            {"DEPARTMENT OF PEDODONTICS"}
          </h1>
        </div>
        <div className=" w-full flex flex-col justify-center items-center py-3">
          <div>
            <h1 className="text-2xl font-bold text-[var(--primary-color)] text-center mb-4">
              Introduction
            </h1>
            <p className="text-justify">
              The Department of Pediatric and Preventive Dentistry, Chhtrapaji
              Sambhajinagar was established in 1985. The department aims at the
              diagnosis & treatment of dental caries and its sequel, teeth
              malformations and discolorations, thereby restoring the teeth to
              full function in an aesthetically pleasing manner. Pediatric
              Dentistry is the branch of Dentistry which is concerned with
              comprehensive preventive and therapeutic oral health care of
              children from birth through adolescence. An upcoming field of
              dentistry with immense potential, paediatric dentistry aims to
              eliminate fear at an early age with the inculcation of positive
              attitudes. The Department of Pediatric and Preventive Dentistry,
              Chhtrapaji Sambhajinagar caters to maintain a perfect blend of
              both the clinical and academic arenas of the field. Scope ranges
              from prenatal counseling of parents to all the dental treatments
              upto 13 years of age. Dental Care of the medically and mentally
              compromised patients is also taken care of. Undergraduate students
              are given discussions on a wide range of topics with special
              attention placed on interactive case history discussions as well
              as first hand clinical experience under specialist supervision.
              They are also encouraged to participate in seminars and posters in
              order to get introduced to the changing trends and to evoke a
              fresh interest in the subject. As interns they are trained to deal
              and expertly manage patients of various age groups with special
              emphasis on their clinical application of behavior management
              techniques. The Department is situated in left wing of the college
              on the second floor. The department has one large clinical section
              where both the basic treatment procedures as well as advanced
              treatments are made available. There is a presence of spacious
              waiting area. We have a separate unit to treat children with
              Special Health Care to render proper isolation and comfort to the
              children. The department also has a well isolated sterilization
              area, a preclinical lab and play room.
            </p>
          </div>

          <div className=" text-justify my-8">
            <h1 className="pb-1 text-lg font-bold text-[var(--primary-color)]">
              Goals of the Department
            </h1>
            <p className="pb-8">
              The goal of our department is to provide basic and advance
              treatment modalities for children suffering with dental issues.
              The college aims to provide high quality education to the budding
              dentist by means of improved understanding of the diagnosis and
              treatment planning of various types of oral health issues in
              pediatric patients along with imbibing the students with behavior
              management skills.
            </p>
          </div>
        </div>

        {/* <div id="faculty">
          <div className=" flex flex-col justify-center items-center mt-8">
            <h1 className=" text-2xl font-semibold text-[var(--primary-color)]">
              Our Faculty
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 justify-center p-6">
            <Faculty
              profilePicSrc="/departments/department-of-periodontics/Chandulal-Dhalkari/Photo.jpg"
              cvSrc="/departments/department-of-periodontics/Chandulal-Dhalkari/CV Dr. CD Dhalkari.pdf"
              facultyName="Dr. Chandulal Digambarrao Dhalkari"
              facultyDesignation="Professor and Head, Dept. of Periodontology"
            />
            <Faculty
              profilePicSrc="/departments/department-of-periodontics/Ashok-Bhansali/Photo.png"
              cvSrc="/departments/department-of-periodontics/Ashok-Bhansali/Dr Bhansali CV WEBSITE_122707.pdf"
              facultyName="Dr. Ashok Bhansali"
              facultyDesignation="Associate profesor, Dept. of Periodontology"
            />
          </div>
        </div> */}

        <div className="p-4 my-4 py-8 text-justify shadow rounded-sm border-t-2 border-slate-100">
          <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center">
            Mission & Vision
          </h1>
          <p className="mt-4 list-item list-inside">
            To foster the development of dentist who will brining profound
            integrity and character to every endeavor, while demonstrating the
            highest quality clinical knowledge and expertise.
          </p>
          <p className="mt-2 list-item list-inside">
            The Students should achieve academic excellence, Provide the best
            oral health care, and engage in research scholarship, and creative
            endeavors to improve the health of the highly diverse populations in
            India.
          </p>
        </div>

        <div className="my-4 p-4 w-full shadow rounded">
          <h1 className="pb-4 text-lg font-bold text-[var(--primary-color)]">
            PATIENTS SERVICE
          </h1>
          <p className=" text-justify ">
            The department is well equipped with all the latest infrastructure
            which helps in the course of diagnosis and treatment planning of a
            particular patient. The department is kids friendly and kept in par
            to the specifications given by the dental council of India. We also
            focuses on patients who are dependent on care takers for their day
            to day living and those with special health care needs or
            handicapped children who are identified from the community, brought
            to the department for necessary oral health care and medical
            treatment procedures.
          </p>
        </div>

        <div className="p-4 my-8 text-justify shadow">
          <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center">
            ACTIVITIES
          </h1>
          <div className="p-4">
            <p className="mt-2 list-item ">
              <span className="font-semibold">THEORY CLASSES : </span> The
              undergraduate students begin with lectures in the III year of BDS
              .Theory (65 lecture hours) - III yr (20 hrs) and IV yr (45hrs).
            </p>
            <p className="mt-2 list-item ">
              <span className="font-semibold">CLINICAL TRAINING : </span>
              Detailed case history and discussion, Oral prophylaxis,
              Restorative procedures, Extractions, Topical fluoride applications
              procedures are taught in their clinical postings.
            </p>
            <p className="mt-2 list-item ">
              <span className="font-semibold">PRACTICAL (170 hrs) : </span>
              III yr (70 hrs) and IV yr (100hrs).{" "}
              <span className="font-medium opacity-85">(Total- 235 hrs.)</span>
            </p>
            <p className="mt-2 list-item ">
              <span className="font-semibold">SEMINAR PRESENTATION : </span>
              The students are required to present two seminars, one minor at
              the end of the III year BDS and a major seminar in the final year
              of BDS.
            </p>
            <p className="mt-2 list-item ">
              <span className="font-semibold">COMMUNITY PROGRAMMES : </span>
              Students are also encouraged to participate in the programmes such
              as treatment camps. People are made aware through these camps
              regarding their dental health.
            </p>
            <p className="mt-2 list-item ">
              <span className="font-semibold">PROJECT WORK : </span>
              Students are required to submit a project in their final year
              which is usually related to the development of a teaching aid or
              the development of an aid for behavior management
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 mt-8">
          <h1 className="text-center text-2xl font-bold w-full text-[var(--primary-color)]">
            Gallery
          </h1>
          <div className="flex-auto basis-1/3 flex flex-col justify-center items-center">
            <img
              src={"/departments/department-of-pedodontics/dept-image1.jpg"}
              alt="Department Image"
              className="rounded max-w-[300px] max-h-[200px] lg:max-w-[500px] lg:max-h-[300px] "
            />
            
          </div>
          <div className="flex-auto basis-1/3 flex flex-col justify-center items-center">
            <img
              src={
                "/departments/department-of-pedodontics/img2.jpg"
              }
              alt="Department Image"
              className="rounded max-w-[300px] max-h-[200px] lg:max-w-[500px] lg:max-h-[300px]"
            />
            
          </div>
          <div className="flex-auto basis-1/3 flex flex-col justify-center items-center">
            <img
              src={
                "/departments/department-of-pedodontics/img4.png"
              }
              alt="Department Image"
              className="rounded max-w-[300px] max-h-[200px] lg:w-[700px] lg:max-h-[500px]"
            />
            
          </div>
          <div className="w-full text-center">
            <a
              className="bg-[var(--primary-color)] text-white font-bold p-2 rounded-tr-md rounded-bl-md"
              href="/departments/department-of-pedodontics/gallery"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
