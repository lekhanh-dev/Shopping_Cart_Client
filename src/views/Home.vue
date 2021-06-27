<template>
  <div class="page">
    <SlideImage />
    <ProductList />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SlideImage from "@/components/SlideImage.vue";
import ProductList from "@/components/ProductList.vue";

@Options({
  components: {
    SlideImage,
    ProductList,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
.page {
  min-height: 100vh;
}
</style>
