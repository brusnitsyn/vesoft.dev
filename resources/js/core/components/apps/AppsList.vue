<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-8 gap-x-8">
      <div v-for="item of ItemSource" :key="item.id">
        <apps-list-item-short :AppItem="item" />
      </div>
    </div>
  </div>
</template>

<script>
import AppsListItemShort from "./AppsListItemShort.vue";
export default {
  components: { AppsListItemShort },
  props: {
    ItemSource: Array,
  },
};
</script>

<style>
</style>