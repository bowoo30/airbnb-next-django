'use client';

import { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

interface ModalProps {
    label: string;
    content: React.ReactElement;
    isOpen?: boolean,
    close?: () => void
}

const Modal = (
    { label, content, isOpen, close }: ModalProps
) => {

    const [showModal, setShowModal] = useState(isOpen);

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    // console.log(showModal);


    const handleClose = () => {
        setShowModal(false);

        setTimeout(() => {
            close?.();
        }, 300);
    }


    if (!isOpen) {
        return null;
    }

    return (
        <>
            <div className="flex items-center justify-center fixed inset-0 z-40 bg-black/60">
                <div className="realative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto h-auto">
                    <div className={`translate duration-600 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                        <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
                            <header onClick={handleClose}
                                className="h-[60px] flex items-center p-6 rounded-t justify-center relative
                        border-b">
                                <div onClick={() => setShowModal(false)}
                                    className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer">
                                    <FaXmark size={25} className="text-gray-600" />
                                </div>

                                <h2 className="text-lg font-semibold tracking-wider">{label}</h2>
                            </header>

                            <section className="p-6">
                                {content}
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;