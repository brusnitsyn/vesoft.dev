<template>
  <div>
    <div class="w-full h-auto relative">
      <img
        :src="currentApp.placeholder_url"
        alt=""
        class="md:rounded-lg rounded-b-lg rounded-bl-lg"
      />
      <div
        class="
          filter
          invert
          pt-16
          mix-blend-difference
          pb-6
          px-8
          absolute
          left-0
          top-0
          bottom-0
          flex flex-col
          justify-between
          lg:w-2/3
          w-auto
        "
      >
        <div class="font-semibold">
          {{ currentApp.created_at | appDetailFormatDate }}
        </div>

        <div class="flex flex-col">
          <h4 class="font-medium text-lg md:mb-3">
            {{ currentApp.developer }}
          </h4>
          <h1 class="font-semibold text-2xl lg:text-5xl mb-2">
            {{ currentApp.name }}
          </h1>
          <span class="font-medium text-base hidden md:block md:mb-3">{{
            currentApp.short_description
          }}</span>
          <div class="flex">
            <div class="px-2 py-2 bg-primary rounded-md text-sm">
              <span class="filter invert">{{ currentApp.category.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="text-white px-4 md:px-0">
      <h4 class="font-medium text-lg mt-6 pb-3">Информация</h4>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div class="flex flex-col">
          <span class="text-gray-400">Версия</span>
          <span>{{ currentApp.version }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-gray-400">Размер</span>
          <span>{{ currentApp.size }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-gray-400">Активация</span>
          <span>{{ currentApp.activation }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-gray-400">Совместимость</span>
          <span>{{ currentApp.compatibility }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-gray-400">Архитектура</span>
          <span>{{ currentApp.architecture }}</span>
        </div>
        <div class="flex flex-col">
          <span class="text-gray-400">Язык интерфейса</span>
          <span>{{ currentApp.language }}</span>
        </div>
      </div>
      <div class="mt-5 mb-5 bg-gray-600 w-full h-px" />
      <div>
        <div class="flex justify-between mb-5">
          <h4 class="font-medium text-lg">Описание</h4>
          <a :href="currentApp.web_site" class="text-secondary-0">Веб-сайт</a>
        </div>
        <Editor :config="config" style="w-full" />

        <!-- <span class="text-base md:block">{{
          currentApp.full_description
        }}</span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: String,
  },
  data() {
    return {
      config: {
        readOnly: true,
        tools: {
          header: require("@editorjs/header"),
          paragraph: require("@editorjs/paragraph"),
        },
        data: {},
      },
    };
  },
  computed: {
    currentApp: function () {
      return this.$store.getters.appsCurrent;
    },
  },
  watch: {
    currentApp() {
      let jsonData = JSON.parse(this.currentApp.full_description);
      this.config.data = jsonData;
    },
  },
  activated() {
    this.$store.dispatch("APPS_GET_BY_ID", this.id);
  },
};
</script>

<style>
.ce-block__content,
.ce-toolbar__content {
  max-width: 1000px;
}
</style>