import Image from "next/image";

const PropertyItem = () => {
    return (
        <div className="cursor-pointer">
            <div className="relative overflow-hidden aspect-square rounded-xl">
                <Image fill src={'/beach.jpg'} alt="property" sizes="(max-width: 768px) 768px, (max-width: 1200px) 768px, 768px"
                    className="hover:scale-110 obeject-cover transition duration-300 h-full w-full" />
            </div>

            <div className="mt-2">
                <p className="font-bold text-lg">
                    Property Name
                </p>
            </div>
            <div className="mt-2">
                <p className="text-sm text-gray-500">$400 per night</p>
            </div>
        </div>
    );
}

export default PropertyItem;