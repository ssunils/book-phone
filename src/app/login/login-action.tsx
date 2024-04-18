"use client"
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
        <form className="mt-6" onSubmit={submitForm}>
            <div>
                <label className="block text-gray-700">User Account</label>
                <select name="" onChange={selectUser} className="w-full px-4 py-3 rounded-lg text-gray-800 mt-2 border focus:border-blue-500  focus:outline-none">
                    <option value={''}>-</option>
                    <option value={'Andrew'}>Andrew</option>
                    <option value={'Matthew'}>Matthew</option>
                    <option value={'Zues'}>Zues</option>
                </select>
            </div>
            <p className="text-sm text-red-600">{formErrorMessage}</p>
            <button type="submit" className="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6">Log In</button>
        </form>
    )
}