<template>
  <div class="home">
    <SliceZone :slices="home.body" />
  </div>
</template>

<script>
import SliceZone from "~/components/SliceZone";

export default {
  name: "Home",
  components: {
    SliceZone
  },
  async asyncData({ $prismic, error }) {
    try {
      const home = (await $prismic.api.getByUID("page", "home")).data;
      return { home };
    } catch (e) {
      error({ statsCode: 404, message: e });
    }
  }
};
</script>

<style scoped></style>
