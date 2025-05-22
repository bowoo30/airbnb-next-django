import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: 'My Reservation',
    description: 'Reservation page',

}


const MyReservation = () => {
    return (
        <main className="max-w-[1500] mx-auto px-6 pb-6">
            <h1 className="my-6 mb-2 text-2xl">
                My Reservations
            </h1>

            <div className="space-y-4">
                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300
            rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image fill src={'/beach.jpg'} alt="property" sizes="(max-width: 768px) 768px, (max-width: 1200px) 768px, 768px"
                                className="hover:scale-110 obeject-cover transition duration-300 h-full w-full" />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <h2 className="mb-4 text-xl">Property name</h2>
                        <p className="mb-2"><strong>Check in date:</strong> 14/02/2024</p>
                        <p className="mb-2"><strong>Check out date:</strong> 14/02/2024</p>
                        <p className="mb-2"><strong>Number of nights:</strong> 2</p>
                        <p className="mb-2"><strong>Total price:</strong> $200</p>

                        <div className="inline-block cursor-pointer py-4 px-6 bg-[#ff385c] text-white rounded-xl">
                            Go to property
                        </div>
                    </div>
                </div>
                <div className="p-5 mt-4 grid grid-cols-1 md:grid-cols-4 gap-4 shadow-md border border-gray-300
            rounded-xl">
                    <div className="col-span-1">
                        <div className="relative overflow-hidden aspect-square rounded-xl">
                            <Image fill src={'/beach.jpg'} alt="property" sizes="(max-width: 768px) 768px, (max-width: 1200px) 768px, 768px"
                                className="hover:scale-110 obeject-cover transition duration-300 h-full w-full" />
                        </div>
                    </div>
                    <div className="col-span-3">
                        <h2 className="mb-4 text-xl">Property name</h2>
                        <p className="mb-2"><strong>Check in date:</strong> 14/02/2024</p>
                        <p className="mb-2"><strong>Check out date:</strong> 14/02/2024</p>
                        <p className="mb-2"><strong>Number of nights:</strong> 2</p>
                        <p className="mb-2"><strong>Total price:</strong> $200</p>

                        <div className="inline-block cursor-pointer py-4 px-6 bg-[#ff385c] text-white rounded-xl">
                            Go to property
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}

export default MyReservation;