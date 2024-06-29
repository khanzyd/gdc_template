import Image from "next/image";
import { useEffect, useState } from "react";
import leftArrow from "@/public/left-arrow.svg";
import rightArrow from "@/public/right-arrow.svg"

function handleCarouselSlide(setCarouselSlidePoint: Function, carouselSlidePoint: number, noOfImgSrcs: number, direction: number) {
    let newCarouselPoint = carouselSlidePoint;

    if (carouselSlidePoint + (direction * 100) < (noOfImgSrcs - 1) * -100) {
        newCarouselPoint = 100;
    }
    else if (carouselSlidePoint + (direction * 100) > 0) {
        newCarouselPoint = -noOfImgSrcs * 100;
    }

    setCarouselSlidePoint(newCarouselPoint + (direction * 100));
}

const Home_Carousel = (props: { imgSrcs: string[] }) => {
    const [carouselSlidePoint, setCarouselSlidePoint] = useState(0);
    useEffect(() => {
        const slideInterval = setInterval(() => handleCarouselSlide(setCarouselSlidePoint, carouselSlidePoint, props.imgSrcs.length, -1), 3000);
        return () => clearInterval(slideInterval);
    })

    return (
        <div>
            <div className="flex transition-all duration-500 ease-in-out" style={{ transform: `translateX(${carouselSlidePoint}%)` }}>
                {props.imgSrcs.map((src) => {
                    return (
                        <div className="w-full flex justify-center basis-full shrink-0 h-[300px] lg:h-[600px] bg-black" key={src}>
                            <Image alt="img" width={1920} height={500} className=" object-cover" src={src}></Image>
                        </div>
                    )
                })}
            </div>
            <div>
                <button className="absolute text-white top-1/2 left-0 px-4 h-full hover:bg-gray-50 hover:bg-opacity-15" style={{ transform: "translateY(-50%)" }}
                    onMouseDown={() => handleCarouselSlide(setCarouselSlidePoint, carouselSlidePoint, props.imgSrcs.length, 1)}>
                    <img className="invert h-16 w-16" src={leftArrow.src}></img>
                </button>
                <button className="absolute text-white top-1/2 right-0 px-4 h-full hover:bg-gray-50 hover:bg-opacity-15"
                    style={{ transform: "translateY(-50%)" }}
                    onMouseDown={() => handleCarouselSlide(setCarouselSlidePoint, carouselSlidePoint, props.imgSrcs.length, -1)}>
                    <img className="invert h-16 w-16" src={rightArrow.src}></img>
                </button>
            </div>
            {/* <div className="absolute top-0 z-50 rigth-0 w-screen shadow-[inset_0px_-25px_30px_26px_#ffffff]"></div>
                <div className="h-[650px] w-full flex justify-center items-center relative ">
                    <div className="absolute left-5 z-10 ">
                        <Image src={"/left-arrow.svg"} height={50} width={50} alt="" />
                    </div>
                    <Image className="" src={props.imgSrc} fill alt="" />
                    <div className="absolute right-5 z-10">
                        <Image src={"/right-arrow.svg"} height={50} width={50} alt="" />
                    </div>
                </div> */}
        </div>
    );
};

export default Home_Carousel;
