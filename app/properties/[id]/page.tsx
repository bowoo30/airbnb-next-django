import ReservationSidebar from "@/app/components/properties/ReservaitonSidebar";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'Properties',
    description: 'Halaman Properties',

}

const PropertyDetailPage = () => {
    return (
        <main className="max-w-[1500px] mx-auto my-6 px-6">
            <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
                <Image
                    fill
                    src="/beach.jpg"
                    alt="Beach house"
                    className="object-cover"
                />
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className="py-6 pr-6 col-span-3">
                    <h1 className="mb-4 text-4xl">Property name</h1>
                    <span className="mb-6 block text-lg text-gray-600">
                        4 guests - 2 bedrooms - 2 beds - 2 bathrooms</span>
                    <hr className="hr" />
                    <div className="py-6 flex space-x-4 items-center">
                        <Image
                            src="/profile_pic.jpg"
                            alt="profile pic"
                            className="object-cover rounded-full"
                            width={50} height={50}
                        />
                        <p>Syamsul Wibowo</p>
                    </div>
                    <hr className="hr" />
                    <p className="mt-4 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in hic harum quod libero placeat dolorum quaerat, eum fugit possimus exercitationem eveniet quisquam ratione laboriosam consectetur consequatur perferendis ipsam sunt?</p>
                </div>
                <ReservationSidebar />
            </div>
        </main>

    );
}

export default PropertyDetailPage;