<template>
  <div class="rich-text">
    <prismic-rich-text :field="slice.primary.text" />
  </div>
</template>

<script>
export default {
  name: "RichText",
  props: {
    slice: Object
  }
};
</script>

<style>
.rich-text {
  font-weight: 100;
}

.rich-text p {
  font-size: 1.3em;
  line-height: 1.4em;
  margin-bottom: 1em;
}
</style>
