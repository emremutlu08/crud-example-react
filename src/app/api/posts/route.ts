import { NextRequest, NextResponse } from "next/server";

import baseApi from "@/modules/helpers/axios";

export async function GET(request: NextRequest) {
  const res = await baseApi.get("/posts" + request.nextUrl.search);
  const data = await res.data;

  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const res = await baseApi.post("/posts", request.body);
  const data = await res.data;

  return NextResponse.json(data);
}
