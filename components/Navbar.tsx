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

            <div className=" bg-[#82261B] text-white px-20 py-2 flex items-center justify-end font-semibold text-sm tracking-wide relative">
                <NavItem href={"/"}>Home</NavItem>
                <DropDownMenu links={[{name: "courses", ref: "/"}]}>About Us</DropDownMenu>
                <DropDownMenu links={[
                    { name: "DEPARTMENT OF ORAL MEDICINE & RADIOLOGY", ref: "/" },
                    { name: "DEPARTMENT OF ORAL SURGERY", ref: "/" },
                    { name: "DEPARTMENT OF PERIODONTICS", ref: "/" },
                    { name: "DEPARTMENT OF PUBLIC HEALTH DENTISTRY", ref: "/" },
                    { name: "DEPARTMENT OF PEDODONTICS", ref: "/" },
                    { name: "DEPARTMENT OF CONSERVATIVE DENTISTRY", ref: "/" },
                    { name: "DEPARTMENT OF ORTHODONTICS", ref: "/" },
                    { name: "DEPARTMENT OF PROSTHODONTICS", ref: "/" },
                    { name: "DEPARTMENT OF ORAL PATHOLOGY", ref: "/" },
                    { name: "ADMINISTRATIVE OFFICE", ref: "/" },
                    { name: "A. OFFICE STAFF", ref: "/" },
                    { name: "B. ADMINISTRATIVE SECTION", ref: "/" },
                ]}>Departments</DropDownMenu>
                <DropDownMenu links={[{name: "", ref: ""}]}>Student Portal</DropDownMenu>
                <NavItem href={"/recruitment-cell"}>Recruitment Cell</NavItem>
                <NavItem href={"/procurement-cell"}>Procurement Cell</NavItem>
                <NavItem href={"/muhs-mandate"}>MUHS Mandate</NavItem>
                <NavItem href={"/naac"}>NAAC</NavItem>
                <DropDownMenu links={[{name: "", ref: ""}]}>Research</DropDownMenu>
            </div>
        </>
    );
};

export default Navbar;
