'use client'

import { redirect } from 'next/navigation';
import { createContext, useContext, useEffect, useState } from 'react'

interface AppData {
    user: string | null;
}

export const ThemeContext = createContext<AppData>({
    user: null
})

export default function AppWrapper({
    children,
}: {
    children: React.ReactNode
}) {

    let [state, setState] = useState({
        user: sessionStorage.getItem('user')
    })
    // useEffect(() => {
    //     const user = sessionStorage.getItem('user');
    //     if (user === null) {
    //         redirect('/')
    //     }
    // }, [])
    return <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
}

export function useThemeContext() {
    return useContext(ThemeContext)
}