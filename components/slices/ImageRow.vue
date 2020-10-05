<template>
  <div class="image-row container">
    <template v-for="image in slice.items">
      <div class="ratio" :key="image.image.url">
        <img :src="image.image.fixedHeight.url" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "ImageRow",
  props: {
    slice: Object
  }
};
</script>

<style scoped>
.image-row {
  display: flex;
  flex: 1 1 auto;
}

img {
  max-width: 100%;
}

.ratio {
  margin-left: 3px;
  /* overflow: hidden; */
}

.ratio:first-child {
  margin-left: 0;
}
</style>
