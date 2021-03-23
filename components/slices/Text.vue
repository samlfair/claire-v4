<template>
  <div class="rich-text container">
    <prismic-rich-text :field="slice.primary.text" />
  </div>
</template>

<script>
export default {
  name: "Text",
  props: {
    slice: Object
  }
};
</script>

<style>
.rich-text {
  font-weight: 100;
  margin-top: 30px;
  margin-bottom: 30px;
}

.rich-text p {
  font-size: 1.3em;
  line-height: 1.4em;
  margin-bottom: 1em;
}

.rich-text h2,
.rich-text h3,
.rich-text h4 {
  font-family: Gotu;
}

.rich-text h2 {
  margin-top: 70px;
  margin-bottom: 30px;
  font-size: 2.2em;
}
</style>
