<template>
  <div>
    <div class="container px-4 md:px-0">
      <h1 class="text-white text-3xl mb-4 mt-6 md:mt-0 font-medium">
        Программы
      </h1>
      <apps-list :ItemSource="apps" />
    </div>
  </div>
</template>

<script>
import AppsList from "./AppsList.vue";
export default {
  components: { AppsList },
  created() {
    // this.preloadApps();
  },
  methods: {
    preloadApps() {
      // this.$store.dispatch("APPS_GET_ALL");
      //this.apps = this.$store.getters.appsAll;
    },
  },
  computed: {
    apps: function () {
      return this.$store.getters.appsAll;
    },
  },
  mounted() {},
};
</script>

<style>
</style>