import { NextResponse } from "next/server";
import handleEmail from "./helpers";

export async function POST(req) {
  try {
    const success = await handleEmail(req);

    if (success) {
      return NextResponse.json({ message: "yippie" });
    } else {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 400 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
