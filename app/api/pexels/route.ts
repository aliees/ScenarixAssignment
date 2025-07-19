import { createClient } from "pexels";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const client = createClient(process.env.PEXELS_API_KEY || "");
  const query = "ai generated art";

  try {
    const response = await client.photos.search({ query, per_page: 80 });
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch photos" },
      { status: 500 }
    );
  }
}