//! This is if there is no Sanity integration and you want to use the Sanity client directly in your Astro project
// import { createClient } from "@sanity/client";
// import { defineConfig } from "astro/config";
// // https://astro.build/config
// import tailwindcss from "@tailwindcss/vite";

// export const sanityClient = createClient({
//   projectId: "vx8xkgps",
//   dataset: "production",
//   apiVersion: "2026-03-01",
//   useCdn: false, // for static builds
// });

// export default defineConfig({
//   vite: {
//     plugins: [tailwindcss()],
//   },
// });

//! IF there is Sanity integration, you can use the following config instead:
// import { defineConfig } from "astro/config";
// import sanity from "@sanity/astro";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   integrations: [
//     sanity({
//       projectId: "vx8xkgps",
//       dataset: "production",
//       apiVersion: "2026-03-01",
//       useCdn: false,
//     }),
//   ],
//   vite: {
//     plugins: [tailwindcss()],
//   },
// });

//! This a simple configuration for Astro with TailwindCSS and no Sanity integration. You can use this if you want to use the Sanity client directly in your Astro project.
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
