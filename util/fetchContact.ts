import { Social } from "../typings";
import { sanityClient, sanityFetch } from "../sanity";
import { groq } from "next-sanity";

const fetchSocials = async () => {
  const query = groq`
    *[_type == "social"]
`;

  const socials: Social[] = await sanityFetch({ query });

  return socials;
};

export { fetchSocials };
