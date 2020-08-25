<template>
  <div>
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
