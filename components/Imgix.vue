<template>
  <div ref="image">
    <img :style="{ width: '100%' }" :src="root + `?w=` + width" alt="" />
    <!-- <nuxt-blur-image
      v-if="blur && width"
      :width="width"
      :height="(width * image.dimensions.height) / image.dimensions.width"
      :hash="blur"
      :alt="image.alt"
      :src="root + `?w=` + width"
    /> -->
  </div>
</template>

<script>
export default {
  name: "Imgix",
  props: {
    image: Object,
  },
  data() {
    return {
      blur: null,
      width: null,
    };
  },
  computed: {
    root() {
      return this.image.url.split("?").shift();
    },
    blurUrl() {
      return `${this.root}?fm=blurhash`;
    },
  },
  async fetch() {
    this.blur = await this.$http.$get(`${this.root}?fm=blurhash`);
  },
  mounted() {
    this.getWidth();
  },
  methods: {
    getWidth() {
      this.width = this.$refs["image"].offsetWidth;
    },
  },
};
</script>