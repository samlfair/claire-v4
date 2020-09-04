<template>
  <div class="slice_zone">
    <div v-for="slice in slices">
      <div v-if="slice.slice_type === 'image_with_caption'">
        <ImageCaption :slice="slice" />
      </div>
      <div v-if="slice.slice_type === 'text'">
        <RichText :slice="slice" />
      </div>
      <div v-if="slice.slice_type === 'image_row'">
        <ImageRow :slice="slice" />
      </div>
    </div>
  </div>
</template>

<script>
import RichText from "./slices/RichText";
import ImageCaption from "./slices/ImageCaption";
import ImageRow from "./slices/ImageRow";

export default {
  name: "SliceZone",
  props: {
    slices: Array
  }
};
</script>
