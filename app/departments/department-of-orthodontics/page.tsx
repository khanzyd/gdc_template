import Faculty from "@/components/department/Faculty";
import React from "react";

export default function Page() {
    return (
        <div className="lg:max-w-[70%] m-auto">
            <div className="min-h-screen flex flex-col p-3">
                <div className=" border-2 border-[#b8483ba5] mb-4 py-12 text-center rounded-sm">
                    <h1 className=" capitalize text-2xl font-bold text-[var(--primary-color)]">
                        {"Department of Orthodontics and Dentofacial Orthopedics"}
                    </h1>
                </div>
                <div
                    className=" w-full flex flex-col justify-center items-center py-3">
                    {/* <img
                        src={"/Dummy-dept-img.jpg"}
                        alt="Department Image"
                        width={1200}
                        height={300}
                        className=" rounded"
                    /> */}
                    <div>
                        <h1 className="text-2xl font-bold text-[var(--primary-color)] text-center mb-4">Introduction</h1>
                        <p className="text-justify pb-8">
                            Welcome to the Department of Orthodontics and Dentofacial Orthopedics, where healthy and beautiful smiles are created. Orthodontics deals with straightening teeth and making them more aesthetic. It has high impact on a way person looks and boosts their self-esteem.
                        </p>
                        <p className="text-justify pb-8">
                            The Department of Orthodontics is rendering undergraduate programme since 1982 and postgraduate programme since 2018. Ever since its inception, the department has grown phenomenally and progressed in terms of student education, infrastructure as well as patient care. A robust OPD ensures ample clinical experience, case-based learning and scope for research. The department offers undergraduate and post graduate coures. Head of the department Dr. Rajan Mahindra is recognised phD guide and soon phD courses to be started under his guidance.
                        </p>
                    </div>
                    <div className=" text-justify">
                        <h1 className="pb-4 text-lg font-bold text-[var(--primary-color)]"> UG PROGRAMME </h1>
                        <p className="pb-8">
                            It imparts sufficient skill and knowledge to treat simple cases using removable appliances and coordinate with specialists for complex cases. Undergraduate students learn to identify and diagnose various malocclusions and plan the treatment of cases pertaining to preventive, interceptive and corrective orthodontics. Highly experienced teaching faculties provide didactic teaching, practical hands-on experience, face to face learning, case-based clinical sessions and impel students to undertake research.
                        </p>
                        <h1 className="pb-4 text-lg font-bold text-[var(--primary-color)]">PG PROGRAMME</h1>
                        <p>
                            MDS in Orthodontics and Dentofacial orthopedics program is in accordance with DCI, DMER and MUHS guidelines. Post graduate students are trained under supervision to implement latest techniques and advancements in orthodontic therapy such as lingual technique, self-ligation, micro-implants, bone screws, accelerated orthodontics etc. They treat a wide variety of cases ranging from simple malocclusions to the most complex orthodontic problems such as orthognathic cases and cleft patients using interdisciplinary and multidisciplinary approach. Post graduation program aims to train students to be dedicated and competent orthodontists.
                        </p>
                    </div>
                </div>
                <div id="faculty">
                    <div className=" flex flex-col justify-center items-center pt-3">
                        <h1 className=" text-2xl font-semibold text-[var(--primary-color)]">
                            Our Faculty
                        </h1>
                    </div>
                    <div className="flex justify-center p-6">
                        <Faculty profilePicSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/profile_pic.png" cvSrc="/departments/department-of-orthodontics/Dr_Govind_Raghunath_Suryawanshi/cv.pdf" facultyName="Dr. Govind Raghunath Suryawanshi" facultyDesignation="ASSOCIATE PROFESSOR (ACADEMIC)" />
                    </div>
                </div>
                <div className="p-4 my-8 text-justify shadow-md rounded-sm border-t-2 border-slate-100">
                    <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center">
                        Vision
                    </h1>
                    <p className="italic">
                        To become centre of excellence at par with global standards, through patient-centred education, state of the art orthodontic technology and advanced research.
                    </p>
                </div>
                <div className="p-4 my-8 text-justify shadow-md rounded-sm border-t-2 border-slate-100">
                    <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center">
                        Mission
                    </h1>
                    <div className="pl-8">
                        <p className="list-item">To provide highest quality of orthodontic treatment and patient care to all sections of the society, led by a team of committed professionals equipped with the finest skills and competency</p>
                        <p className="list-item">To inculcate contemporary orthodontic skills and enable students to achieve academic and clinical excellence</p>
                        <p className="list-item">Nurturing research to provide evidence-based diagnosis and treatment planning</p>
                        <p className="list-item">To emphasize evidence-based learning and encourage molecular level research to advance the speciapty of orthodontics</p>
                    </div>
                </div>
                <div className="pb-8">
                    <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center pb-4">FUTURE ASPECTS</h1>
                    <div className="pl-8 pb-8">
                        <p className="list-item">Preclinical virtual skill development using case based and simulation based learning.</p>
                        <p className="list-item">Three-dimensional virtual skill development in the terms of diagnosis, treatment planning and mechanics using latest orthodontic technology such as CAD CAM, 3D printing, digital scans, stereolithography and various softwares.</p>
                        <p className="list-item">To establish sleep apnea and TMJ rehabilitation super speciality centers</p>
                        <p className="list-item">Preventive and Interceptive treatment</p>
                        <p className="list-item">Removable appliances</p>
                        <p className="list-item">Growth modification procedures using myofunctional and orthopedic appliances</p>
                        <p className="list-item">Fixed appliances including Edgewise, Begg’s appliance, Preadjusted edgewise, ceramic brackets etc</p>
                        <p className="list-item">Latest appliances such as skeletal anchorage system, self-ligating system, lingual orthodontics and aligner therapy</p>
                        <p className="list-item">Surgical orthodontics to correct jaw deformities and facial asymmetries</p>
                        <p className="list-item">Cleft lip and palate care</p>
                        <p className="list-item">TMJ disorder rehabilitation</p>
                        <p className="list-item">Interdisciplinary and multidisciplinary management of complex cases</p>
                        <p className="list-item">Sleep apnea management</p>
                    </div>

                    <h1 className=" text-2xl font-semibold text-[var(--primary-color)] text-center py-4">CORE COMPETENCIES</h1>
                    <div className="pl-8">
                        <p className="list-item">Preventive and Interceptive treatment</p>
                        <p className="list-item">Removable appliances</p>
                        <p className="list-item">Fixed appliances including Edgewise, Begg’s appliance, Preadjusted edgewise, ceramic brackets etc</p>
                        <p className="list-item">Growth modification procedures using myofunctional and orthopedic appliances</p>
                        <p className="list-item">Latest appliances such as skeletal anchorage system, self-ligating system, lingual orthodontics and aligner therapy</p>
                        <p className="list-item">Interdisciplinary and multidisciplinary management of complex cases</p>
                        <p className="list-item">Sleep apnea management</p>
                        <p className="list-item">Surgical orthodontics to correct jaw deformities and facial asymmetries</p>
                        <p className="list-item">Cleft lip and palate care</p>
                        <p className="list-item">TMJ disorder rehabilitation</p>
                    </div>
                </div>
                {/* <div
                    id="videos"
                    className=" shadow-md rounded-md border-t-2 border-slate-100 ">
                    <div className=" py-3 text-center">
                        <h2 className="text-2xl text-center tracking-wider">Videos</h2>
                        <div className="flex items-center w-[10%] mx-auto my-4">
                            <div className="w-full">
                                <hr className="bg-black border-none h-[1.5px]" />
                            </div>
                            <img
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
                        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center py-10 justify-center">
                            <div className=" w-70 h-44 md:w-[30rem] md:h-64  ">
                                <iframe
                                    src="https://youtube.com/embed/H_ThvSdZ_HE"
                                    className="mx-auto w-full h-full rounded-md"
                                ></iframe>
                            </div>
                            <div className=" w-70 h-44 md:w-[30rem] md:h-64 ">
                                <iframe
                                    src="https://youtube.com/embed/TI5gppbFDK8"
                                    className="mx-auto w-full h-full rounded-md"
                                ></iframe>
                            </div>
                            <div className=" w-70 h-44 md:w-[30rem] md:h-64 ">
                                <iframe
                                    src="https://youtube.com/embed/zuB30480L9w"
                                    className="mx-auto w-full h-full rounded-md"
                                ></iframe>
                            </div>
                            <div className=" w-70 h-44 md:w-[30rem] md:h-64 ">
                                <iframe
                                    src="https://youtube.com/embed/mQvGtwXf1UY"
                                    className="mx-auto w-full h-full rounded-md"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div >
        </div>
    );
}
