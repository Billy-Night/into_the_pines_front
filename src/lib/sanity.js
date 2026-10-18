import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "vx8xkgps",
  dataset: "production",
  apiVersion: "2026-03-01",
  useCdn: false,
});
