<template>
  <nav>
    <nuxt-link to="/">
      <span class="site-title">{{ $prismic.asText(config.site_title) }}</span>
    </nuxt-link>
    <ul class="menu">
      <li v-for="item in config.nav_menu">
        <prismic-link :field="item.menu_item_link">
          {{ $prismic.asText(item.menu_item_label) }}
        </prismic-link>
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
  padding: 10px 0px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  font-family: Lato;
}

.site-title {
  font-weight: bold;
  font-size: 1.2em;
}

ul {
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 100;
}

li {
  margin-left: 10px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>
