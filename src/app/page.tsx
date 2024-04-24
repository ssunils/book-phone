"use client"
import { getUser } from "@/_utils";
import { useThemeContext } from "@/context/app-wrapper";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const user = getUser();

  useEffect(() => {
    console.log(user);
    if(!user) {
      redirect('/login')
    } else {
      redirect('/dashboard')
    }
  }, [user]);
  return;
}
