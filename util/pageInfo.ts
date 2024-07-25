import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { PageInfo } from "../typings";

const fetchPageInfo = async () => {
  const query = groq`
    *[_type == "pageInfo"]
`;

  const pageInfo: PageInfo[] = await sanityClient.fetch(query);

  return pageInfo;
};
export { fetchPageInfo };
