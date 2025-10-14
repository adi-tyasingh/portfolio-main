// app/api/codolio/route.ts (Next.js 13+)
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.codolio.com/profile?userKey=SinghAditya");
    
    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Coding data:", error);
    return NextResponse.json(
      { error: "Failed to fetch Coding data" },
      { status: 500 }
    );
  }
}

