'use client'
import axios from "axios"
import { stat } from "fs";
import { useEffect, useState } from "react"
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { plugin } from "postcss";


ChartJS.register(ArcElement, Tooltip, Legend);

export const Stats = () => {
    const [stats, setStats] = useState<Stats>();
    const [availability, setAvailability] = useState<any>();
    useEffect(() => {
        axios.get("/api/phones/stats").then((res) => {
            setStats(res.data);
            if (res.data.availability) {
                setAvailability(availabilityChart(res.data.availability));
            }
        });
    }, []);
    const availabilityChart = (stat: Availability) => {
        return {
            labels: ['Available', 'Busy',],
            datasets: [
                {
                    label: 'Availability',
                    data: [stat.available, stat.busy],
                    backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                    ],
                    borderColor: [
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1,
                },
            ]
        };
    };
    return (
        <div className="grid grid-cols-4">
            {availability && (
                <div>
                    <h2>Availability</h2>
                    <Pie data={availability} />
                </div>
            )}
        </div>
    )
}

interface Stats {
    osData: OsInfo[],
    availability: Availability,
    assignedUsers: UserInfo[];
}

interface OsInfo {
    os: string;
    count: number
}
interface Availability {
    available: number;
    busy: number
}

interface UserInfo {
    user: string;
    count: number
}