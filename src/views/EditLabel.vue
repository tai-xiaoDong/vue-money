<template>
  <layout>
    <div class="navBar">
      <Icon name="left" />
      <span>编辑标签</span>
    </div>
    <FormItem fieldName="标签" placeholder="请在此处输入标签名" />
    <Dbutton>删除标签</Dbutton>
  </layout>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
import FormItem from "../components/Money/FormItem.vue";
import Dbutton from "../components/Dbutton.vue";

@Component({
  components: { FormItem, Dbutton },
})
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
      this.$router.replace("/404"); //router用来路由重定向
    }
  }
}
</script>

<style lang="scss" scoped>
</style>