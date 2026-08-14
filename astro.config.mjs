import { defineConfig } from "astro/config";
import { i18n, filterSitemapByDefaultLocale } from "astro-i18n-aut/integration";
import sitemap from "@astrojs/sitemap";

import tailwindcss from "@tailwindcss/vite";

const locales = {
  en: "en-US",
  de: "de-DE",
};
const defaultLocale = "en";

// https://astro.build/config
export default defineConfig({
  site: "https://rpreichl.com/",
  trailingSlash: "always",
  integrations: [
    i18n({
      locales,
      defaultLocale
    }),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: filterSitemapByDefaultLocale({ defaultLocale }),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
