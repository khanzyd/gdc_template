import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-between items-center h-[25rem]">
      <div className=" h-full w-[50%] flex justify-center items-center">
        <Image src={"/college3.jpeg"} width={700} height={500} alt="" />
      </div>
      <div className="w-[50%] px-10 text-justify font-semibold text-2xl font-sans italic tracking-wide leading-10">
        <q>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam
          cupiditate dicta facere accusamus recuseriam, atque impedit assumenda
          eos sunt. Cupiditate voluptatem, tenetur impedit reprehenderit magnam
          provident! Maxime cumque sed porro!
        </q>
        <br />
        &emsp;- dean lorem ipsum
      </div>
    </div>
  );
}
