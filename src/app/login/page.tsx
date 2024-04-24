"use client"
import Image from "next/image";
import LoginAction from "./login-action";

// export const metadata = {
//     title: "Login Page",
//     description: "Login to your application",
// };

export default function Login() {
    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="w-full h-100">
                    <div>
                        <Image src='/img/logo.svg' alt="" height={250} width={250} className="mx-auto mb-24" />
                    </div>
                    <LoginAction />
                    <hr className="my-6 border-gray-300 w-full" />
                    <p className="text-gray-400 text-center text-sm">
                        Select the desired user to start booking the device. Remember to unassign the devices once the test is completed.
                    </p>
                    <p className="text-sm text-gray-500 mt-12 text-center">&copy; 2024 Device Deck - All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
}
