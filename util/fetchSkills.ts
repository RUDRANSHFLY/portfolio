import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { Skill } from "../typings";

const fetchSkills = async () => {
  const query = groq`
  *[_type == "skills"]
`;

  const skills: Skill[] = await sanityClient.fetch(query);

  return skills;
};
export { fetchSkills };
