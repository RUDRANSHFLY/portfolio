import { Project } from "../typings";

const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SANITY_BASE_URL}/api/hella/projects`
  );

  const data = await res.json();

  const projects: Project[] = data.projects;

  return projects;
};
export { fetchProjects };
