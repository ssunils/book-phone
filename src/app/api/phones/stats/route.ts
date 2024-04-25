import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
    const osData = [
        {
            os: "Android",
            count: 10
        }, {
            os: "iOS",
            count: 20
        }
    ];
    const availability = {
        available: 10,
        busy: 20
    }
    const assignedUsers = [
        {
            user: "Andrew",
            count: 10
        }, 
        {
            user: "John",
            count: 5
        }, 
        {
            user: "Matt",
            count: 5
        }
    ]
    return Response.json({
        osData,
        availability,
        assignedUsers
    });
}