<template>
  <div class="body">
    <Nav :config="config" />
    <main id="main">
      <Nuxt />
    </main>
    <Footer />
  </div>
</template>

<script>
import Nav from "~/components/Nav";
import Footer from "~/components/Footer";

export default {
  name: "Layout",
  components: {
    Nav,
    Footer
  },
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
