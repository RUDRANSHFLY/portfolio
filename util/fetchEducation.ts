import { groq } from "next-sanity";
import { Education } from "../typings";
import { sanityFetch } from "../sanity";

const fetchEducation = async () => {
  const query = groq`
  *[_type == "education"]
`;

  const education: Education[] = await sanityFetch({ query });

  return education;
};
export { fetchEducation };
