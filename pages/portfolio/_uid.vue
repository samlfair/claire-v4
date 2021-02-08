<template>
  <div>
    <SliceZone :slices="portfolioItem.data.body" />
  </div>
</template>

<script>
import SliceZone from "~/components/SliceZone";

export default {
  name: "PortfolioItem",
  components: {
    SliceZone
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const portfolioItem = await $prismic.api.getByUID(
        "portfolio_item",
        params.uid
      );
      return { portfolioItem };
    } catch (e) {
      error({ statsCode: 404, message: e });
    }
  }
};
</script>
