<template>
  <div class="md:py-6">
    <!-- class="px-3 md:px-10 md:py-8" -->
    <transition name="fade" mode="out-in">
      <keep-alive>
        <router-view :key="$route.fullPath"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("APPS_GET_ALL");
  },
};
</script>

<style>
</style>