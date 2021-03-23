<template>
  <div class="slice_zone">
    <div v-for="(slice, index) in slices" :key="`${slice.slice_type}-${index}`">
      <div v-if="slice.slice_type === 'image_with_caption'">
        <Banner :slice="slice" />
      </div>
      <div v-if="slice.slice_type === 'text'">
        <RichText :slice="slice" />
      </div>
      <div v-if="slice.slice_type === 'image_row'">
        <ImageRow :slice="slice" />
      </div>
      <div v-if="slice.slice_type === 'embed'">
        <Embed :slice="slice" />
      </div>
      <div v-if="slice.slice_type === 'featured'">
        <Featured :slice="slice" />
      </div>
    </div>
  </div>
</template>

<script>
import { Banner, Embed, Featured, ImageRow, RichText } from "./slices";

export default {
  name: "SliceZone",
  props: {
    slices: Array
  },
  components: {
    Banner,
    Embed,
    Featured,
    ImageRow,
    RichText
  }
};
</script>
