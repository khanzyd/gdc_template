import Link from "next/link";
import React from "react";

const Department_Modal = () => {
  return (
      <div className="bg-[#91352A] flex flex-col text-nowrap px-1 py-3">
        <Link href={"/"} className="hover:shadow-[0_2px_0px_0px_white] px-4 py-2 duration-100">
          Prosthodontics & Crown
        </Link>
        <Link href={"/"} className="hover:shadow-[0_2px_0px_0px_white] px-4 py-2 duration-100">
          Periodontology
        </Link>
        <Link href={"/"} className="hover:shadow-[0_2px_0px_0px_white] px-4 py-2 duration-100">
          Oral & Maxillofacial Surgery
        </Link>
        <Link href={"/"} className="hover:shadow-[0_2px_0px_0px_white] px-4 py-2 duration-100">
          Conservative dentistry
        </Link>
        <Link href={"/"} className="hover:shadow-[0_2px_0px_0px_white] px-4 py-2 duration-100">
          Oral medicine and dentology
        </Link>
      </div>
  );
};

export default Department_Modal;
