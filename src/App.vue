<template>
  <header-page />
  <router-view />
  <footer-page />
</template>

<script>
import HeaderPage from "@/components/HeaderPage.vue";
import FooterPage from "@/components/FooterPage.vue";
export default {
  components: {
    HeaderPage,
    FooterPage,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

ul {
  list-style: none;
  padding-left: 0;
}

#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

$color-primary: black;
$color-secondary: white;

.text-primary {
  color: $color-primary;
}

.text-secondary {
  color: $color-secondary;
}
</style>
