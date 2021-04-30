export default {
  target: "static",

  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ["~/plugins/html-serializer.js", "~/plugins/link-resolver.js"],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ["@nuxtjs/prismic"],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/prismic", "@nuxt/http"],
  prismic: {
    endpoint: "https://claire.cdn.prismic.io/api/v2",
    linkResolver: "@/plugins/link-resolver",
    htmlSerializer: "@/plugins/html-serializer"
  },

  generate: {
    // routes: ["/art-portfolio"]
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {}
};
