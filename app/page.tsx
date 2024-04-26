import Image from "next/image";
import Home_Carousel from "@/components/HomeCarousel";
import CouncilMemberCard from "@/components/CouncilMemberCard";
import left_arrow from "@/public/left-arrow.svg";
import right_arrow from "@/public/right-arrow.svg";
import Box from "@/components/Box";
import College_Info from "@/components/CollegeInfo";
import Deans_Message from "@/components/DeansMessage";
import Life_At_GDC from "@/components/LifeAtGDC";

let arr = [
  {
    url: "/trophy.svg",
    heading: "Outreach",
    para: "Govt. Dental College & Hospital, Nagpur was established in 1968 to....",
  },
  {
    url: "/stethoscope.svg",
    heading: "Highest Patient Turnover",
    para: "Annual patient turnover of approximately 1.8 lakh patients per...",
  },
  {
    url: "/education.svg",
    heading: "Student First Campus",
    para: "Safe & Secure Campus with CCTV surveillance with ample recreational...",
  },
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <Home_Carousel />
      <div className="flex mb-10 mt-24 justify-evenly h-fit py-10">
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

        <College_Info />
      </div>
      <Deans_Message />
      <Life_At_GDC />
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
          <div className="flex flex-col items-center">
            <img
              className="w-[75px] mb-4 mix-blend-darken"
              src="data:image/png;base64,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"
            ></img>
            <span className="text-3xl">10+</span>
            <span className="text-xl">Departments</span>
          </div>
          <div className="h-fill w-[2px] bg-white"></div>
          <div className="flex flex-col items-center">
            <img
              className="w-[75px] mb-4 mix-blend-darken"
              src="data:image/png;base64,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"
            ></img>
            <span className="text-3xl">10+</span>
            <span className="text-xl">Departments</span>
          </div>
          <div className="h-fill w-[2px] bg-white"></div>
          <div className="flex flex-col items-center">
            <img
              className="w-[75px] mb-4 mix-blend-darken"
              src="data:image/png;base64,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"
            ></img>
            <span className="text-3xl">10+</span>
            <span className="text-xl">Departments</span>
          </div>
          <div className="h-fill w-[2px] bg-white"></div>
          <div className="flex flex-col items-center">
            <img
              className="w-[75px] mb-4 mix-blend-darken"
              src="data:image/png;base64,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"
            ></img>
            <span className="text-3xl">10+</span>
            <span className="text-xl">Departments</span>
          </div>
        </div>
      </section>
      <section className="flex gap-16 justify-center items-center my-16 px-32 py-32">
        <img src={left_arrow.src}></img>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden">
            <img
              className="w-[172px] mb-8"
              src="data:image/png;base64,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"
            ></img>
          </div>
          <p className="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ab ullam voluptatum soluta, modi excepturi, itaque fugiat dolores
            neque vitae quidem aliquid nesciunt culpa inventore ea enim voluptas
            tempora dicta facilis tempore laboriosam. Obcaecati velit veniam
            quia illum aperiam voluptas quaerat unde ab repellat modi ullam
            magni itaque officiis, eos, magnam laboriosam eaque! Molestias,
            necessitatibus! Non ab beatae fuga exercitationem dolores porro
            cumque consectetur impedit laudantium consequuntur mollitia quas
            qui, rerum aliquam ipsam voluptas quam explicabo iusto laborum eius
            doloribus. Sapiente maxime id eos, nemo dolorum animi quo, dicta,
            fugiat similique officia optio! Rerum sequi possimus magnam
            repudiandae aliquam hic!
          </p>
        </div>
        <div className="flex flex-col items-center">
          <div className="rounded-full overflow-hidden">
            <img
              className="w-[172px] mb-8"
              src="data:image/png;base64,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"
            ></img>
          </div>
          <p className="italic">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            ab ullam voluptatum soluta, modi excepturi, itaque fugiat dolores
            neque vitae quidem aliquid nesciunt culpa inventore ea enim voluptas
            tempora dicta facilis tempore laboriosam. Obcaecati velit veniam
            quia illum aperiam voluptas quaerat unde ab repellat modi ullam
            magni itaque officiis, eos, magnam laboriosam eaque! Molestias,
            necessitatibus! Non ab beatae fuga exercitationem dolores porro
            cumque consectetur impedit laudantium consequuntur mollitia quas
            qui, rerum aliquam ipsam voluptas quam explicabo iusto laborum eius
            doloribus. Sapiente maxime id eos, nemo dolorum animi quo, dicta,
            fugiat similique officia optio! Rerum sequi possimus magnam
            repudiandae aliquam hic!
          </p>
        </div>
        <img src={right_arrow.src}></img>
      </section>
    </div>
  );
}
