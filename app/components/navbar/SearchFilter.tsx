'use client'
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchFilter = () => {
    const [hoverA, setHoverA] = useState(false);
    const [hoverB, setHoverB] = useState(false);
    const [hoverC, setHoverC] = useState(false);
    const [hoverD, setHoverD] = useState(false);


    return (
        <div className="h-[48px] lg:h-[64] flex flex-row items-center justify-between border border-gray-200 rounded-full">
            <div className="hidden xl:block">
                <div className="flex items-center justify-between">
                    <div onMouseEnter={() => setHoverA(true)} onMouseLeave={() => setHoverA(false)}
                        className="relative cursor-pointer w-[250px] h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 transition-all duration-300">
                        <p className="text-xs font-semibold">Where</p>
                        <p className="text-sm">Wanted location</p>
                        <div className={`absolute right-0 ${hoverA || hoverB ? 'bg-transparent' : 'bg-gray-200'} w-px h-8 `}>
                        </div>
                    </div>
                    <div onMouseEnter={() => setHoverB(true)} onMouseLeave={() => setHoverB(false)}
                        className="relative cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 transition-all duration-300">
                        <p className="text-xs font-semibold">Check in</p>
                        <p className="text-sm">Add dates</p>
                        <div className={`absolute right-0 ${hoverB || hoverC ? 'bg-transparent' : 'bg-gray-200'} w-px h-8`}>
                        </div>
                    </div>
                    <div onMouseEnter={() => setHoverC(true)} onMouseLeave={() => setHoverC(false)}
                        className="relative cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 transition-all duration-300">
                        <p className="text-xs font-semibold">Check out</p>
                        <p className="text-sm">Add dates</p>
                        <div className={`absolute right-0 ${hoverC || hoverD ? 'bg-transparent' : 'bg-gray-200'} w-px h-8`}>
                        </div>
                    </div>
                    <div onMouseEnter={() => setHoverD(true)} onMouseLeave={() => setHoverD(false)}
                        className="cursor-pointer h-[48px] lg:h-[64] px-8 flex flex-col justify-center rounded-full hover:bg-gray-100 transition-all duration-300">
                        <p className="text-xs font-semibold">Who</p>
                        <p className="text-sm">Add guests</p>
                    </div>
                </div>
            </div>

            <div className="p-1 xl:p-2">
                <div className="cursor-pointer p-2 lg:p-2 transition rounded-full text-white bg-[#ff385c] hover:bg-[#d50027]">
                    <CiSearch size={24} className="" />
                </div>
            </div>
        </div>
    );
}

export default SearchFilter;