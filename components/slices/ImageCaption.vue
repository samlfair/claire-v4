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
  max-width: 95vw;
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  min-height: 400px;
  display: flex;
  align-items: center;
  font-size: 2em;
  color: black;
  font-family: Gotu, serif;
  padding-right: 20px;
  margin: 20px;
  padding: 20px;
}

@media (min-width: 900px) {
  .banner {
    margin: 70px 0px 70px calc(-10%);
    width: 120%;
    padding-right: 200px;
  }
}
</style>
