import { NextResponse } from "next/server";
import { groq } from "next-sanity";
import { sanityClient } from "../../../../../sanity";
import { PageInfo } from "../../../../../typings";

const query = groq`
    *[_type == "pageInfo"]
`;

interface Data {
  pageinfo: PageInfo[];
}

export async function GET() {
  const pageInfo: Data = await sanityClient.fetch(query);
  return NextResponse.json({ pageInfo });
}
