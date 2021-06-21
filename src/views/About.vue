<template>
  <div class="about">
    <input type="text" @input="handleChange($event)" />
    {{ text }} - {{ str }}
  </div>
</template>
<script>
function debounce(func, delay) {
  let timeout;

  return function executedFunc(...args) {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  };
}
export default {
  data() {
    return {
      text: "",
      str: "",
    };
  },
  methods: {
    // handleChange(event) {},
  },
  watch: {
    // text() {},
  },
};
</script>
