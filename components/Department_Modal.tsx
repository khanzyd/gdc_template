import Link from "next/link";
import React from "react";

const Department_Modal = () => {
  return (
      <div className="bg-slate-300 min-h-fit flex flex-col gap-2 text-nowrap px-3 py-3">
        <Link href={"/"} className="hover:underline hover:font-bold">
          •Prosthodontics & Crown
        </Link>
        <Link href={"/"} className="hover:underline hover:font-bold">
          •Periodontology
        </Link>
        <Link href={"/"} className="hover:underline hover:font-bold">
          •Oral & Maxillofacial Surgery
        </Link>
        <Link href={"/"} className="hover:underline hover:font-bold">
          •Conservative dentistry
        </Link>
        <Link href={"/"} className="hover:underline hover:font-bold">
          •Oral medicine and dentology
        </Link>
      </div>
  );
};

export default Department_Modal;
