'use client'

import { TbBeach } from "react-icons/tb";
import { MdOutlineVilla } from "react-icons/md";
import { MdCabin } from "react-icons/md";
import { LuHouse } from "react-icons/lu";

const Categories = () => {
    return (
        <div className="pt-10 cusror-pointer pb-2 flex items-center justify-start space-x-12">
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 transition-all duration-300">
                <TbBeach size={24} />
                <p>Beach</p>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 transition-all duration-300">
                <MdOutlineVilla size={24} />
                <p>Villas</p>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 transition-all duration-300">
                <MdCabin size={24} />
                <p>Cabins</p>
            </div>
            <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:opacity-100 transition-all duration-300">
                <LuHouse size={24} />
                <p>Tiny houses</p>
            </div>
        </div>
    );
}

export default Categories;