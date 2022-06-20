<template>
  <layout> 编辑标签 </layout>
</template>

<script lang="ts">
import tagListModel from "@/models/tagListModel";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    //route用来获取路由的信息
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((t) => t.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404"); //用来路由重定向
    }
  }
}
</script>

<style lang="scss" scoped>
</style>