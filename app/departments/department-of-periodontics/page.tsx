import Faculty from "@/components/department/Faculty";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className=" min-h-screen flex flex-col p-3 gap-8">
      <div className=" border-2 border-[#b8483ba5] py-12 text-center rounded-sm  ">
        <h1 className=" capitalize text-4xl font-bold text-[#82261B]">
          {"Department of Periodontics"}
        </h1>
        {/* Put the dept name from JSON  */}
      </div>
      <div
        id="about"
        className=" w-full flex flex-col justify-center items-center py-3"
      >
        <Image
          src={"/Dummy-dept-img.jpg"}
          alt="Department Image"
          width={1200}
          height={300}
          className=" rounded"
        />
        <div className=" p-3 text-lg text-justify">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            expedita sit, aliquid fuga, quia dignissimos neque dolore corporis
            officia eos quidem. Sunt nostrum doloremque eius suscipit
            obcaecati consequuntur perferendis eum veniam accusamus! Harum
            consequatur atque veritatis soluta accusantium porro, animi ad
            nisi reprehenderit laboriosam? Rerum, cumque ullam animi quod
            consectetur consequuntur repudiandae, aut non illum nostrum
            officiis quas, vitae nesciunt magnam rem asperiores iste inventore
            placeat obcaecati sequi vero illo quae! Facere unde necessitatibus
            ex dolore odit non corporis beatae. Debitis ea similique velit
            amet, porro at fugit in esse magni facilis iure doloribus
            perspiciatis quos! Commodi corrupti fugiat eius eum voluptatem
            velit incidunt veritatis similique hic? Reprehenderit, placeat.
            Totam ullam et expedita dolor non provident debitis saepe modi
            labore, odit velit optio quisquam maxime illum quasi quo itaque
            dolorum! Rem ea vero amet repudiandae dolore ipsum quod maxime
            inventore accusamus nulla? Adipisci eaque quasi rerum fugit non!
            Nam earum accusantium quasi eligendi odit a esse similique
            delectus assumenda quae temporibus ut sequi maxime, reprehenderit
            enim beatae labore ratione commodi, atque repellat blanditiis
            adipisci fuga! Quas, hic! Unde itaque sunt nulla deleniti autem
            vel iste quia iusto libero in mollitia fugit, earum nobis cumque
            iure necessitatibus, amet cupiditate debitis natus?
          </p>
        </div>
      </div>
      <hr />
      <div id="faculty">
        <div className=" flex flex-col justify-center items-center pt-3">
          <h1 className=" text-3xl font-semibold text-[#82261B]">
            Our Faculty
          </h1>
        </div>
        <div className=" grid place-items-center sm:grid-cols-4 grid-cols-1 p-6 gap-4  ">
          <Faculty />
          <Faculty />
          <Faculty />
          <Faculty />
          <Faculty />
          <Faculty />
          <Faculty />
          <Faculty />
        </div>
      </div>
      <hr />
      <div id="vision">
        <div className=" p-3 text-lg text-justify shadow-md rounded-sm border-t-2 border-slate-100 ">
          <h1 className=" text-4xl font-semibold text-[#82261B] text-center py-3">
            Vision
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            expedita sit, aliquid fuga, quia dignissimos neque dolore corporis
            officia eos quidem. Sunt nostrum doloremque eius suscipit
            obcaecati consequuntur perferendis eum veniam accusamus! Harum
            consequatur atque veritatis soluta accusantium porro, animi ad
            nisi reprehenderit laboriosam? Rerum, cumque ullam animi quod
            consectetur consequuntur repudiandae, aut non illum nostrum
            officiis quas, vitae nesciunt magnam rem asperiores iste inventore
            placeat obcaecati sequi vero illo quae! Facere unde necessitatibus
            ex dolore odit non corporis beatae. Debitis ea similique velit
            amet, porro at fugit in esse magni facilis iure doloribus
            perspiciatis quos! Commodi corrupti fugiat eius eum voluptatem
            velit incidunt veritatis similique hic? Reprehenderit, placeat.
            Totam ullam et expedita dolor non provident debitis saepe modi
            labore, odit velit optio quisquam maxime illum quasi quo itaque
            dolorum! Rem ea vero amet repudiandae dolore ipsum quod maxime
            inventore accusamus nulla? Adipisci eaque quasi rerum fugit non!
            Nam earum accusantium quasi eligendi odit a esse similique
            delectus assumenda quae temporibus ut sequi maxime, reprehenderit
            enim beatae labore ratione commodi, atque repellat blanditiis
            adipisci fuga! Quas, hic! Unde itaque sunt nulla deleniti autem
            vel iste quia iusto libero in mollitia fugit, earum nobis cumque
            iure necessitatibus, amet cupiditate debitis natus?
          </p>
        </div>
      </div>
      <div id="mission">
        <div className=" p-3 text-lg text-justify shadow-md rounded-sm border-t-2 border-slate-100 ">
          <h1 className=" text-4xl font-semibold text-[#82261B] text-center py-3">
            Mission
          </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
            expedita sit, aliquid fuga, quia dignissimos neque dolore corporis
            officia eos quidem. Sunt nostrum doloremque eius suscipit
            obcaecati consequuntur perferendis eum veniam accusamus! Harum
            consequatur atque veritatis soluta accusantium porro, animi ad
            nisi reprehenderit laboriosam? Rerum, cumque ullam animi quod
            consectetur consequuntur repudiandae, aut non illum nostrum
            officiis quas, vitae nesciunt magnam rem asperiores iste inventore
            placeat obcaecati sequi vero illo quae! Facere unde necessitatibus
            ex dolore odit non corporis beatae. Debitis ea similique velit
            amet, porro at fugit in esse magni facilis iure doloribus
            perspiciatis quos! Commodi corrupti fugiat eius eum voluptatem
            velit incidunt veritatis similique hic? Reprehenderit, placeat.
            Totam ullam et expedita dolor non provident debitis saepe modi
            labore, odit velit optio quisquam maxime illum quasi quo itaque
            dolorum! Rem ea vero amet repudiandae dolore ipsum quod maxime
            inventore accusamus nulla? Adipisci eaque quasi rerum fugit non!
            Nam earum accusantium quasi eligendi odit a esse similique
            delectus assumenda quae temporibus ut sequi maxime, reprehenderit
            enim beatae labore ratione commodi, atque repellat blanditiis
            adipisci fuga! Quas, hic! Unde itaque sunt nulla deleniti autem
            vel iste quia iusto libero in mollitia fugit, earum nobis cumque
            iure necessitatibus, amet cupiditate debitis natus?
          </p>
        </div>
      </div>
      <div
        id="videos"
        className=" shadow-md rounded-md border-t-2 border-slate-100 "
      >
        <div className=" py-3 text-center">
          <h2 className="text-3xl text-center tracking-wider">Videos</h2>
          <div className="flex items-center w-[10%] mx-auto my-4">
            <div className="w-full">
              <hr className="bg-black border-none h-[1.5px]" />
            </div>
            <Image
              src={"/teeth.svg"}
              className=""
              height={25}
              width={25}
              alt=""
            />
            <div className="w-full ">
              <hr className="bg-black border-none h-[1.5px]" />
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center py-10 justify-center gap-y-5">
            <div className="w-70 h-44 md:w-[30rem] md:h-64  ">
              <iframe
                src="https://youtube.com/embed/H_ThvSdZ_HE"
                className="mx-auto w-full h-full rounded-md"
              ></iframe>
            </div>
            <div className="w-70 h-44 md:w-[30rem] md:h-64 ">
              <iframe
                src="https://youtube.com/embed/TI5gppbFDK8"
                className="mx-auto w-full h-full rounded-md"
              ></iframe>
            </div>
            <div className="w-70 h-44 md:w-[30rem] md:h-64 ">
              <iframe
                src="https://youtube.com/embed/zuB30480L9w"
                className="mx-auto w-full h-full rounded-md"
              ></iframe>
            </div>
            <div className="w-70 h-44 md:w-[30rem] md:h-64 ">
              <iframe
                src="https://youtube.com/embed/mQvGtwXf1UY"
                className="mx-auto w-full h-full rounded-md"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
