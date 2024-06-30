"use client";

import Image from "next/image";
import arr from "@/app/achievement_data";
import HomeCarousel from "@/components/HomeCarousel";
import left_arrow from "@/public/left-arrow.svg";
import right_arrow from "@/public/right-arrow.svg";
import Box from "@/components/Box";
import CollegeInfo from "@/components/CollegeInfo";
import LifeAtGDC from "@/components/LifeAtGDC";
import CouncilMemberCard from "@/components/CouncilMemberCard";
import NumberSays from "@/components/NumberSays";
import TestimonialCard from "@/components/TestimonialCard";
import Maintenance from "@/components/Maintenance";
import { useEffect, useState } from "react";

export default function Home() {
    let collegeImages = [
        "/home/Carousel1.jpg",
        "/home/Carousel2.jpg",
        "/home/Carousel3.jpg",
        "/home/Carousel4.jpg",
        "/home/Carousel5.jpg",
        "/home/Carousel6.jpg",
        "/home/Carousel7.jpg",
        "/home/Carousel8.jpg",
        "/home/Carousel9.jpg",
        "/home/Carousel10.jpg",
        "/home/Carousel11.jpg",
        "/home/Carousel12.jpg",
        "/home/Carousel13.jpg",
        "/home/Carousel14.jpg",
        "/home/Carousel15.jpg",
        "/home/Carousel16.jpg",
        "/home/Carousel17.jpg",
        "/home/Carousel18.jpg",
        "/home/Carousel19.jpg",
        "/home/Carousel20.jpg",
    ];

    return (
        <div className="overflow-hidden">
            <HomeCarousel imgSrcs={collegeImages} />
            <div className="px-48">
                <div className="mt-16 flex flex-wrap items-center">
                    <h1 className="w-full text-5xl mb-12 text-[var(--primary-color)] text-center font-semibold font-serif">
                        Welcome To Government Dental College and Hospital, Chhatrapati Sambhajinagar
                    </h1>
                    <div className="flex-1 mr-16 flex flex-col">
                        <p className="text-lg text-justify">
                            <strong>Govt Dental College and Hospital, Chatrapati Sambhajinagar</strong> is one of the reputed Govt. Dental Colleges in Maharashtra. The college is popularly known as GDCH Chatrapati Sambhajinagar and was founded in the year 1982-83. The college was established to fortify the weakest section of the Nation, i.e. Rural population. It was started to serve students with the best dental care and Oral and Maxillofacial Surgery. The college is affiliated with the Maharashtra University of Health Sciences, Nashik, and is approved by the Dental Council of India, Govt. of India.
                        </p>
                        <a className="bg-[var(--primary-color)] px-4 py-2 rounded-tr-2xl rounded-bl-2xl text-center w-fit mx-auto font-semibold text-slate-50 mt-8" href="#">
                            read more
                        </a>
                    </div>
                    <div className="flex-1">
                        <iframe width="590" height="332" src="https://www.youtube.com/embed/kHhK1icL3qw" title="FINAL DENTAL VIDEO" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </div>
                <div className="flex items-center w-full mt-24 gap-x-4">
                    <div className="flex-1 ">
                        <img className="m-auto w-[500px] shadow-lg rounded-box" src="/home/Dean.png"></img>
                    </div>
                    <div className="flex-1 flex flex-col">
                        <h1 className="text-3xl font-semibold mb-8">
                            DEAN'S MESSAGE
                        </h1>
                        <p className="text-justify mb-4 fontme">
                            I Dr.Maya.S.Indurkar welcome you to this prestigious Govt. Dental College and Hospital Chh.Sambhajinagar(Aurangabad), only Govt college in Marathwada region. This institution was established in the year 1982 by Govt. of Maharashtra. It is my great pleasure to extend a warm welcome to each and everyone of you.
                        </p>
                        <p className="text-justify mb-4">
                            At our institution, we are dedicated to fostering excellence in dental education, research, and patient care. Our distinguished faculty members are committed to provide you with the highest quality education. Our graduates leave here not only as skilled clinicians, but also as compassionate healthcare providers.
                        </p>
                        <a className="bg-[var(--primary-color)] px-4 py-2 rounded-tr-2xl rounded-bl-2xl text-center w-fit mx-auto font-semibold text-slate-50 mt-8 self-center" href="/deans-message/">
                            read more
                        </a>
                        {/* <p className="text-justify">
                            Our mission is clear: To empower our students with the knowledge, skills, and compassion needed to excel in the field of dentistry. We pride ourselves on providing a comprehensive education that blends cutting-edge technology with hands-on clinical experience.
                        </p>
                        <p className="text-justify">
                            We are also deeply committed to advancing dental research, pushing boundaries, and contributing to the evolving landscape of oral healthcare. Through our collaborative efforts, we aim to make lasting contributions to the field.
                        </p>
                        <p className="text-justify">
                            I encourage you to explore our website and learn more about the exciting opportunities and resources we offer. Whether you are a prospective student, a current member of our community, or a visitor interested in our work, I am confident you will find something inspiring here.
                            Regards
                            Dr.(Mrs). Maya.S.Indurkar
                            Dean,Professor Periodontology and  Implantology
                            Govt Dental College Chh.Sambhajinagar(Aurangabad)

                        </p> */}
                    </div>
                </div>
            </div>
            {/* <div className="flex mb-10 mt-24 justify-evenly h-fit py-10">
                 {arr.map((data) => {
                     return <Box svg={data.url} heading={data.heading} para={data.para} />;
                 })}
             </div>
             <div className=" relative">
                 <div className=" absolute overflow-hidden max-h-[30rem] -z-10 opacity-[0.17]  ">
                     <Image
                         src={"/college4.jpg"}
                         className="mx-4 faded-image "
                         width={1920}
                         height={880}
                         alt=""
                     />
                 </div>

                 <CollegeInfo />
             </div>
             <DeansMessage />
             <LifeAtGDC />
             <section className="flex flex-col items-center my-16">
                 <h1 className="text-[#82261B] text-2xl font-semibold mb-16 underline">
                     MEMBERS OF COLLEGE COUNCIL
                 </h1>
                 <div className="flex flex-wrap gap-8 px-32 justify-center">
                     <CouncilMemberCard></CouncilMemberCard>
                     <CouncilMemberCard></CouncilMemberCard>
                     <CouncilMemberCard></CouncilMemberCard>
                     <CouncilMemberCard></CouncilMemberCard>
                     <CouncilMemberCard></CouncilMemberCard>
                     <CouncilMemberCard></CouncilMemberCard>
                     <CouncilMemberCard></CouncilMemberCard>
                     <CouncilMemberCard></CouncilMemberCard>
                     <CouncilMemberCard></CouncilMemberCard>
                     <CouncilMemberCard></CouncilMemberCard>
                 </div>
             </section>
             <section className="bg-[#a2463B] text-white flex flex-col items-center my-16">
                 <h1 className="underline text-2xl font-semibold pt-16 mb-16">
                     THE NUMBERS SAYS IT ALL
                 </h1>
                 <div className="flex gap-16 px-32 pb-16">
                     <NumberSays></NumberSays>
                     <div className="h-fill w-[2px] bg-white"></div>
                     <NumberSays></NumberSays>
                     <div className="h-fill w-[2px] bg-white"></div>
                     <NumberSays></NumberSays>
                     <div className="h-fill w-[2px] bg-white"></div>
                     <NumberSays></NumberSays>
                 </div>
             </section>
             <section className="flex gap-16 justify-center items-center my-16 px-32 py-32">
                 <img src={left_arrow.src}></img>
                 <TestimonialCard></TestimonialCard>
                 <TestimonialCard></TestimonialCard>
                 <img src={right_arrow.src}></img>
             </section> */}
        </div>
    );
}
