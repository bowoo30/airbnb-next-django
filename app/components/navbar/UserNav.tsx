import { IoMenu } from "react-icons/io5";
import { CiUser } from "react-icons/ci";

const UserNav = () => {
    return (
        <div className="p-2 relative inline-block border border-gray-200 rounded-full">
            <button className="flex items-center">
                <IoMenu size={24} />
                <CiUser size={24}/>
            </button>
        </div>
    );
}

export default UserNav;