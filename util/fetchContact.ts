import { Social } from "../typings";
import { sanityClient } from "../sanity";
import { groq } from "next-sanity";

const fetchSocials = async () => {
  const query = groq`
    *[_type == "social"]
`;

  const socials: Social[] = await sanityClient.fetch(query);

  return socials;
};

export { fetchSocials };
