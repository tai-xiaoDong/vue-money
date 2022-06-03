<template>
  <svg class="icon">
    <use v-bind:xlink:href="'#' + name"></use>
    <!-- v-bind可以省略，直接写成 :xlink:href="" -->
  </svg>
</template>

<script lang="ts">
//将多个icon同时引入到当前文件中
let importAll = (requireContext: __WebpackModuleApi.RequireContext) =>
  requireContext.keys().forEach(requireContext);
try {
  importAll(require.context("../assets/icons", true, /\.svg$/));
} catch (error) {
  console.log(error);
}

export default {
  props: ["name"],
  name: "Icon",
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>