import { groq } from "next-sanity";
import { Project } from "../typings";
import { sanityClient } from "../sanity";

const fetchProjects = async () => {
  const query = groq`
    *[_type == "projects"]
`;

  interface Data {
    projects: Project[];
  }

  const projects: Data = await sanityClient.fetch(query);

  return projects;
};
export { fetchProjects };
