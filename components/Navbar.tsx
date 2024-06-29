"use client";

import Image from "next/image";
import DropDownMenu from "./DropDownMenu";
import NavItem from "./NavItem";
import { MdEmail } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import SecondaryNavbarItem from "./SecondaryNavbarItem";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <div className="bg-[var(--primary-color)] text-white justify-end lg:px-16 items-center tracking-wide text-xs lg:text-sm flex gap-4 p-2">
                <p>
                    Email: GDC_aurangabad@edu.in
                </p>
                <p>
                    Phone: 91+ 99990111
                </p>
                {/* <SecondaryNavbarItem reference="">Important Notice</SecondaryNavbarItem>
                <SecondaryNavbarItem reference="">Gallery</SecondaryNavbarItem>
                <SecondaryNavbarItem reference="">Site Map</SecondaryNavbarItem> */}
                {/* <SecondaryNavbarItem reference="https://www.facebook.com/profile.php?id=100063937994949&mibextid=ZbWKwL">Facebook</SecondaryNavbarItem>
                <SecondaryNavbarItem reference="">Youtube</SecondaryNavbarItem>
                <SecondaryNavbarItem reference="">Twitter</SecondaryNavbarItem> */}
            </div>
            <div className="text-[var(--primary-color)] flex flex-wrap justify-center items-center py-4 lg:py-8 px-4 drop-shadow-lg">
                <Image
                    src={"/gdclogo1.png"}
                    className="h-24 w-24 lg:h-36 lg:w-36"
                    alt=""
                    height={"150"}
                    width={"150"} />
                <div className="text-center order-2 lg:order-1 m-1 lg:m-4">
                    <h2 className="text-sm lg:text-2xl font-extrabold">
                        GOVERNMENT DENTAL COLLEGE &amp; HOSPITAL,
                    </h2>
                    <h2 className="text-sm lg:text-2xl font-extrabold mb-1">
                        CHHATRAPATI SAMBAJINAGAR
                    </h2>
                    <h2 className="text-xs lg:text-base font-extrabold">
                        Affiliated to Maharashtra Institute of Health Sciences
                    </h2>
                    <h2 className="text-xs lg:text-base font-extrabold">
                        Recognized by Dental College of India, New Delhi
                    </h2>
                </div>
                <div className="flex order-1 lg:order-2">
                    <Image
                        src={"/NAAC.png"}
                        className="h-10 w-10 lg:h-20 lg:w-20 rounded-full border-4 border-slate-600 mr-2"
                        height={60}
                        width={60}
                        alt="" />
                    <Image
                        src={"/ACCRED2.png"}
                        className="h-10 w-10 lg:h-20 lg:w-20 rounded-full border-4 border-slate-600 mr-2"
                        height={60}
                        width={60}
                        alt="" />
                    <Image
                        src={"/NAAC.png"}
                        className="h-10 w-10 lg:h-20 lg:w-20 rounded-full border-4 border-slate-600 mr-2"
                        height={60}
                        width={60}
                        alt="" />
                    <Image
                        src={"/ACCRED3.png"}
                        className="h-10 w-10 lg:h-20 lg:w-20 rounded-full border-4 border-slate-600 bg-slate-200"
                        height={60}
                        width={60}
                        alt="" />
                </div>
                {/* <div className="hidden lg:flex flex-col justify-evenly h-full px-2">
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
                </div> */}
            </div>

            <div className="bg-[var(--primary-color)] text-white flex flex-col text-sm shadow-lg font-semibold select-none">
                <button onClick={() => setIsOpen(!isOpen)} className="block lg:hidden self-end p-4 pr-8">
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
                <div className={`lg:self-center items-center justify-end tracking-wide relative flex ${isOpen ? "flex flex-col" : "hidden lg:flex"}`}>
                    <NavItem href={"/"}>HOME</NavItem>
                    <DropDownMenu links={[
                        { name: "ABOUT COLLEGE", ref: "/about-us/about-college" },
                        { name: "INFRASTRUCTURE", ref: "/about-us/infrastructure" },
                        { name: "COLLEGE CERTIFICATION", ref: "/about-us/college-certification" },
                        { name: "COURSES", ref: "/about-us/courses" }
                    ]}>ABOUT US</DropDownMenu>
                    <DropDownMenu links={[
                        { name: "DEPARTMENT OF ORAL MEDICINE & RADIOLOGY", ref: "/departments/department-of-oral-medicine-and-radiology" },
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
        </div>
    );
};

export default Navbar;
