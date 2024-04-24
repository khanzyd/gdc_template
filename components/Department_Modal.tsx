import Link from "next/link";
import React from "react";

const Department_Modal = () => {
  return (
      <div className="bg-[#71150A] flex flex-col gap-2 text-nowrap px-3 py-3">
        <Link href={"/"} className="hover:underline">
          <li>Prosthodontics & Crown</li>
        </Link>
        <Link href={"/"} className="hover:underline">
          <li>Periodontology</li>
        </Link>
        <Link href={"/"} className="hover:underline">
          <li>Oral & Maxillofacial Surgery</li>
        </Link>
        <Link href={"/"} className="hover:underline">
          <li>Conservative dentistry</li>
        </Link>
        <Link href={"/"} className="hover:underline">
          <li>Oral medicine and dentology</li>
        </Link>
      </div>
  );
};

export default Department_Modal;
