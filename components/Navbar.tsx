"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, LegacyRef } from "react";

const Navbar = () => {
  type mod = LegacyRef<HTMLDivElement>;
  // let modal: React.MutableRefObject<HTMLDivElement> = useRef();
  const openModal = () => {};
  return (
    <>
      <div className="bg-white h-60 px-[3%] flex justify-between items-center">
        <div className="flex items-center">
          <Image src={"/gdclogo.jpeg"} alt="" height={"200"} width={"200"} />
          <div className="ml-10">
            <h2 className="text-4xl font-bold">
              Government Dental College &amp; Hospital,{" "}
            </h2>
            <p className="text-xl font-semibold">chh. sambajinagar</p>
          </div>
        </div>
        <div className="flex flex-col justify-evenly bg-red-500 h-full px-2">
          <div>
            <h3 className="flex font-bold items-center">
              <Image
                src={"/email.svg"}
                alt=""
                height={30}
                width={30}
                className="mr-2"
              />
              Email :
            </h3>
            <p className="ml-4 underline">
              Lorem_ipsum@gmail.com <br /> GDC_aurangabad@edu.in
            </p>
          </div>
          <div>
            <h3 className="flex font-bold items-center">
              <Image
                src={"/email.svg"}
                alt=""
                height={30}
                width={30}
                className="mr-2"
              />
              Have a question? :
            </h3>
            <p className="ml-4 underline">
              call on 91+ 99990111 <br />
              student sec: 91+ 90002101
            </p>
          </div>
        </div>
      </div>

      <div className="bg-orange-700 h-30 px-[3%] py-[1%] flex items-center justify-center font-semibold text-lg">
        <Link href={"/"}>Home</Link>
        <Link className="ml-6" href={"/about"}>
          about
        </Link>
        <Link
          className="ml-6 flex relative z-0"
          onMouseEnter={() => openModal()}
          href={"/"}
        >
          Departments
          <Image src={"/down.svg"} alt="" height={10} width={25} />
          <div className="openModaldiv hidden" 
          // ref={(el) => (modal = el)}
          >
            hello
          </div>
        </Link>
        <Link className="ml-6" href={"/"}>
          Infrastructure
        </Link>
        <Link className="ml-6" href={"/research"}>
          Research & Innovation
        </Link>
        <Link className="ml-6" href={"/"}>
          Patient Care
        </Link>
        <Link className="ml-6" href={"/"}>
          Student Support
        </Link>
        <Link className="ml-6" href={"/"}>
          Library
        </Link>
        <Link className="ml-6" href={"/"}>
          GDC Publications
        </Link>
        <Link className="ml-6" href={"/"}>
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
