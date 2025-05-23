interface CustomButtonProps {
    label: string;
    onClick?: () => void;
    classname?: string;
}

const CustomButton = (
    { label, onClick, classname }: CustomButtonProps
) => {
    return (
        <div onClick={onClick} className={`py-4 text-center bg-[#ff385c] text-white rounded-xl cursor-pointer hover:bg-[#d50027] transition ${classname}
        ${classname}`}>
            {label}
        </div>
    );
}

export default CustomButton;