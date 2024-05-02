"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Home_Carousel = () => {
  const [homeImg, setHomeImg] = useState("/event2.jpg");
  let collegeImages = [
    "/college4.jpg",
    "/event4.jpg",
    "/event2.jpg",
    "/event3.jpg",
  ];
  let i = 0;
  useEffect(() => {
    let homeImgInterval = setInterval(() => {
      if (i == collegeImages.length) {
        i = -1;
      }
      setHomeImg(collegeImages[++i]);
    }, 3000);
    return () => {
      clearInterval(homeImgInterval);
    };
  });
  return (
    <>
      <div className="absolute top-0 z-50 rigth-0 w-screen shadow-[inset_0px_-25px_30px_26px_#ffffff]"></div>
      <div className="h-[650px] w-full flex justify-center items-center relative ">
        <div className="absolute left-5 z-10 ">
          <Image src={"/left-arrow.svg"} height={50} width={50} alt="" />
        </div>
        <Image className="" src={homeImg} fill alt="" />
        <div className="absolute right-5 z-10">
          <Image src={"/right-arrow.svg"} height={50} width={50} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home_Carousel;
