import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  integrations: [sitemap()],
  vite: {
    define: {
      "import.meta.env.SECRET_EMAIL_USERNAME": JSON.stringify(process.env.SECRET_EMAIL_USERNAME),
      "import.meta.env.SECRET_EMAIL_PASS": JSON.stringify(process.env.SECRET_EMAIL_PASS),
    },
  },
});
