import { groq } from "next-sanity";
import { sanityFetch } from "../sanity";
import { Skill } from "../typings";

const fetchSkills = async () => {
  const query = groq`
  *[_type == "skills"]
`;

  const skills: Skill[] = await sanityFetch({ query });

  return skills;
};
export { fetchSkills };
