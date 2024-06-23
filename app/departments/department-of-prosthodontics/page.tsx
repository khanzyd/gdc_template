import Faculty from "@/components/department/Faculty";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="lg:max-w-[70%] m-auto">
      <div className="min-h-screen flex flex-col p-3">
        <div className=" border-2 border-[#b8483ba5] mb-4 py-12 text-center rounded-sm">
          <h1 className=" capitalize text-2xl font-bold text-[var(--primary-color)]">
            {"DEPARTMENT OF PROSTHODONTICS"}
          </h1>
        </div>
        <div className=" w-full flex flex-col justify-center items-center py-3">
          <div>
            <h1 className="text-2xl font-bold text-[var(--primary-color)] text-center mb-4">
              Introduction
            </h1>
            <p className="text-justify">
              Periodontics is a specialty of dentistry which encompasses
              prevention, diagnosis and treatment of diseases of the supporting
              tissues of the teeth. Apart from routine oral hygiene maintenance
              which form the scope of Periodontics are treatment of
              Periodontitis, Depigmentation of oral tissues, Laser surgeries,
              Reattachment procedures, Gingivoplasty, Implant surgeries etc.
            </p>
          </div>

          <div className=" text-justify my-4">
            <h1 className="pb-4 text-lg font-bold text-[var(--primary-color)]">
              UG PROGRAMME
            </h1>
            <p className="pb-8">
              The department’s undergraduate dental curriculum starts in second
              year wherein the students are familiarized with the basics of
              periodontium. After imbibing the correct and strong basics
              regarding the anatomy and histology which remain the backbone of
              entire dentistry, the next goal is accomplished in the third year
              and that is, to develop the student’s knowledge regarding diseases
              of periodontium. It helps to develop treatment plans that address
              existing problems as well as disease prevention and health
              promotion (pathogenesis, intervention and prevention of the
              disease).
              <br />
              <br />
              These teaching lessons for the students are sufficed study models,
              pictorial charts and advanced audio-visual aids. Undergraduate
              students are encouraged to participate in seminars / tutorials
              periodically on various topics
            </p>
            <h1 className="pb-4 text-lg font-bold text-[var(--primary-color)]">
              PG PROGRAMME
            </h1>
            <p>
              The department of Periodontics started enrolling students for
              postgraduate course from the year 1994 and so far 40 students have
              been enrolled including 9 current post postgraduate students. The
              training includes an exhaustive and comprehensive study of
              Periodontics detailed with clinical correlations and insightful
              study of the mechanism or pathogenesis of the disease. The
              students also acquire skills of non-surgical and surgical
              periodontal therapy. During the course of three years, students
              attain experience to the clinical situations and various routine
              and specialized treatment techniques.
              <br />
              <br />
              Interactive seminars and journal clubs are held every week in the
              seminar room equipped with audio-visual aids. The Post Graduate
              students are also encouraged to participate in various continuing
              dental education programs like interactive slide sessions
              conducted in various dental colleges. The Post Graduates and staff
              of the department participate in various state & national
              conferences, conventions and workshops by giving scientific
              presentations.
            </p>
          </div>
        </div>

        <div id="faculty">
          <div className=" flex flex-col justify-center items-center mt-8">
            <h1 className=" text-2xl font-semibold text-[var(--primary-color)]">
              Our Faculty
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 justify-center p-6">
            <Faculty
              profilePicSrc="/departments/department-of-prosthodontics/Kishor-Mahale/Photo.jpg"
              cvSrc="/departments/department-of-prosthodontics/Kishor-Mahale/CV Dr Kishor Mahale.pdf"
              facultyName="Dr. Kishor Madhukar Mahale"
              facultyDesignation="Professor & Head of Department, Dept. of Periodontology"
            />
            <Faculty
              profilePicSrc="/departments/department-of-prosthodontics/Ashok-Bhansali/photo.png"
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
            />
            <Faculty
              profilePicSrc="/departments/department-of-prosthodontics/Smita-Khalikar/Photo.jpg"
              cvSrc="/departments/department-of-prosthodontics/Smita-Khalikar/DR. SMITA KHALIKAR CV MAY 2024 GOVERNMENT DENTAL COLLEGE.pdf"
              facultyName="Dr. SMITA ARUN KHALIKAR"
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
            <Faculty
              profilePicSrc="/departments/department-of-prosthodontics/Vilas-Rajguru/Photo.jpg"
              cvSrc="/departments/department-of-prosthodontics/Vilas-Rajguru/CV dr RAJGURU for college website.pdf"
              facultyName="Dr. Vilas L. Rajguru"
              facultyDesignation="Associate Profesor, Department of Periodontology"
            />
          </div>
        </div>

        <div className="p-4 my-8 text-justify shadow-md rounded-sm border-t-2 border-slate-100">
          <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center">
            Vision & Mission
          </h1>
          <p className="mt-4 list-item">
            Our vision is leadership, locally and regionally in patient care,
            teaching, scientific research and community services in the field of
            periodontology.
          </p>
          <p className="mt-2 list-item">
            Our mission is to seek excellence in education through innovation,
            applied technology and by creating atmosphere for learning and
            personal career development.
          </p>
          <p className="mt-2 list-item">
            Our department is committed to advancing the science of
            periodontology and creating new knowledge.
          </p>
          <p className="mt-2 list-item">
            We seek to serve the community, the state and the profession by
            providing highest standards of periodontal treatment by means of
            advanced implantology and hard and soft tissue laser procedures.
          </p>
          <p className="mt-2 list-item">
            We foster periodontal care to improve oral hygiene and overall
            health.
          </p>
          <p className="mt-2 list-item">
            We aspire to educate high quality individuals not only to serve as
            outstanding clinicians and community leaders, but also academic
            leaders through research by starting PhD in the near future who can
            advance the field of Periodontology.
          </p>
        </div>

        <div className="my-4 w-full">
          <h1 className="pb-4 text-lg font-bold text-[var(--primary-color)]">
            PATIENTS SERVICE
          </h1>
          <ul className="list-disc">
            <li>Scaling and root planning</li>
            <li>Occlusal Therapy –Coronoplasty, Splinting</li>
            <li>
              Hypersensitivity treatment by Iontophoresis, laser, bonding agents
              etc
            </li>
            <li>Local Drug delivery</li>
            <li>Subgingival Curettage</li>
            <li>Gingivectomy</li>
            <li>Operculectomy</li>
            <li>Various types of Flap surgeries</li>
            <li>Osseous Resective surgeries</li>
            <li>
              Regenerative procedures – GTR, Bone Grafts, Root
              Biomodification,Growth Factors
            </li>
            <li>Ozone therapy</li>
            <li>
              {" "}
              Periodontal Plastic surgeries
              <ul className="list-decimal list-inside">
                <li>Frenectomy</li>
                <li>Frenotomy</li>
                <li>Vestibuloplasty</li>
                <li>Lateral pedicle</li>
                <li>Bipedical flap</li>
                <li>Coronally positioned flap</li>
                <li>Free gingival graft</li>
                <li>Connective tissue graft</li>
                <li>Subepithelial connective tissue graft</li>
              </ul>
            </li>
          </ul>

          <div>
            <h3 className="text-base list-item font-bold mt-4 mb-2 text-[var(--primary-color)]">
              Miscellaneous Surgical Procedures:
            </h3>
            <ul className="list-decimal list-inside">
              <li>Abscess drainage</li>
              <li>Gingival depigmentation</li>
              <li>Epulis excisions</li>
              <li>Distal molar surgery</li>
              <li>Tunnel Preparation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-base list-item font-bold mt-4 mb-2 text-[var(--primary-color)]">
              Interdisciplinary Treatment Modalities
            </h3>
            <ul className="list-disc list-inside">
              <li>Endodontic-Periodontic Lesions</li>
              <li>Hemisection & Bicuspidization</li>
              <li>Root Resection</li>
              <li>
                Perio-Prosthetic interrelationship
                <ul className="list-decimal list-inside ml-5">
                  <li>Crown Lengthening</li>
                  <li>Ridge Augmentation</li>
                </ul>
              </li>
              <li>
                <span className="font-bold"> Implant surgeries – </span> Basic
                and advanced Implant surgeries
              </li>
              <li>Laser Surgeries</li>
            </ul>
          </div>
        </div>

        <div className="p-4 my-8 text-justify">
          <h1 className="my-5 text-2xl font-semibold text-[var(--primary-color)] text-center">
            RESEARCH ACTIVITIES
          </h1>
          <table className="table border-zinc-900 border-collapse text-center table-fixed">
            <thead className="text-zinc-900 text-base">
              <tr>
                <th
                  rowSpan={2}
                  className="border border-zinc-900 font-bold text-zinc-900"
                >
                  Name of teacher
                </th>
                <th rowSpan={2} className="border border-zinc-900">
                  Designation
                </th>
                <th colSpan={2} className="border border-zinc-900">
                  Number of research papers
                </th>
              </tr>
              <tr>
                <td className="border border-zinc-900">International</td>
                <td className="border border-zinc-900">National</td>
              </tr>
            </thead>
            <tbody className="text-zinc-900">
              <tr>
                <td className="border border-zinc-900">Dr Maya Indurkar</td>
                <td className="border border-zinc-900">Professor & Dean</td>
                <td className="border border-zinc-900">40</td>
                <td className="border border-zinc-900">18</td>
              </tr>
              <tr>
                <td className="border border-zinc-900">Dr C D Dhalkari</td>
                <td className="border border-zinc-900">Professor & Dean</td>
                <td className="border border-zinc-900">21</td>
                <td className="border border-zinc-900">2</td>
              </tr>
              <tr>
                <td className="border border-zinc-900">Dr Ashok Bhansali</td>
                <td className="border border-zinc-900">Associate professor</td>
                <td className="border border-zinc-900">6</td>
                <td className="border border-zinc-900">5</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap gap-8 mt-8">
          <h1 className="text-center text-2xl font-bold w-full text-[var(--primary-color)]">
            Gallery
          </h1>
          <div className="flex-auto basis-1/3 flex flex-col justify-center items-center">
            <img
              src={
                "/departments/department-of-prosthodontics/Undergraduate Clinic.jpg"
              }
              alt="Department Image"
              className="rounded max-w-[300px] max-h-[200px] lg:max-w-[500px] lg:max-h-[300px]"
            />
            <p className="mt-4 text-lg font-bold">Undergraduate Clinic</p>
          </div>
          <div className="flex-auto basis-1/3 flex flex-col justify-center items-center">
            <img
              src={
                "/departments/department-of-prosthodontics/Post Graduate Clinic.jpg"
              }
              alt="Department Image"
              className="rounded max-w-[300px] max-h-[200px] lg:max-w-[500px] lg:max-h-[300px]"
            />
            <p className="mt-4 text-lg font-bold">Post Graduate Clinic</p>
          </div>
          <div className="flex-auto basis-1/3 flex flex-col justify-center items-center">
            <img
              src={
                "/departments/department-of-prosthodontics/Special Operatory for LASER & Implantology.jpg"
              }
              alt="Department Image"
              className="rounded max-w-[300px] max-h-[200px] lg:max-w-[500px] lg:max-h-[300px]"
            />
            <p className="mt-4 text-lg font-bold">
              Special Operatory for LASER & Implantology
            </p>
          </div>
          <div className="w-full text-center">
            <a
              className="bg-[var(--primary-color)] text-white font-bold p-2 rounded-tr-md rounded-bl-md"
              href="/departments/department-of-prosthodontics/gallery"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
