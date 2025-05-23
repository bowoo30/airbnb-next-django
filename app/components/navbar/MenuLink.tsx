'use client';
interface MenuLinkProps {
    label: Array<{
        label: string,
        link: string,
        onclick?: () => void
    }>;
}

const MenuLinks = (
    { label }: MenuLinkProps
) => {
    return (
        <>
            {label.map((label, index) => (
                <div key={index} onClick={label.onclick} className="cursor-pointer block px-4 py-2 hover:bg-gray-100 rounded-xl transition">
                    {label.label}</div>
            ))
            }
        </>
    );
}

export default MenuLinks;