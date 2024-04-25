"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Department_Modal from "./Department_Modal";
import { MdEmail } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      <div className="bg-[#82261B] h-10 text-white flex gap-2 justify-end px-6 py-5 items-center font-semibold tracking-wide text-lg">
        <p className="cursor-pointer">Career</p>|
        <p className="cursor-pointer">Knowledge Resource Center</p>|
        <p className="cursor-pointer">Student Support</p>|
        <p className="cursor-pointer">ERP Login</p>
      </div>
      <div className="bg-slate-100 h-48 px-[5%] flex justify-between items-center m-1">
        <div className="flex items-end">
          <Image
            src={"/gdclogo.jpeg"}
            className=" rounded-tl-full rounded-tr-full mr-2"
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

      <div className=" bg-[#82261B] text-white  h-14 px-20 flex gap-2  items-center justify-between font-semibold text-lg tracking-wide relative z-20">
        <Link href={"/"}>
          Home
        </Link>
        <Link className="ml-6" href={"/about"}>
          About
        </Link>
        <div
          className="ml-6 flex relative z-0 h-full py-[1%] "
          onMouseEnter={() => setModal(true)}
          onMouseLeave={() => setModal(false)}
        >
          Departments
          <Image
            src={`${modal ? "/up.svg" : "down.svg"}`}
            alt=""
            height={10}
            width={25}
          />
          <div
            id="modal"
            className={
              `${
                modal ? "visible top-full h-fit" : "h-0 hidden overflow-hidden"
              }` + " min-w-fit absolute shadow-xl"
            }
          >
            <Department_Modal />
          </div>
        </div>
        <Link className="ml-6" href={"/"}>
          NIRF2024
        </Link>
        <Link className="ml-6" href={"/research"}>
          NEET UG(B.D.S)ADMISSION PROCESS 2023-24
        </Link>
        <Link className="ml-6" href={"/"}>
          NAAC MANDATE
        </Link>
        <Link className="ml-6" href={"/"}>
          MUHS MANDATE
        </Link>
      </div>
    </>
  );
};

export default Navbar;
