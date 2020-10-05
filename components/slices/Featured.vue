<template>
  <div class="post-list container">
    <div v-for="post in slice.items" :key="post.featured_post.id">
      <FeaturedPost :item="post.featured_post" :key="post.featured_post.id" />
    </div>
  </div>
</template>

<script>
import FeaturedPost from "./../FeaturedPost";

export default {
  name: "Featured",
  props: {
    slice: Object
  }
};
</script>

<style scoped></style>
