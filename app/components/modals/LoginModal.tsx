'use client'
import { useLoginModal } from "@/app/hooks/useLoginModal";
import Modal from "./Modal";

const LoginModal = () => {
    const loginModal = useLoginModal();

    const content = (
        <h2 className="mb-6 text-2xl">Welcome to Djangobnb, please login first!</h2>
    )
    return (
        <Modal
            isOpen={loginModal.isOpen} label="Login"
            content={content}
            close={loginModal.onClose} />
    );
}

export default LoginModal;