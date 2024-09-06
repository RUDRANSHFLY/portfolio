import { createClient, type QueryParams } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
const config = {
  baseUrl: process.env.NEXT_PUBLIC_SANITY_BASE_URL,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2021-03-25",
  useCdn: true,
};

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 5, // default revalidation time in seconds
  tags = [],
}: {
  query: string;
  params?: QueryParams;
  revalidate?: number | false;
  tags?: string[];
}) {
  return sanityClient.fetch<QueryResponse>(query, params, {
    next: {
      revalidate: tags.length ? false : revalidate, // for simple, time-based revalidation
      tags, // for tag-based revalidation
    },
  });
}

const sanityClient = createClient(config);

const urlFor = (source: any) => {
  return imageUrlBuilder(sanityClient).image(source);
};

export { urlFor, sanityClient };
