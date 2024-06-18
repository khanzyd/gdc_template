import React from "react";
import Maintenance from "@/components/Maintenance";

// function Annexure({name, desc, source}: {name: string, desc: string, source: string}){
//     return <div className="flex max-sm:flex-wrap pb-4">
//         <h2 className="pr-4">{name}</h2>
//         <a href={`${source}`} className="underline max-sm:pr-0 pr-4 text-[var(--primary-color)]" target="_blank">pdf</a>
//         <p className="max-sm:w-full max-sm:text-xs">{desc}</p>
//     </div>
// }

export default function Page() {
    return (
        <Maintenance></Maintenance>
        // <div className="sm:px-48 px-4 py-10">
        //     <h1 className="text-4xl pb-8">MUHS MANDATE (2023-2024)</h1>
        //     <h2 className="text-2xl pb-4 text-center">List of Annexures</h2>
        //     <Annexure name="Annexure-I" source="/" desc="Seat Matrix"></Annexure>
        //     <Annexure name="Annexure-II" source="/" desc="Infrastructure Details"></Annexure>
        //     <Annexure name="Annexure-III" source="/" desc="Trust Deed / Bylaws / Registration Certificate"></Annexure>
        //     <Annexure name="Annexure-IV" source="/" desc="Library Details"></Annexure>
        //     <Annexure name="Annexure-V" source="/" desc="Department-wise Equipements / Instruments / Charts / Models / Furniture"></Annexure>
        //     <Annexure name="Annexure-VI" source="/" desc="Clinical Material in Hospital"></Annexure>
        //     <Annexure name="Annexure-VII" source="/" desc="Information about Department-wise OPD"></Annexure>
        //     <Annexure name="Annexure-VIII" source="/" desc="Total Teaching Staff Information (Approved + Not approved) as per MSR"></Annexure>
        //     <Annexure name="Annexure-IX" source="/" desc="Subject-wise Teacher List (Approved + Not approved)"></Annexure>
        //     <Annexure name="Annexure-X" source="/" desc="Subject-wise Medical Teaching Staff List - For Undergraduate Course"></Annexure>
        // </div>
    )
}