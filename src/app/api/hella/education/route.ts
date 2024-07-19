import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../../../sanity";
import { Education, Social } from "../../../../../typings";

const query = groq`
    *[_type == "education"]
`;

interface Data {
  education: Education[];
}

export async function GET() {
  const education: Data = await sanityClient.fetch(query);
  return NextResponse.json({ education });
}
