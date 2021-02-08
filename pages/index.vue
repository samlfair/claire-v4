<template>
  <div class="home">
    <SliceZone :slices="home.body" />
  </div>
</template>

<script>
import SliceZone from "~/components/SliceZone";
import minimalVue from "../layouts/minimal.vue";

export default {
  name: "Home",
  components: {
    SliceZone
  },
  layout: "minimal",
  async asyncData({ $prismic, error }) {
    try {
      const home = (await $prismic.api.getByUID("page", "temporary")).data;
      return { home };
    } catch (e) {
      error({ statsCode: 404, message: e });
    }
  }
};
</script>

<style scoped></style>
