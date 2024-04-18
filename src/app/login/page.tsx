import Image from "next/image";
import { ChangeEvent } from "react";
import LoginAction from "./login-action";

export const metadata = {
    title: "Login Page",
    description: "Login to your application",
};

export default function Login() {
    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div className="bg-gray-900 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <Image src="/login-banner.jpg" width='3000' height={'2000'} alt="" className="w-full h-full object-cover bg-blend-overlay opacity-50" />
            </div>
            <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center">
                <div className="w-full h-100">
                    <div>
                        <Image src='/logo.svg' alt="" height={250} width={250} className="mx-auto" />
                    </div>
                    <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Log in to your account</h1>
                    <LoginAction />
                    <hr className="my-6 border-gray-300 w-full" />
                    <p className="text-gray-400 text-center text-sm">
                        Select the desired user to start booking the device. Remember to unassign the devices once the test is completed.
                    </p>
                    <p className="text-sm text-gray-500 mt-12 text-center">&copy; 2023 Device Deck - All Rights Reserved.</p>
                </div>
            </div>
        </section>
    );
}
