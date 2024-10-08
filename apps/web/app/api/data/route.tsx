import { sql } from '@vercel/postgres';
import { NextResponse } from "next/server";


export async function GET(req: Request) {
  try {
  const { rows } = await sql`SELECT * from CARTS`;
  return NextResponse.json({ projects: rows }, { status: 200 });
  }
  catch (error) {
    console.error("Database query failed:", (error as Error).message);
    return NextResponse.json({ error: "Failed to fetch CARTS" }, { status: 500 });
  }
}