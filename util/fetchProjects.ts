import { groq } from "next-sanity";
import { Project } from "../typings";
import { sanityClient, sanityFetch } from "../sanity";

const fetchProjects = async () => {
  const query = groq`
    *[_type == "projects"]
`;

  const projects: Project[] = await sanityFetch({ query });

  return projects;
};
export { fetchProjects };
