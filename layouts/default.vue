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
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
