<template>
  <slide-image />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SlideImage from "@/components/SlideImage.vue";
@Options({
  components: {
    SlideImage,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped></style>
