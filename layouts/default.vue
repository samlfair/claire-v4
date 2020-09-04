<template>
  <div class="container">
    <Nav :config="config" />
    <Nuxt />
  </div>
</template>

<script>
import Nav from "~/components/Nav";

export default {
  name: "Layout",
  head: {
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Gotu&family=Lato:wght@100;300;400&display=swap"
      }
    ]
  },
  data: function() {
    return {
      config: {}
    };
  },
  async fetch() {
    try {
      const config = (await this.$prismic.api.getSingle("config")).data;
      this.config = config;
    } catch (e) {
      error({ statsCode: 404, message: e });
    }
  }
};
</script>

<style>
.container {
  max-width: 700px;
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
