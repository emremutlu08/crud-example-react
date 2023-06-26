import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const res = await fetch(
    "https://dummyjson.com/posts" + request.nextUrl.search
  );
  const data = await res.json();

  return NextResponse.json({ data });
}
