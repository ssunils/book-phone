'use client'
import Header from "@/components/Header";
import { DashStats } from "./DashStats";

export default function Dashboard() {
    return (
        <>
            <Header />
            <div className="max-w-screen-2xl mx-auto py-4">
                <section className="mb-8">
                    <h1 className="text-2xl font-bold text-white">Device Dashboard</h1>
                    <p className="text-sm text-white/50">Streamline scheduling, monitor availability, and enhance testing efficiency in a user-friendly interface.</p>
                </section>
                <DashStats />
            </div>
        </>
    )
}