import { PhoneCard } from "./phoneCard"


export const DashStats = () => {
    return (
        <div className="max-w-screen-2xl mx-auto py-4">
            <div className="grid-cols-4 grid gap-6">
                <PhoneCard />
            </div>
        </div>
    )
}