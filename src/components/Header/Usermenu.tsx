import { CiUser } from "react-icons/ci"
import { FiChevronDown } from "react-icons/fi"

export const Usermenu = () => {
    return (
        <div className="flex items-center pl-4">
            <button className="flex items-center">
                <div>
                    <div className="w-[40px] h-[40px] rounded-full flex items-center justify-center align-middle bg-gray-200 mr-2">
                        <CiUser size={24} className="text-gray-400" />
                    </div>
                </div>
                <div className="flex flex-col text-left mr-2">
                    <div className="text-sm font-semibold">Andrew</div>
                    <span className="text-xs">Operator</span>
                </div>
                <div>
                    <FiChevronDown />
                </div>
            </button>
        </div>
    )
}