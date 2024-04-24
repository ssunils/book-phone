'use client'

export const getUser = () => {
    return sessionStorage.getItem('user');
}