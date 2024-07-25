import { groq } from "next-sanity";
import { Education } from "../typings";
import { sanityClient } from "../sanity";

const fetchEducation = async () => {
  const query = groq`
  *[_type == "education"]
`;

  const education: Education[] = await sanityClient.fetch(query);

  return education;
};
export { fetchEducation };
