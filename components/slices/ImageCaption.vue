<template>
  <div
    class="banner"
    :style="{
      backgroundImage: `url(${slice.primary.image.url})`
    }"
  >
    {{ $prismic.asText(slice.primary.text) }}
  </div>
</template>

<script>
export default {
  name: "ImageCaption",
  props: {
    slice: Object
  }
};
</script>

<style scoped>
.banner {
  /* Add media query */
  width: 120%;
  margin-left: -10%;
  max-width: 95vw;
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  min-height: 400px;
  display: flex;
  align-items: center;
  font-size: 2em;
}
</style>
