<template>
  <div
    class="banner wide"
    :style="{
      backgroundImage: `url(${slice.primary.image.url})`
    }"
  >
    {{ $prismic.asText(slice.primary.text) }}
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: {
    slice: Object
  }
};
</script>

<style scoped>
.banner {
  /* Background */
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  min-height: 400px;
  display: flex;
  align-items: center;
  font-size: 2em;
  color: black;
  font-family: Gotu, serif;
  margin-top: 80px;
  margin-bottom: 80px;
  padding-right: 250px;
}

@media screen and (max-width: 700px) {
  .banner {
    padding-right: 20px;
    padding-left: 20px;
    font-size: 1.7em;
    background-clip: border-box;
  }
}
</style>
