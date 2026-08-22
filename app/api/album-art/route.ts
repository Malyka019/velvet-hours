import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ error: "Missing track ID" }, { status: 400 });
  }

  try {
    const res = await fetch(`https://open.spotify.com/oembed?url=https://open.spotify.com/track/${id}`);
    if (!res.ok) {
      throw new Error(`Failed to fetch oEmbed: ${res.status}`);
    }
    const data = await res.json();
    return NextResponse.json({ 
      thumbnail: data.thumbnail_url, 
      title: data.title 
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
