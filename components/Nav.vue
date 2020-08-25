<template>
  <nav>
    <h1>{{ $prismic.asText(config.site_title) }}</h1>
    <ul class="menu">
      <li v-for="item in config.nav_menu">
        {{ $prismic.asText(item.menu_item_label) }}
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  props: {
    config: Object
  }
};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
