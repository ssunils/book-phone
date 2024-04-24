
'use client'
import { getUser } from "@/_utils";
import { CiUser } from "react-icons/ci";
import { FiChevronDown } from "react-icons/fi";

export const Usermenu = () => {
    const user = getUser();
    return (
        <div className="flex items-center pl-4 text-gray-100">
            <button className="flex items-center focus:outline-none" aria-haspopup="true" aria-expanded="false">
                <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-gray-200 mr-2">
                    <CiUser size={24} className="text-gray-400" />
                </div>
                <div className="flex flex-col text-left mr-2">
                    <div className="text-sm font-semibold text-gray-100">
                        {user}
                    </div>
                    <span className="text-xs">Operator</span>
                </div>
                <FiChevronDown size={20} />
            </button>
        </div>
    );
}
