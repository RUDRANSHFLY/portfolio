import { groq } from "next-sanity";
import { sanityClient, sanityFetch } from "../sanity";
import { PageInfo } from "../typings";

const fetchPageInfo = async () => {
  const query = groq`
    *[_type == "pageInfo"]
`;

  const pageInfo: PageInfo[] = await sanityFetch({ query });

  return pageInfo;
};
export { fetchPageInfo };
