import { NextRequest, NextResponse } from "next/server";

import baseApi from "@/modules/helpers/axios";

import { PostsParams } from "../../../../modules/posts/apis/types/type";

export async function PUT(
  request: NextRequest,
  { params: { id } }: PostsParams
) {
  if (Number(id) > 150) {
    return new NextResponse(null, { status: 400 });
  }

  const body = await request.json();
  const res = await baseApi.put("/posts/" + id, body);
  const data = await res.data;

  return new NextResponse(JSON.stringify(data), { status: res.status });
}

export async function DELETE(_: NextRequest, { params: { id } }: PostsParams) {
  if (Number(id) > 150) {
    return new NextResponse(null, { status: 400 });
  }

  const res = await baseApi.delete("/posts/" + id);
  const data = await res.data;

  return new NextResponse(JSON.stringify(data), { status: res.status });
}
