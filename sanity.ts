import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
const config = {
  baseUrl: process.env.NEXT_PUBLIC_SANITY_BASE_URL,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2021-03-25",
  useCdn: process.env.NODE_ENV === "production",
};

const sanityClient = createClient(config);

const urlFor = (source: any) => {
  return imageUrlBuilder(sanityClient).image(source);
};

export { urlFor, sanityClient };
