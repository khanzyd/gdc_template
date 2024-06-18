import Image from "next/image";
import arr from "@/public/achievement_data";
import HomeCarousel from "@/components/HomeCarousel";
import left_arrow from "@/public/left-arrow.svg";
import right_arrow from "@/public/right-arrow.svg";
import Box from "@/components/Box";
import CollegeInfo from "@/components/CollegeInfo";
import DeansMessage from "@/components/DeansMessage";
import LifeAtGDC from "@/components/LifeAtGDC";
import CouncilMemberCard from "@/components/CouncilMemberCard";
import NumberSays from "@/components/NumberSays";
import TestimonialCard from "@/components/TestimonialCard";
import Maintenance from "@/components/Maintenance";

export default function Home() {
    return (
        <Maintenance></Maintenance>
        // <div className="relative overflow-hidden">
        //     <HomeCarousel />
        //     <div className="flex mb-10 mt-24 justify-evenly h-fit py-10">
        //         {arr.map((data) => {
        //             return <Box svg={data.url} heading={data.heading} para={data.para} />;
        //         })}
        //     </div>
        //     <div className=" relative">
        //         <div className=" absolute overflow-hidden max-h-[30rem] -z-10 opacity-[0.17]  ">
        //             <Image
        //                 src={"/college4.jpg"}
        //                 className="mx-4 faded-image "
        //                 width={1920}
        //                 height={880}
        //                 alt=""
        //             />
        //         </div>

        //         <CollegeInfo />
        //     </div>
        //     <DeansMessage />
        //     <LifeAtGDC />
        //     <section className="flex flex-col items-center my-16">
        //         <h1 className="text-[#82261B] text-2xl font-semibold mb-16 underline">
        //             MEMBERS OF COLLEGE COUNCIL
        //         </h1>
        //         <div className="flex flex-wrap gap-8 px-32 justify-center">
        //             <CouncilMemberCard></CouncilMemberCard>
        //             <CouncilMemberCard></CouncilMemberCard>
        //             <CouncilMemberCard></CouncilMemberCard>
        //             <CouncilMemberCard></CouncilMemberCard>
        //             <CouncilMemberCard></CouncilMemberCard>
        //             <CouncilMemberCard></CouncilMemberCard>
        //             <CouncilMemberCard></CouncilMemberCard>
        //             <CouncilMemberCard></CouncilMemberCard>
        //             <CouncilMemberCard></CouncilMemberCard>
        //             <CouncilMemberCard></CouncilMemberCard>
        //         </div>
        //     </section>
        //     <section className="bg-[#a2463B] text-white flex flex-col items-center my-16">
        //         <h1 className="underline text-2xl font-semibold pt-16 mb-16">
        //             THE NUMBERS SAYS IT ALL
        //         </h1>
        //         <div className="flex gap-16 px-32 pb-16">
        //             <NumberSays></NumberSays>
        //             <div className="h-fill w-[2px] bg-white"></div>
        //             <NumberSays></NumberSays>
        //             <div className="h-fill w-[2px] bg-white"></div>
        //             <NumberSays></NumberSays>
        //             <div className="h-fill w-[2px] bg-white"></div>
        //             <NumberSays></NumberSays>
        //         </div>
        //     </section>
        //     <section className="flex gap-16 justify-center items-center my-16 px-32 py-32">
        //         <img src={left_arrow.src}></img>
        //         <TestimonialCard></TestimonialCard>
        //         <TestimonialCard></TestimonialCard>
        //         <img src={right_arrow.src}></img>
        //     </section>
        // </div>
    );
}
