import Image from "next/image";
import Link from "next/link";
import { IoIosSearch } from "react-icons/io";
import { Notification } from "./Notification";
import { Usermenu } from "./Usermenu";
import { Navbar } from "./Navbar";
import './header.css'

const Header = () => {
    return (
        <header className="header">
            <div className=" text-gray-900 flex items-center divide-x divide-gray-600">
                <Link className="block flex-shrink-0 mx-2" href="/">
                    <Image
                        width={100}
                        height={100}
                        src={"/img/logo.svg"}
                        alt="Logo"
                    />
                </Link>
                <form action="#" method="POST" className="ml-5 pl-4">
                    <div className="relative">
                        <button className="absolute left-0 top-1/2 -translate-y-1/2">
                            <IoIosSearch size={20} className="text-gray-600" />
                        </button>
                        <input
                            type="text"
                            placeholder="Type to search..."
                            className="w-full bg-transparent pl-6 pr-4 focus:outline-none xl:w-125"
                        />
                    </div>
                </form>

                <div className="items-end ml-auto ">
                    <Navbar />
                </div>
                <div className="px-2">
                    <Notification />
                </div>
                <div className="px-2">
                    <Usermenu />
                </div>
            </div>
        </header>
    )
}
export default Header;