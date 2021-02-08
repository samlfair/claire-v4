<template>
  <div>
    <SliceZone :slices="page.data.body" />
  </div>
</template>

<script>
import SliceZone from "~/components/SliceZone";

export default {
  name: "Page",
  components: {
    SliceZone
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const page = await $prismic.api.getByUID("page", params.uid);
      return { page };
    } catch (e) {
      error({ statsCode: 404, message: e });
    }
  }
};
</script>
