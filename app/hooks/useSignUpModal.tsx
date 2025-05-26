import { create } from "zustand"

interface SignUpModal{
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}

export const useSignUpModal = create<SignUpModal>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }), 
    onClose: () => set({ isOpen: false }), 
}))