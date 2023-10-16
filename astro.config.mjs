import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify/functions";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [sitemap(), react()],
  vite: {
    define: {
      "import.meta.env.SECRET_EMAIL_USERNAME": JSON.stringify(process.env.SECRET_EMAIL_USERNAME),
      "import.meta.env.SECRET_EMAIL_PASS": JSON.stringify(process.env.SECRET_EMAIL_PASS)
    }
  },
  output: "server",
  adapter: netlify()
});
