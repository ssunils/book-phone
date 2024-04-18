import { IoIosNotifications } from "react-icons/io"

export const Notification = () => {
    return (
        <div className="flex items-center h-[40px] w-[40px] justify-center">
            <button className="relative">
                <IoIosNotifications size={24} className="text-gray-600" />
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
        </div>
    )
}