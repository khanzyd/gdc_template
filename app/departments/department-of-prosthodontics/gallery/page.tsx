import React from "react";

export default function Page() {
  let arr: React.JSX.Element[] | { src: string; title: string }[] = [
    {
      src: "/departments/department-of-prosthodontics/Undergraduate Clinic.jpg",
      title: "Undergraduate Clinic",
    },
    {
      src: "/departments/department-of-prosthodontics/Post Graduate Clinic.jpg",
      title: "Post Graduate Clinic",
    },
    {
      src: "/departments/department-of-prosthodontics/Special Operatory for LASER & Implantology.jpg",
      title: "Special Operatory for LASER & Implantology",
    },
  ];

  arr = arr.map((val) => {
    return (
      <div className="flex-auto flex flex-col justify-center items-center">
        <img
          src={val.src}
          alt="Department Image"
          className="rounded max-w-[300px] max-h-[200px] lg:max-w-[500px] lg:max-h-[300px]"
        />
        <p className="text-center mt-4 text-lg font-bold">{val.title}</p>
      </div>
    );
  });

  return (
    <div className="lg:max-w-[70%] lg:m-auto m-4">
      <div className="flex flex-wrap gap-8 mt-8">
        <h1 className="text-center text-2xl font-bold w-full text-[var(--primary-color)]">
          Gallery
        </h1>
        {arr}
      </div>
    </div>
  );
}
