<script>
import AppSearch from "./AppSearch.vue";
export default {
  components: { AppSearch },
};
</script>

<style>
</style>

<template>
  <div class="hidden h-auto md:flex flex-row justify-between">
    <app-search />
    <div class="hidden items-center md:flex">
      <!-- <span class="text-gray-300">Андрей Брусницын</span> -->
      <img
        class="h-12 w-12 rounded-full ml-4"
        src="http://127.0.0.1:8000/img/avatars/test.png"
        alt=""
      />
    </div>
  </div>
</template>