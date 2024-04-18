"use client"
import axios from "axios"
import Image from "next/image"
import { useEffect, useState } from "react"
import { FaEllipsisVertical } from "react-icons/fa6"
import { Status } from "./status"
import { Phone } from "@/_utils/types"
import { Button } from "@/components/Buttons"

export const PhoneCard = () => {
    const [phones, setPhones] = useState<Phone[]>([])
    useEffect(() => {
        axios.get("/api/phones").then((res) => {
            setPhones(res.data);
        });
    }, [])
    const bookPhone = (id: number, available: boolean) => {
    axios.post("/api/phones/booking", { id, user: "Andrew", available }).then((res) => {
        setPhones((prev) => {
            return prev.map((phone) => {
                if (phone.id === id) {
                    return res.data;
                }
                return phone;
            });
        });
    });
    }
    return (
        <>
            {phones && phones.map((phone) => (
                <div className={`shadow-lg ${phone.available ? 'bg-white' : 'bg-slate-500'} rounded-xl grid grid-row-2`}>
                    <div className={`flex items-center justify-center rounded-ss-lg rounded-se-lg bg-gray-${phone.available ? '400' : '300'} p-6 relative`}>
                        <Status available={phone.available} />

                        <button className="more-menu absolute top-2 right-2 inline-flex items-center rounded-md px-2 py-1 text-lg font-medium text-white hover:text-gray-200">
                            <FaEllipsisVertical />
                        </button>
                        <Image src={"/devices/Samsung-Galaxy-A55.jpg"} className={`rounded-xl ${phone.available ? '' : 'opacity-50'}`} width={150} height={150} alt="Samsung Galaxy A55" />
                    </div>
                    <div className="p-6">
                        <div className={`${phone.available ? 'text-black' : 'text-white'}`}>
                            <h5 className="mb-2 text-xl font-semibold tracking-tight ">{phone.model}</h5>
                            <p><strong>Brand:</strong> {phone.brand}</p>
                            <p><strong>OS Version:</strong> {phone.os_version}</p>
                        </div>
                        <div className="flex justify-end">
                            <Button onClick={() => {bookPhone(phone.id, phone.available)}} variant={phone.available ? 'primary' : 'secondary'}>
                               {phone.available ? 'Book Now' : 'Release'}
                            </Button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}