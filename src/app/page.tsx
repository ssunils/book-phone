"use client"
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const user = window.sessionStorage.getItem('user');
    console.log(user);
    if(user === null) {
      redirect('/login')
    } else {
      redirect('/dashboard')
    }
  }, []);
  return;
}
