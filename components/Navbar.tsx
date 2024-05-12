"use client";

import Image from "next/image";
import DropDownMenu from "./DropDownMenu";
import NavItem from "./NavItem";
import { MdEmail } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import SecondaryNavbarItem from "./SecondaryNavbarItem";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="bg-[#82261B] hidden text-white justify-end px-16 items-center font-semibold tracking-wide text-sm sm:flex">
                <SecondaryNavbarItem>Career</SecondaryNavbarItem>
                <SecondaryNavbarItem>Knowledge Resource Center</SecondaryNavbarItem>
                <SecondaryNavbarItem>Student Support</SecondaryNavbarItem>
                <SecondaryNavbarItem>ERP Login</SecondaryNavbarItem>
            </div>
            <div className="px-[5%] flex justify-between items-center cover-image relative drop-shadow-2xl">
                <div className="flex items-center gap-4 sm:gap-8 py-4">
                    <Image
                        src={"/gdclogo1.png"}
                        className="mr-2 h-24 w-24 sm:h-36 sm:w-36"
                        alt=""
                        height={"150"}
                        width={"150"}
                    />
                    <div className=" ">
                        <div className=" pl-1 text-start mb-3">
                            <h2 className="text-base sm:text-4xl font-bold">
                                Government Dental College &amp; Hospital,
                            </h2>
                            <p className="text-sm sm:text-xl font-semibold">
                                Chhatrapati sambajinagar
                            </p>
                        </div>
                        <div className="flex">
                            <Image
                                src={"/NAAC.png"}
                                className="h-8 w-8 sm:h-14 sm:w-14 rounded-full border-4 border-slate-600 mr-2"
                                height={60}
                                width={60}
                                alt=""
                            />
                            <Image
                                src={"/ACCRED2.png"}
                                className="h-8 w-8 sm:h-14 sm:w-14 rounded-full border-4 border-slate-600 mr-2"
                                height={60}
                                width={60}
                                alt=""
                            />
                            <Image
                                src={"/NAAC.png"}
                                className="h-8 w-8 sm:h-14 sm:w-14 rounded-full border-4 border-slate-600 mr-2"
                                height={60}
                                width={60}
                                alt=""
                            />
                            <Image
                                src={"/ACCRED3.png"}
                                className="h-8 w-8 sm:h-14 sm:w-14 rounded-full border-4 border-slate-600 bg-slate-200"
                                height={60}
                                width={60}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="hidden sm:flex flex-col justify-evenly h-full px-2">
                    <div>
                        <h3 className="flex font-bold items-center">
                            <MdEmail className=" text-xl" />
                            Email :
                        </h3>
                        <p className="ml-4 underline">
                            Lorem_ipsum@gmail.com <br /> GDC_aurangabad@edu.in
                        </p>
                    </div>
                    <div>
                        <h3 className="flex font-bold items-center">
                            <MdOutlineContactSupport className=" text-xl" />
                            Have a question? :
                        </h3>
                        <p className="ml-4 underline">
                            call on 91+ 99990111 <br />
                            student sec: 91+ 90002101
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-[var(--primary-color)] text-white flex flex-col text-sm shadow-lg font-semibold max-sm:p-4 pr-44 max-sm:pr-8 select-none">
                <button onClick={() => setIsOpen(!isOpen)} className="max-sm:block hidden self-end">
                    <svg
                        className={`fill-current h-6 w-6 ${isOpen ? "hidden" : "block"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                        className={`fill-current h-6 w-6 ${isOpen ? "block" : "hidden"}`}
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
                <div className={`items-center justify-end tracking-wide relative sm:flex ${isOpen ? "block" : "hidden"}`}>
                    <NavItem href={"/"}>HOME</NavItem>
                    <DropDownMenu links={[
                        { name: "ABOUT COLLEGE", ref: "/about-us/about-college" },
                        { name: "INFRASTRUCTURE", ref: "/about-us/infrastructure" },
                        { name: "COLLEGE CERTIFICATION", ref: "/about-us/college-certification" },
                        { name: "COURSES", ref: "/about-us/courses" }
                    ]}>ABOUT US</DropDownMenu>
                    <DropDownMenu links={[
                        { name: "DEPARTMENT OF ORAL MEDICINE & RADIOLOGY", ref: "/departments/department-of-oral-medicine&radiology" },
                        { name: "DEPARTMENT OF ORAL SURGERY", ref: "/departments/department-of-oral-surgery" },
                        { name: "DEPARTMENT OF PERIODONTICS", ref: "/departments/department-of-periodontics" },
                        { name: "DEPARTMENT OF PUBLIC HEALTH DENTISTRY", ref: "/departments/department-of-public-health-dentistry" },
                        { name: "DEPARTMENT OF PEDODONTICS", ref: "/departments/department-of-pedodontics" },
                        { name: "DEPARTMENT OF CONSERVATIVE DENTISTRY", ref: "/departments/department-of-conservative-dentistry" },
                        { name: "DEPARTMENT OF ORTHODONTICS", ref: "/departments/department-of-orthodontics" },
                        { name: "DEPARTMENT OF PROSTHODONTICS", ref: "/departments/department-of-prosthodontics" },
                        { name: "DEPARTMENT OF ORAL PATHOLOGY", ref: "/departments/department-of-oral-pathology" },
                        { name: "ADMINISTRATIVE OFFICE", ref: "/departments/administrative-office" },
                    ]}>DEPARTMENTS</DropDownMenu>
                    <DropDownMenu links={[
                        { name: "ANTI RAGGING", ref: "/student-portal/anti-ragging" },
                        { name: "MENTORSHIP PROGRAMME", ref: "/student-portal/mentorship-programme" },
                        { name: "BUDDY SYSTEM", ref: "/student-portal/buddy-system" },
                        { name: "STUDENT COUNCIL", ref: "/student-portal/student-council" },
                        { name: "PARENT-TEACHER ASSOCIATION", ref: "/student-portal/parent-teacher-association" },
                        { name: "STUDENT INFO", ref: "/student-portal/student-info" },
                        { name: "STUDENTS'S ACHIEVEMENTS", ref: "/student-portal/students-achievements" },
                        { name: "ACADEMIC", ref: "/student-portal/academic" },
                        { name: "EDUCATIONAL RESOURCES", ref: "/student-portal/educational-resources" },
                        { name: "CARRIER GUIDANCE CELL", ref: "/student-portal/carrier-guidance-cell" },
                        { name: "FEEDBACK AND VALIDATION", ref: "/student-portal/feedback-and-validation" },
                        { name: "INTERNATIONAL STUDENTS CELL", ref: "/student-portal/international-students-cell" },
                        { name: "NSS & NCC", ref: "/student-portal/nss-and-ncc" },
                        { name: "EQUAL OPPORTINITY CELL", ref: "/student-portal/equal-opportinity-cell" },
                    ]}>STUDENT PORTAL</DropDownMenu>
                    <NavItem href={"/recruitment-cell"}>RECRUITMENT CELL</NavItem>
                    <NavItem href={"/procurement-cell"}>PROCUREMENT CELL</NavItem>
                    <NavItem href={"/muhs-mandate"}>MUHS MANDATE</NavItem>
                    <NavItem href={"/naac"}>NAAC</NavItem>
                    <DropDownMenu links={[
                        { name: "RESEARCH DIRECTOR'S MESSAGE", ref: "/research/research-directors-message" },
                        { name: "PRADAN", ref: "/research/pradan" },
                        { name: "ETHICAL COMMITTEE", ref: "/research/ethical-committee" },
                        { name: "RESEARCH AWARDS", ref: "/research/research-awards" },
                        { name: "MOU'S & COLLABORATION", ref: "/research/mous-collaboration" },
                        { name: "RESEARCH PROJECTS", ref: "/research/research-projects" },
                        { name: "RESEARCH FUNDINGS", ref: "/research/research-fundings" },
                        { name: "RESEARCH PUBLICATIONS", ref: "/research/research-publications" },
                        { name: "PATENTS", ref: "/research/patents" },
                        { name: "COPYRIGHTS", ref: "/research/copyrights" },
                        { name: "INNOVATIONS", ref: "/research/innovations" },
                        { name: "INTERDESCIPLINARY ACTIVITIES", ref: "/research/interdesciplinary-activities" },
                    ]}>RESEARCH</DropDownMenu>
                </div>
            </div>
        </>
    );
};

export default Navbar;
