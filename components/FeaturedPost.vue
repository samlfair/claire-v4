<template>
  <prismic-link :field="item" class="featured-post">
    <div class="image-pad">
      <div class="image" :style="style"></div>
    </div>
    <div class="text">
      {{ $prismic.asText(post.title) }}
    </div>
  </prismic-link>
</template>

<script>
export default {
  name: "FeaturedPost",
  props: {
    item: Object
  },
  data: function() {
    return {
      post: {
        body: []
      }
    };
  },
  computed: {
    id() {
      return this.item.id;
    },
    slices() {
      return this.post.body;
    },
    image() {
      if (this.slices) {
        for (let i = 0; i < this.slices.length; i++) {
          if (this.slices[i].slice_type === "image_with_caption") {
            return this.slices[i].primary.image.url;
          } else if (this.slices[i].slice_type === "image_row") {
            return this.slices[i].items[0].image.fixedWidth.url;
          }
        }
        return false;
      }
    },
    style() {
      if (this.image) {
        return {
          backgroundImage: "url(" + this.image + ")"
        };
      } else {
        return {};
      }
    }
  },
  async fetch() {
    try {
      this.post = (await this.$prismic.api.getByID(this.item.id)).data;
    } catch (e) {
      error({ statsCode: 404, message: e });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.image-pad {
  width: 30%;
}

.image {
  background: #ccc;
  padding-top: 100%;
  background-size: cover;
}

.text {
  margin-left: 20px;
}

.featured-post {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1.5em;
  color: black;
  font-family: Gotu, serif;
  margin-top: 80px;
  margin-bottom: 80px;
}
</style>
