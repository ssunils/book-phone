"use client"
import { Button } from "@/components/base-elements/Buttons";
import { Select } from "@/components/base-elements/Select";
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

export default function LoginAction() {
    const router = useRouter();
    const [selectedUser, setSelectedUser] = useState('')
    const [formErrorMessage, setFormErrorMessage] = useState('')
    const selectUser = (ev: ChangeEvent<HTMLSelectElement>) => {
        setFormErrorMessage('')
        if (ev.target) {
            console.log(ev.target.value)
            setSelectedUser(ev.target.value);
        }
    }
    const submitForm = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        setFormErrorMessage('');
        if (selectedUser === '') {
            setFormErrorMessage('Please select a user')
        } else {
            window.sessionStorage.setItem('user', selectedUser);
            router.push('/');
        }
    }
    return (
        <form className="mt-6 flex flex-col" onSubmit={submitForm}>
            <label className="block text-white">User Account</label>
            <Select onChange={selectUser} className="">
                <option value={''}>-</option>
                <option value={'Andrew'}>Andrew</option>
                <option value={'Matthew'}>Matthew</option>
                <option value={'Zues'}>Zues</option>
            </Select>
            <p className="text-sm text-red-600">{formErrorMessage}</p>
            <Button className="mt-4">Login</Button>

        </form>
    )
}