<template>
  <div class="footer container">© Claire Ciel Zimmerman {{ year }}</div>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style scoped>
.footer {
  text-align: center;
  color: #ddd;
  margin-top: 100px;
}
</style>
