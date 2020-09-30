<template>
  <div class="portfolio">
    <div class="portfolio-item" v-for="item in portfolio">
      <h2>{{ $prismic.asText(item.data.title) }}</h2>
    </div>
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
      const portfolio = (
        await $prismic.api.query(
          $prismic.predicates.at("document.type", "portfolio_item")
        )
      ).results;
      return { portfolio };
    } catch (e) {
      error({ statsCode: 404, message: e });
    }
  }
};
</script>

<style scoped>
.portfolio {
  margin-top: 40px;
}

.portfolio-item {
  border: 1px solid lightgrey;
  margin-bottom: 30px;
  padding-bottom: 30px;
}
</style>
