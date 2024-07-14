import { type SchemaTypeDefinition } from "sanity";

import pageInfo from "./schema/schemaType/pageInfo";
import education from "./schema/schemaType/education";
import projects from "./schema/schemaType/projects";
import skills from "./schema/schemaType/skills";
import social from "./schema/schemaType/social";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, education, projects, skills, social],
};
