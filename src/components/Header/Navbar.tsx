export const Navbar = () => {
    return (
        <nav className="bg-transparent">
            <ul className="flex items-center justify-between p-4 gap-8 text-sm">
                <li>
                    <a href="#" className=" text-gray-600 hover:text-gray-800">Dashboard</a>
                </li>
                <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">Book a device</a>
                </li>
                <li>
                    <a href="#" className="text-gray-600 hover:text-gray-800">History</a>
                </li>
            </ul>
        </nav>

    )
}