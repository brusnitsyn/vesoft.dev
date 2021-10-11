<template>
  <div>
    <div class="text-gray-300">
      <router-link :to="'/apps/' + AppItem.id" class="hover:text-secondary-0">
        <div class="flex flex-row my-2">
          <img :src="AppItem.icon_url" :alt="AppItem.name" class="w-12 h-12" />
          <div class="ml-4 w-full">
            <div class="flex justify-between">
              <div class="font-semibold">
                {{ AppItem.name }}
              </div>

              <div
                class="py-1 px-2 rounded-full bg-primary text-gray-400 text-sm"
              >
                {{ AppItem.version }}
              </div>
            </div>
            <div class="text-gray-500 -mt-2">
              {{ AppItem.developer }}
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    AppItem: Object,
  },
};
</script>

<style>
</style>