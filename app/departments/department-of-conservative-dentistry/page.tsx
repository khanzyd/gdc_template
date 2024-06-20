import Faculty from "@/components/department/Faculty";
import React from "react";

export default function Page() {
    return (
        <div className="lg:max-w-[70%] m-auto">
            <div className="min-h-screen flex flex-col p-3">
                <div className=" border-2 border-[#b8483ba5] mb-4 py-12 text-center rounded-sm">
                    <h1 className=" capitalize text-2xl font-bold text-[var(--primary-color)]">
                        {"DEPARTMENT OF CONSERVATIVE DENTISTRY AND ENDODONTICS"}
                    </h1>
                </div>
                <div
                    className=" w-full flex flex-col justify-center items-center py-3">
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--primary-color)] text-center mb-4">Introduction</h1>
                        <p className="text-justify">
                            The department of Conservative Dentistry was established in the year 1982 and aims at preserving the natural tooth either by simple filling or by root canal therapy, which otherwise would have been extracted, thus making them functional for a lifetime. It is one of the most frequently visited departments by the patients coming to Govt. Dental College and Hospital, Chhatrapati Sambhajinagar.
                        </p>

                        <p className="text-justify mt-4">
                            The department is well equipped, organized, upheld and nurtured under the insightful guidance of the Head of the Department, Dr.Padnya V. Bansode. It has been provided with undergraduate students teaching classrooms, post-graduate students seminar room, preclinical lab, undergraduate clinical lab, updated departmental library, post-graduate clinical lab, dental operating microscope section, soft and hard tissue laser section, sterilization room, store room, teaching staff room, non-teaching staff room, O.P.D with patient waiting room and special operatory room. Ward 207 is allocated as the U.G. section and 227 as the P.G. section.
                        </p>
                        <p className="text-justify mt-4">
                            The department improves the smile and appearance of the patients that help to enhance the confidence and self-esteem of the patients who are conscious about their oral health and appearance. Treatment modalities in Conservative Dentistry include restorative procedures for carious teeth and other defects of the teeth like fracture, attrition, erosion, abrasion etc. Endodontic treatment is rendered in teeth having pulpal diseases. Every attempt is made to save all the badly mutilated teeth, irrespective of the age of the patient bringing them back to normal function and aesthetics. The branch also deals with aesthetic dentistry wherein various aesthetic treatments like Smile design, diastema closure, Veneers, Tooth whitening, etc. are rendered to the patients.
                        </p>
                        <p className="text-justify mt-4">
                            The department is equipped with advanced hard and soft tissue laser equipment. This technology is used for different operative procedures like cavity preparations, bleaching, root canal treatments and surgeries, etc. Special concern is given to special treatment modalities like micro- endodontics, regenerative endodontics, fracture segment re-attachment procedures and treatment of traumatic injuries to teeth. Such advanced procedures best serve the needs of the patients & enhance the knowledge & skills of under & post graduate students.
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
                            profilePicSrc="/departments/conservativeDentistry/drPradnyaVilasBansode/profilePic.png"
                            cvSrc="/departments/conservativeDentistry/drPradnyaVilasBansode/cv.pdf"
                            facultyName="Dr. Pradnya Vilas Bansode"
                            facultyDesignation="Professor (MPSC) and Head, Dept. of Conservative Dentistry" />
                        <Faculty
                            profilePicSrc="/departments/conservativeDentistry/drSwethaKannamparambil/profilePic.png"
                            cvSrc="/departments/conservativeDentistry/drSwethaKannamparambil/cv.pdf"
                            facultyName="Dr. Swetha Kannamparambil"
                            facultyDesignation="Assistant Professor, Dept. of Conservative Dentistry" />
                        <Faculty
                            profilePicSrc="/departments/conservativeDentistry/drAnjaliEknathMule/profilePic.png"
                            cvSrc="/departments/conservativeDentistry/drAnjaliEknathMule/cv.pdf"
                            facultyName="Dr. Anjali Eknath Mule"
                            facultyDesignation="Assistant Professor, Dept. of Conservative
Dentistry" />
                        <Faculty
                            profilePicSrc="/departments/conservativeDentistry/drGeetamUttamDuduskar/profilePic.png"
                            cvSrc="/departments/conservativeDentistry/drGeetamUttamDuduskar/cv.pdf"
                            facultyName="Dr. Geetam Uttam Duduskar"
                            facultyDesignation="Assistant Professor, Dept. of
Conservative Dentistry" />
                        <Faculty
                            profilePicSrc="/departments/conservativeDentistry/drMadhuriMilindAmbhure/profilePic.png"
                            cvSrc="/departments/conservativeDentistry/drMadhuriMilindAmbhure/cv.pdf"
                            facultyName="Dr. Madhuri Milind Ambhure"
                            facultyDesignation="Associate Professor (MPSC), Dept. of Conservative Dentistry" />
                        <Faculty
                            profilePicSrc="/departments/conservativeDentistry/drSeemaDhananjayPathak/profilePic.png"
                            cvSrc="/departments/conservativeDentistry/drSeemaDhananjayPathak/cv.pdf"
                            facultyName="Dr. Seema Dhananjay Pathak"
                            facultyDesignation="Associate Professor, Dept. of Conservative Dentistry, Acting Head of the Department (Additional charge), Pediatric Dentistry" />
                        <Faculty
                            profilePicSrc="/departments/conservativeDentistry/drSuyogManoharJadhav/profilePic.png"
                            cvSrc="/departments/conservativeDentistry/drSuyogManoharJadhav/cv.pdf"
                            facultyName="Dr. Suyog Manohar Jadhav"
                            facultyDesignation="Assistant Professor, Dept. of Conservative Dentistry" />
                    </div>
                </div>
                <div className="p-4 my-8 text-justify shadow-md rounded-sm border-t-2 border-slate-100">
                    <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center">
                        Vision
                    </h1>
                    <p className="italic mt-4">
                        The Department of Conservative Dentistry and Endodontics encompasses the specialities of operative dentistry, endodontics, and dental material sciences.
                    </p>
                    <p className="italic mt-4">
                        ✓ To give an output of excellent future clinicians and academicians with equally motivated treatment impartation for patients.
                    </p>
                    <p className="italic mt-4">
                        ✓ To be on the progressing front with respect to research in the subject, student training and quality of treatment rendered to the patient.
                    </p>
                    <p className="italic mt-4">
                        ✓ To be an outstanding dental and research institute of international repute, producing dental professionals with skill, knowledge, and values.
                    </p>
                    <p className="italic mt-4">
                        ✓ To be the leading centre for excellence in preserving and restoring oral health through advanced conservative and endodontic treatments.
                    </p>
                    <p className="italic mt-4">
                        ✓ To extend our influence and expertise beyond boundaries through collaborations, partnerships, and knowledge-sharing initiatives, making a significant contribution to the global advancement of conservative and endodontic practices.
                    </p>
                </div>
                <div className="p-4 my-8 text-justify shadow-md rounded-sm border-t-2 border-slate-100">
                    <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center">
                        Mission
                    </h1>
                    <p className="italic mt-4">
                        ✓ To support the vision, mission, core values and goals of the institution through teaching, service, patient care and research.
                    </p>
                    <p className="italic mt-4">
                        ✓ To educate undergraduate, post-graduate and fellowship students, with the best available evidence, to achieve and maintain optimal patient oral health, comfort, function and aesthetics through diagnosis, prevention and tooth preserving and regenerative management of caries, non-carious diseases, and other disorders of the teeth.
                    </p>
                    <p className="italic mt-4">
                        ✓ To provide students with state-of-the-art equipment and technology for enhanced, superior, and inspired patient management and treatment.
                    </p>
                    <p className="italic mt-4">
                        ✓ To broaden public awareness of the importance of good oral hygiene practices, emphasising on the benefits of conservative practices that aid in the preservation of tooth structures in the arch, while attracting the patients with high-valued services and satisfying healthcare experiences.
                    </p>
                    <p className="italic mt-4">
                        ✓ To provide comprehensive and evidence-based conservative and endodontic treatments to patients, ensuring optimal oral health outcomes and patient satisfaction.
                    </p>
                    <p className="italic mt-4">
                        ✓ To educate and train students in the latest techniques, technologies, and best practices in conservative dentistry and endodontics, fostering professional development and proficiency.
                    </p>
                    <p className="italic mt-4">
                        ✓ Emphasize minimally invasive techniques and the use of biocompatible materials to ensure optimal function and aesthetic outcomes while prioritizing patient comfort and satisfaction.
                    </p>
                    <p className="italic mt-4">
                        ✓ To offer structured educational programs, including lectures, hands-on workshops, and clinical rotations, to equip students with the knowledge, skills, and proficiency needed to excel in the subject.
                    </p>
                </div>
                <div className="pb-8 text-justify">
                    <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center pb-4">Scope and Importance of the Subject</h1>
                    <p>
                        Conservative Dentistry and Endodontics is a branch of dentistry that deals with treatment of carious, malformed or fractured teeth as well as discoloured or aesthetic correction and endodontics deals with treatment of pulpal and periapical diseases and Dental Pain Management. It is popularly known as the ‘Bread and Butter of Dentistry.’
                    </p>
                    <p className="mt-4">
                        A variety of procedures carried out in this department which include :
                    </p>
                    <div className="pl-8 pb-8">
                        <p className="list-item">
                            Endodontic therapy (popularly known as RCT or Root Canal Therapy)
                        </p>
                        <p className="list-item">
                            Treatment of dental trauma
                        </p>
                        <p className="list-item">
                            Endodontic surgeries
                        </p>
                        <p className="list-item">
                            Treatment of carious, cracked, fractured, discolored teeth
                        </p>
                        <p className="list-item">
                            Aesthetic & cosmetic procedures like bleaching, composite resin restorations
                        </p>
                        <p className="list-item">
                            Smile designing
                        </p>
                        <p className="list-item">
                            Tooth jewellery (diamond) etc.
                        </p>
                    </div>
                    <p className="mt-4">
                        The scope of this subject is augmented by the wide array of varied diseases presented and consequently the increasing need for professionals to address and efficaciously treat patients with the same. It trains the individual and makes them well-versed in the course and also how the patient is treated with dental surgery. It enables the students to get knowledge about relevant clinic literature, and also develop a scientific approach. helps the individual to enhance their skills and The subject of Conservative Dentistry and Endodontics is not limited to only BDS and MDS courses. Individuals can also pursue a Fellowship in Micro-dentistry after receiving their BDS degree. Those who have completed their MDS course can opt for further building on their knowledge through PhD by engaging with more specific and complex topics. These courses are affiliated and governed by the Government of Maharashtra and MUHS.
                    </p>
                    <p className="mt-4">
                        Aptitude in this subject provides many job opportunities not only in the Private sector but also in Government sectors. Furthermore, it also assists the individual in the process of setting their own dental clinics.
                    </p>
                    <p className="mt-4">
                        The purview of the subject not only exists in India but also abroad for the experts in this field with work experience, good skills, and aptitude.
                    </p>
                    <p className="mt-4">
                        Therefore, the scope of Conservative Dentistry and Endodontics course is ever-growing and continual as, every day, many dental issues transpire in the general population with the need for professionals to treat them efficiently and effectively.
                    </p>
                </div>
                <div className="flex flex-wrap gap-8 mt-8">
                    <h1 className="text-center text-2xl font-bold w-full text-[var(--primary-color)]">Gallery</h1>
                    <div className="flex-auto basis-1/3 flex flex-col justify-center items-center">
                        <img
                            src={"/departments/conservativeDentistry/departmentBoard.png"}
                            alt="Department Image"
                            className="rounded max-w-[300px] max-h-[200px] lg:max-w-[500px] lg:max-h-[300px]" />
                        <p className="mt-4 text-lg font-bold">Department Board</p>
                    </div>
                    <div className="flex-auto basis-1/3 flex flex-col justify-center items-center">
                        <img
                            src={"/departments/conservativeDentistry/centralClinic.png"}
                            alt="Department Image"
                            className="rounded max-w-[300px] max-h-[200px] lg:max-w-[500px] lg:max-h-[300px]" />
                        <p className="mt-4 text-lg font-bold">Central Clinic</p>
                    </div>
                    <div className="flex-auto basis-1/3 flex flex-col justify-center items-center">
                        <img
                            src={"/departments/conservativeDentistry/clinicBoard.png"}
                            alt="Department Image"
                            className="rounded max-w-[300px] max-h-[200px] lg:max-w-[500px] lg:max-h-[300px]" />
                        <p className="mt-4 text-lg font-bold">Clinic Board</p>
                    </div>
                    <div className="flex-auto basis-1/3 flex flex-col justify-center items-center">
                        <img
                            src={"/departments/conservativeDentistry/clinic.png"}
                            alt="Department Image"
                            className="rounded max-w-[300px] max-h-[200px] lg:max-w-[500px] lg:max-h-[300px]" />
                        <p className="mt-4 text-lg font-bold">Clinic</p>
                    </div>
                    <div className="w-full text-center">
                        <a className="bg-[var(--primary-color)] text-white font-bold p-2 rounded-tr-md rounded-bl-md"
                            href="/departments/department-of-conservative-dentistry/gallery">
                            View More
                        </a>
                    </div>
                </div>
            </div >
        </div>
    );
}
