<template>
  <div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./assets/style/reset.scss";
@import "./assets/style/helper.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  line-height: 1.5;
  font-family: $font-hei;
}
body {
  font-size: 16px;
  background: #f5f5f5;
}
</style>
