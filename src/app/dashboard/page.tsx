'use client'
import Header from "@/components/Header";
import { DashStats } from "./DashStats";
import { Stats } from "./stats";

export default function Dashboard() {
    return (
        <>
            <Header />
            <div className="max-w-screen-2xl mx-auto py-4">
                <Stats />
                <section className="mb-8">
                    <h1 className="text-2xl font-bold text-white">Device Status</h1>
                    <p className="text-sm text-white/50">Streamline scheduling, monitor availability, and enhance testing efficiency in a user-friendly interface.</p>
                </section>
                <DashStats />
            </div>
        </>
    )
}