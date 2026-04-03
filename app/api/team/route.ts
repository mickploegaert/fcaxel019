import { NextResponse } from "next/server";
import { getMatches, getPlayers, getStandings } from "@/lib/team-data";

export const revalidate = 600;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  if (type === "players") {
    return NextResponse.json(await getPlayers());
  }

  if (type === "standings") {
    return NextResponse.json(await getStandings());
  }

  return NextResponse.json(await getMatches());
}
