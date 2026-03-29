import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "mnfurniture",
  title: "MNFurniture.online",
  projectId: "7iiqx046",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
  basePath: "/studio",
});
