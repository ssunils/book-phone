import { db } from '@/_utils/db';
import { Low } from 'lowdb';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    if(req.method === 'POST') {
        const body = await req.json();
        const phoneId = body.id;
        await db.read();
        const phones = db.data.phones;
        const phone = phones.find(phone => phone.id === phoneId);
        if(phone) {
            phone.available = !body.available;
            phone.booking_info = body.available ? null :{
                user: body.user,
                date: new Date().toISOString()
            }
            await db.write();
            return Response.json(phone);
        }
    }
    return Response.error();
}