import { NextResponse } from "next/server";
import ContactInfo from "@/models/ContactInfo";
import { withDB } from "@/middleware/db";

export const POST = withDB(async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    const contact = await ContactInfo.create({ name, email, message });
    return NextResponse.json(
      { message: "Message sent successfully", contact },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
});

