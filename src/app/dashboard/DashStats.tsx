import { PhoneCard } from "./phoneCard"
import { Stats } from "./stats"


export const DashStats = () => {
    return (
        <>
            <div className="grid-cols-4 grid gap-6">
                <PhoneCard />
            </div>
        </>
    )
}