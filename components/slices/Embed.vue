<template>
  <div class="container">
    <prismic-embed :field="slice.primary.embed" />
  </div>
</template>

<script>
export default {
  name: "Embed",
  props: {
    slice: Object
  }
};
</script>
