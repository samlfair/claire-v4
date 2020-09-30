<template>
  <div class="photos">
    <SliceZone :slices="photoPage.data.body" />
  </div>
</template>

<script>
import SliceZone from "~/components/SliceZone";

export default {
  name: "Home",
  components: {
    SliceZone,
  },
  async asyncData({ $prismic, error }) {
    try {
      const photoPage = await $prismic.api.getSingle("photo_page");
      return { photoPage };
    } catch (e) {
      error({ statsCode: 404, message: e });
    }
  },
};
</script>

<style scoped>
.photos {
  margin-top: 40px;
}
</style>
