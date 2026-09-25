import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "newmaster-studio",
  title: "NewMaster Content Studio",
  projectId: "oqdatg5j",
  dataset: "production",
  basePath: "/",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
