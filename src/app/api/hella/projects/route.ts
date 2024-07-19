import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../../../sanity";
import { Project } from "../../../../../typings";

const query = groq`
    *[_type == "projects"]
`;

interface Data {
  projects: Project[];
}

export async function GET() {
  const projects: Data = await sanityClient.fetch(query);
  return NextResponse.json({ projects });
}
