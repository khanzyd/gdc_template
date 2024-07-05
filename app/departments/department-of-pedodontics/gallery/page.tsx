import React from "react";

export default function Page() {
  let arr: React.JSX.Element[] | { src: string; title: string }[] = [
    {
      src: "/departments/department-of-pedodontics/img4.png",
      title: "",
    },
    {
      src: "/departments/department-of-pedodontics/img2.jpg",
      title: "",
    },
    {
      src: "/departments/department-of-pedodontics/img5.jpg",
      title: "",
    },
    {
      src: "/departments/department-of-pedodontics/img6.jpg",
      title: "",
    },
    {
      src: "/departments/department-of-pedodontics/img7.jpg",
      title: "",
    },
    {
      src: "/departments/department-of-pedodontics/img8.jpg",
      title: "",
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
