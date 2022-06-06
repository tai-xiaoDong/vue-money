import { Component } from 'vue-property-decorator';
<template>
  <nav>
    <!-- vue router提供的 router-link标签用于切换页面作用和a标签一样 -->
    <router-link to="/money" class="item" active-class="selected">
      <Icon name="money" />
      记账
    </router-link>

    <router-link to="/labels" class="item" active-class="selected">
      <Icon name="label" />
      标签
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon name="statistics" />
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: "Nav",
};
</script>

<style lang="scss" scoped>
// scoped 作用是限制特template中的class属性仅在本组件有效
nav {
  display: flex;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  flex-direction: row;
  font-size: 12px;
  > .item {
    padding: 2px 0;
    width: 33.33333%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .icon {
      width: 32px;
      height: 32px;
    }
  }
  > .item.selected {
    color: #a7262a;
  }
}
</style>