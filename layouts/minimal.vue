<template>
  <div class="body">
    <main id="main">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
  name: "Layout",
  head() {
    return {
      link: [
        {
          rel: "stylesheet",
          href:
            "https://fonts.googleapis.com/css2?family=Gotu&family=Lato:wght@100;300;400&display=swap"
        }
      ],
      title: this.config.site_title[0].text
    };
  },
  data() {
    return {
      config: {
        title: [{ type: "heading1", text: "Config 🗜", spans: [] }],
        site_title: [{ type: "heading1", text: "Claire Ciel", spans: [] }],
        nav_menu: [
          {
            menu_item_label: [{ type: "heading4", text: "Photos", spans: [] }],
            menu_item_link: {
              id: "Xz9zRBIAABMgKA3V",
              type: "photo_page",
              tags: [],
              slug: "photography",
              lang: "en-us",
              uid: "photos",
              link_type: "Document",
              isBroken: false
            }
          },
          {
            menu_item_label: [
              { type: "heading4", text: "Portfolio", spans: [] }
            ],
            menu_item_link: {
              id: "X2ecJBIAAGzBjjO2",
              type: "page",
              tags: [],
              slug: "portfolio",
              lang: "en-us",
              uid: "portfolio",
              link_type: "Document",
              isBroken: false
            }
          }
        ]
      }
    };
  }
  // async fetch() {
  //   try {
  //     this.config = (await this.$prismic.api.getSingle("config")).data;
  //   } catch (e) {
  //     error({ statsCode: 404, message: e });
  //   }
  // }
};
</script>

<style>
.body {
  border-right: 20px solid transparent;
  border-left: 20px solid transparent;
  margin-bottom: 100px;
}

main#main {
  margin-top: 50px;
}

.container {
  max-width: 700px;
  margin: auto;
}

.wide {
  max-width: 900px;
  margin: auto;
}

html {
  font-family: Lato, sans-serif;
  font-size: 16px;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
