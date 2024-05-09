"use client";
import Image from "next/image";
import React, { useState } from "react";
import Department_Modal from "./DepartmentModal";
import NavItem from "./NavItem";
import { MdEmail } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import SecondaryNavbarItem from "./SecondaryNavbarItem";

const Navbar = () => {
    const [modal, setModal] = useState(false);

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

            <div className=" bg-[#82261B] text-white px-20 flex items-center justify-end font-semibold text-sm tracking-wide relative">
                <NavItem href={"/home"}> Home </NavItem>
                <NavItem href={"/"}> About Us </NavItem>
                <div
                    className="flex relative cursor-pointer duration-200 hover:shadow-[-1px_0_0_0_white,1px_0_0_0_white] px-2"
                    onMouseEnter={() => setModal(true)}
                    onMouseLeave={() => setModal(false)} >
                    Departments
                    <Image
                        className={`${modal ? "-scale-y-100" : "scale-y-100"} ml-2 duration-100`}
                        src="/up.svg"
                        alt=""
                        height={15}
                        width={15} />
                    <div
                        id="modal"
                        className={`${modal ? "visible top-full left-0 h-fit" : "h-0 hidden overflow-hidden"}` +
                            " min-w-fit absolute shadow-xl z-10"}>
                        <Department_Modal />
                    </div>
                </div>
                <NavItem href={"/"}> NIRF2024 </NavItem>
                <NavItem href={"/"}> NEET UG(B.D.S)ADMISSION PROCESS 2023-24 </NavItem>
                <NavItem href={"/"}> NAAC MANDATE </NavItem>
                <NavItem href={"/"}> MUHS MANDATE </NavItem>
            </div>
        </>
    );
};

export default Navbar;
