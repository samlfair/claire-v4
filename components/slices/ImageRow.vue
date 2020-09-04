<template>
  <div class="image-row">
    <template v-for="image in slice.items">
      <div class="ratio" :key="image.image.url">
        <img :src="image.image.fixedHeight.url" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Image Row",
  props: {
    slice: Object
  }
};
</script>

<style scoped>
.image-row {
  display: flex;
  flex: 1 1 auto;
  max-width: 100%;
}

img {
  max-width: 100%;
}
</style>
