<template>
  <div class="nav">
    <!-- vue router提供的 router-link标签用于切换页面作用和a标签一样 -->
    <router-link to="/money">
      <Icon name="money" />
      记账
    </router-link>

    <router-link to="/labels">
      <Icon name="label" />
      标签
    </router-link>
    <router-link to="/statistics">
      <Icon name="statistics" />
      统计
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
// scoped 作用是限制特template中的class属性仅在本组件有效
.nav {
  border: 1px solid red;
}
</style>