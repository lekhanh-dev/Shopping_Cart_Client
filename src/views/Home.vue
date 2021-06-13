<template>
  <div></div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    // HelloWorld,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
div {
  height: 900px;
  background-color: #f1f1f1;
}
</style>
