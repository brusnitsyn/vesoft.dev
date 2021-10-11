<script>
import AppHeader from "./AppHeader.vue";
import Navbar from "./Navbar.vue";

export default {
  components: { Navbar, AppHeader },
};
</script>

<template>
  <div class="md:container md:max-w-screen-xl md:mx-auto md:px-4">
    <div class="flex flex-row">
      <navbar />
      <div class="flex md:ml-6 lg:ml-10 flex-col min-w-0 w-full">
        <app-header class="items-start" />

        <router-view class="md:mt-8"> </router-view>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>