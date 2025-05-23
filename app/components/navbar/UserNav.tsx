'use client'

import { IoMenu } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { useCallback, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import MenuLinks from "./MenuLink";
import { useLoginModal } from "@/app/hooks/useLoginModal";


const UserNav = () => {
    const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen((open) => !open);

    const handleLoginModal = useCallback(() => {
        loginModal.onOpen();
    }, [])

    const label = [
        { label: "Log in", link: "/login", onclick: handleLoginModal },
        { label: "Sign up", link: "/signup" },
    ];

    return (
        <div className="p-2 relative inline-block border border-gray-200 rounded-full r">
            <button onClick={handleClick} className="flex items-center cursor-pointer">
                {isOpen ? <MdOutlineCancel size={24} /> : <IoMenu size={24} />}
                <CiUser size={24} />
            </button>

            {isOpen && (
                <div className="absolute right-0 top-10 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg">
                    <MenuLinks label={label} />
                </div>
            )}
        </div>
    );
}

export default UserNav;