<template>
  <div class="container">
    <swiper
      ref="mySwiper"
      class="md:rounded-lg w-screen md:w-auto"
      :options="swiperOptions"
    >
      <swiper-slide>
        <img
          class="w-full h-full md:h-auto"
          src="http://127.0.0.1:8000/img/placeholder.png"
        />
      </swiper-slide>
      <swiper-slide>
        <img
          class="w-full h-full md:h-auto"
          src="http://127.0.0.1:8000/img/placeholder.png"
        />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        // centeredSlides: true,
        slidesPerView: "auto",
        autoplay: {
          delay: 5500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
        },
        // Some Swiper option/callback...
      },
    };
  },
  created() {
    this.$store.dispatch("APPS_GET_ALL");
  },
};
</script>

<style>
</style>