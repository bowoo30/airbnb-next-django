const ReservationSidebar = () => {
    return (
        <aside className="border border-gray-200 mt-6  p-6 col-span-2 rounded-xl shadow-xl">
            <h2 className="mb-5 text-2xl">$200 per night</h2>
            <div className="mb-6 p-3 border border-gray-400 rounded-xl">
                <label htmlFor="" className="mb-2 block font-bold text-xs">Guests</label>
                <select name="type" id="" className="w-full -ml-1 text-xs">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>
            <div className="w-full mb-6 py-6 text-center text-white bg-[#ff385c] hover:bg-[#d50027] transition-colors duration-300 rounded-xl  cursor-pointer">
                Book
            </div>
            <div className="mb-4 flex justify-between justify-items-center">
                <p>$200 * 4 nights</p>
                <p>$800</p>
            </div>
            <div className="mb-4 flex justify-between justify-items-center">
                <p>Djangobnb fee</p>
                <p>$40</p>
            </div>
            <hr className="hr"/>
            <div className="mt-4 flex justify-between items-center font-bold">
                <p>Total</p>
                <p>$840</p>
            </div>
        </aside>
    );
}

export default ReservationSidebar;