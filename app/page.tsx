import Image from "next/image";
import Home_Carousel from "@/components/Home_Carousel";
import Box from "@/components/Box";
import College_Info from "@/components/College_Info";
import Deans_Message from "@/components/Deans_Message";
import Life_At_GDC from "@/components/Life_At_GDC";

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
    <div className="relative">
      <Home_Carousel />
      <div className="flex mb-10 mt-16 justify-evenly h-fit py-10">
        {arr.map((data) => {
          return <Box svg={data.url} heading={data.heading} para={data.para} />;
        })}
      </div>
      <College_Info />
      <Deans_Message />
      <Life_At_GDC />
    </div>
  );
}
