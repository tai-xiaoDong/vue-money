<template>
  <Layout>
    <div class="tags">
      <router-link
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
        class="tag"
      >
        <span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="createTag-wrapper">
      <Dbutton class="createTag" @click="createTag">新建标签</Dbutton>
    </div>
  </Layout>
</template>

<script lang="ts">
import Dbutton from "@/components/Dbutton.vue";

import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
import { TagHelper } from "../mixins/TagHelper";

@Component({
  components: { Dbutton },
})
export default class Labels extends mixins(TagHelper) {
  get tags() {
    return this.$store.state.tagList;
  }
  beforeCreate() {
    this.$store.commit("fetchTags");
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    svg {
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag {
  background: #767676;
  color: white;
  border-radius: 4px;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>

