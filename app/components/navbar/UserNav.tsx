'use client'

import { IoMenu } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { useCallback, useState } from "react";
import { MdOutlineCancel } from "react-icons/md";
import MenuLinks from "./MenuLink";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { useSignUpModal } from "@/app/hooks/useSignUpModal";


const UserNav = () => {
    const loginModal = useLoginModal();
    const signModal = useSignUpModal();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen((open) => !open);

    const handleLoginModal = useCallback(() => {
        setIsOpen(false);
        loginModal.onOpen();
    }, [])

    const handleSignUpModal = useCallback(() => {
        setIsOpen(false);
        signModal.onOpen();
    }, [])

    return (
        <div className="p-2 relative inline-block border border-gray-200 rounded-full r">
            <button onClick={handleClick} className="flex items-center cursor-pointer">
                {isOpen ? <MdOutlineCancel size={24} /> : <IoMenu size={24} />}
                <CiUser size={24} />
            </button>

            {isOpen &&
                (
                    <div className="absolute right-0 top-10 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg">
                        <MenuLinks label={"Login"} onClick={handleLoginModal} />
                        <MenuLinks label={"Sign Up"} onClick={handleSignUpModal} />
                    </div>
                )}
        </div>
    );
}

export default UserNav;