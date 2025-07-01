import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    return NextResponse.json(
      { message: "Database connected successfully" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to connect to database" },
      { status: 500 }
    );
  }
}

