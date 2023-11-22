import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url = `https://api.github.com/users/markuswiland`;
    const response = await fetch(url);
    const data = await response.json();

    return NextResponse.json({ data });
  } catch (err) {
    console.error(err);
    return new Response(`Something went wrong: ${err}`, { status: 200 });
  }
}
