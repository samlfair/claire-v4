<template>
  <div class="post-list container">
    <div>
      <FeaturedPost
        v-for="post in slice.items"
        :key="post.featured_post.id"
        :item="post.featured_post"
      />
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
