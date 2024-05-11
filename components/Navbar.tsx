"use client";

import Image from "next/image";
import DropDownMenu from "./DropDownMenu";
import NavItem from "./NavItem";
import { MdEmail } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import SecondaryNavbarItem from "./SecondaryNavbarItem";

const Navbar = () => {
    return (
        <>
            <div className="bg-[#82261B] text-white flex justify-end px-16 items-center font-semibold tracking-wide text-sm">
                <SecondaryNavbarItem>Career</SecondaryNavbarItem>
                <SecondaryNavbarItem>Knowledge Resource Center</SecondaryNavbarItem>
                <SecondaryNavbarItem>Student Support</SecondaryNavbarItem>
                <SecondaryNavbarItem>ERP Login</SecondaryNavbarItem>
            </div>
            <div className="h-48 px-[5%] flex justify-between items-center cover-image relative drop-shadow-2xl">
                <div className="flex items-end gap-8">
                    <Image
                        src={"/gdclogo1.png"}
                        className="mr-2"
                        alt=""
                        height={"150"}
                        width={"150"}
                    />
                    <div className=" ">
                        <div className=" pl-1 text-start mb-3">
                            <h2 className="text-4xl font-bold">
                                Government Dental College &amp; Hospital,
                            </h2>
                            <p className="text-xl font-semibold">Chhatrapati sambajinagar</p>
                        </div>
                        <div className="flex">
                            <Image
                                src={"/NAAC.png"}
                                className=" rounded-full border-4 border-slate-600 mr-2"
                                height={60}
                                width={60}
                                alt=""
                            />
                            <Image
                                src={"/ACCRED2.png"}
                                className=" rounded-full border-4 border-slate-600 mr-2"
                                height={60}
                                width={60}
                                alt=""
                            />
                            <Image
                                src={"/NAAC.png"}
                                className=" rounded-full border-4 border-slate-600 mr-2"
                                height={60}
                                width={60}
                                alt=""
                            />
                            <Image
                                src={"/ACCRED3.png"}
                                className=" rounded-full border-4 border-slate-600 bg-slate-200"
                                height={60}
                                width={60}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-evenly h-full px-2">
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

            <div className=" bg-[#82261B] text-white px-40 py-2 flex items-center justify-end font-semibold text-sm tracking-wide relative">
                <NavItem href={"/"}>HOME</NavItem>
                <DropDownMenu links={[
                    { name: "ABOUT COLLEGE", ref: "/about-us/about-college" },
                    { name: "INFRASTRUCTURE", ref: "/about-us/infrastructure" },
                    { name: "COLLEGE CERTIFICATION", ref: "/about-us/courses" },
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
                <NavItem href={"/procurement-cell"}>PROCUREMENT cELL</NavItem>
                <NavItem href={"/muhs-mandate"}>MUHS MANDATE</NavItem>
                <NavItem href={"/naac"}>NAAC</NavItem>
                <DropDownMenu links={[
                    {name: "Research", ref: "/research"},
                    {name: "Director's message", ref: "/research"},
                    {name: "Pradan", ref: "/research"},
                    {name: "Chairman's message", ref: "/research"},
                    {name: "Schedules", ref: "/research"},
                    {name: "Programs conducted", ref: "/research"},
                    {name: "Ethical committee member", ref: "/research"},
                    {name: "Meeting schedule", ref: "/research"},
                    {name: "Research awards", ref: "/research"},
                    {name: "MOU's & Collaboration", ref: "/research"},
                    {name: "Research Projects", ref: "/research"},
                    {name: "Research Fundings", ref: "/research"},
                    {name: "Research Publications", ref: "/research"},
                    {name: "Patents", ref: "/research"},
                    {name: "Copyrights", ref: "/research"},
                    {name: "Innovations", ref: "/research"},
                    {name: "Interdesciplinary activities", ref: "/research"},
                    ]}>RESEARCH</DropDownMenu>
            </div>
        </>
    );
};

export default Navbar;
