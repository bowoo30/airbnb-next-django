'use client'

import { useSignUpModal } from "@/app/hooks/useSignUpModal";
import Modal from "./Modal";
import CustomButton from "../forms/Custombutton";

const SignUpModal = () => {
    const SignUpModal = useSignUpModal();

    const content = (
        <>
            {/* <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please login first!</h2> */}
            <form action="" className="space-y-2">
                <input type="email" placeholder="Your email address"
                    className="w-full  px-4 h-[54px] border border-gray-100 rounded-xl" />
                <input type="text" placeholder="Your email password"
                    className="w-full px-4 h-[54px] border border-gray-100 rounded-xl" />
                <div className="p-5 bg-[#ff385c] text-white rounded-xl opacity-80">
                    The error message
                </div>

                <CustomButton label="Submit" classname="w-full" onClick={() => console.log('clicked')} />
            </form>
        </>
    )

    return (
        <Modal
            isOpen={SignUpModal.isOpen}
            label="Sign Up"
            close={SignUpModal.onClose}
            content={content}
        />
    );
}

export default SignUpModal;