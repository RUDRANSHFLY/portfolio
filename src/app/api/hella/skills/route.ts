import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../../../sanity";
import { Skill } from "../../../../../typings";

const query = groq`
    *[_type == "skills"]
`;

interface Data {
  skills: Skill[];
}

export async function GET() {
  const skills: Data = await sanityClient.fetch(query);
  return NextResponse.json({ skills });
}
