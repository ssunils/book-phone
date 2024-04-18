import { db } from '@/_utils/db';
import { Low } from 'lowdb';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    await db.read();
    const phones = db.data.phones; // TypeScript knows the structure of db.data
    return Response.json(phones);
}