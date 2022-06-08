<template>
  <Layout class-prefix="layout">
    <NumberPad />
    <Types />
    <Notes />
    <Tags />
  </Layout>
</template>

<script lang="ts">
import NumberPad from "@/components/NumberPad.vue";
import Types from "../components/Types.vue";
import Tags from "../components/Tags.vue";
import Notes from "../components/Notes.vue";
export default {
  name: "Money",
  components: { NumberPad, Types, Tags, Notes },
};
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
