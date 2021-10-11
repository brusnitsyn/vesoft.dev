<script>
import AppSearch from "./AppSearch.vue";
export default {
  components: {
    AppSearch,
  },
  data() {
    return {
      showMobileMenu: false,
    };
  },
  deactivated() {
    this.mobileMenuHide();
  },
  methods: {
    onShowMobileMenu: function () {
      this.showMobileMenu = !this.showMobileMenu;
    },
    mobileMenuHide: function () {
      if (this.showMobileMenu) this.showMobileMenu = false;
    },
  },
  computed: {
    appsCount: function () {
      return this.$store.getters.appsAll.length;
    },
  },
};
</script>

<style>
.menu-fade-enter-active {
  transition: all 0.3s ease;
}
.menu-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.menu-fade-enter,
.menu-fade-leave-to {
  transform: translateY(444px);
  opacity: 0;
}
</style>

<template>
  <div>
    <div class="lg:w-52 hidden md:flex flex-col text-gray-600">
      <span class="text-left mb-4 mt-3 text-gray-300 hidden lg:block"
        >НАВИГАЦИЯ</span
      >

      <ul class="flex flex-row justify-between md:block w-full">
        <li class="hover:bg-primary rounded-lg lg:w-52">
          <router-link
            class="
              py-3
              md:px-3
              lg:px-0
              lg:pl-3
              flex flex-row
              items-center
              w-full
            "
            :to="'/apps'"
          >
            <svg
              width="24"
              height="24"
              class="stroke-current text-gray-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.75 12.4851C2.75 19.7858 5.18428 22.2201 12.485 22.2201C19.7857 22.2201 22.22 19.7858 22.22 12.4851C22.22 5.18438 19.7857 2.7501 12.485 2.7501C5.18428 2.7501 2.75 5.18438 2.75 12.4851Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.00958 15.9604L10.6661 10.6667L15.9598 9.01018L14.3033 14.3029L9.00958 15.9604Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="lg:pl-4 hidden text-gray-300 lg:flex">Программы</span>
            <span
              class="
                px-2
                py-1
                ml-auto
                bg-primary
                rounded-lg
                text-gray-400
                hidden
                lg:flex
              "
              >{{ appsCount }}</span
            >
          </router-link>
        </li>
        <li class="hover:bg-primary rounded-lg lg:w-52">
          <router-link
            class="
              py-3
              md:px-3
              lg:px-0
              lg:pl-3
              flex flex-row
              items-center
              w-full
            "
            :to="'/os'"
          >
            <svg
              width="24"
              height="24"
              class="stroke-current text-gray-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.9056 16.3752H8.52917"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.9056 12.4183H8.52917"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M11.7256 8.46182H8.52936"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3 12.4851C3 19.7858 5.43404 22.2201 12.735 22.2201C20.0371 22.2201 22.47 19.7858 22.47 12.4851C22.47 5.18437 20.0371 2.75009 12.735 2.75009C5.43404 2.75009 3 5.18437 3 12.4851Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="lg:pl-4 hidden text-gray-300 lg:flex">ОС</span>
            <span
              class="
                px-2
                py-1
                ml-auto
                bg-primary
                hidden
                lg:flex
                rounded-lg
                text-gray-400
              "
              >8</span
            >
          </router-link>
        </li>
        <li class="hover:bg-primary rounded-lg lg:w-52">
          <router-link
            class="
              py-3
              md:px-3
              lg:px-0
              lg:pl-3
              flex flex-row
              items-center
              w-full
            "
            :to="'/articles'"
          >
            <svg
              width="24"
              height="24"
              class="stroke-current text-gray-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.48303 10.2609V16.9546"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0368 7.05737V16.9553"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5157 13.7982V16.955"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.29999 12.0368C2.29999 4.73474 4.73472 2.3 12.0368 2.3C19.3389 2.3 21.7737 4.73474 21.7737 12.0368C21.7737 19.3389 19.3389 21.7737 12.0368 21.7737C4.73472 21.7737 2.29999 19.3389 2.29999 12.0368Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="lg:pl-4 hidden text-gray-300 lg:flex">Статьи</span>
            <span
              class="
                px-2
                py-1
                ml-auto
                bg-primary
                rounded-lg
                hidden
                lg:flex
                text-gray-400
              "
              >12</span
            >
          </router-link>
        </li>
        <!-- <li class="hover:bg-primary rounded-lg lg:w-52">
          <router-link
            class="
              py-3
              md:px-3
              lg:px-0
              lg:pl-3
              flex flex-row
              items-center
              w-full
            "
            :to="'/products'"
          >
            <svg
              width="24"
              height="24"
              class="stroke-current text-gray-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.0334 16.2107H17.9652C16.4838 16.2107 15.2826 14.9024 15.2826 13.2879C15.2826 11.6744 16.4838 10.3661 17.9652 10.3661H22.0015"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.4232 13.2211H18.1122"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.83478 8.76412H12.0845"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.71411 13.4491C2.71411 6.1473 5.14749 3.71409 12.4496 3.71409C19.7507 3.71409 22.1841 6.1473 22.1841 13.4491C22.1841 20.7498 19.7507 23.1841 12.4496 23.1841C5.14749 23.1841 2.71411 20.7498 2.71411 13.4491Z"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span class="lg:pl-4 hidden text-gray-300 lg:flex">Товары</span>
            <span
              class="
                hidden
                lg:flex
                px-2
                py-1
                ml-auto
                bg-primary
                rounded-lg
                text-gray-400
              "
              >1</span
            >
          </router-link>
        </li> -->
      </ul>

      <div class="flex-col hidden lg:flex">
        <span class="text-left mt-6 text-gray-300 lg:flex">ИЗБРАННОЕ</span>
        <ul class="mt-6 text-gray-300">
          Избранные и закрытые публикации будут доступны после
          <router-link class="text-secondary-0" :to="'/auth'"
            >Регистрации</router-link
          >
        </ul>
      </div>
    </div>

    <button
      @click="onShowMobileMenu()"
      class="
        md:hidden
        z-20
        bg-blue-500
        hover:bg-blue-700
        py-4
        px-4
        rounded-full
        fixed
        left-4
        bottom-4
      "
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2.40002 5.39999C2.40002 5.06862 2.66866 4.79999 3.00002 4.79999H21C21.3313 4.79999 21.6 5.06862 21.6 5.39999C21.6 5.73136 21.3313 5.99999 21 5.99999H3.00002C2.66866 5.99999 2.40002 5.73136 2.40002 5.39999ZM2.40002 11.4C2.40002 11.0686 2.66866 10.8 3.00002 10.8H21C21.3313 10.8 21.6 11.0686 21.6 11.4C21.6 11.7314 21.3313 12 21 12H3.00002C2.66866 12 2.40002 11.7314 2.40002 11.4ZM3.00002 16.8C2.66866 16.8 2.40002 17.0687 2.40002 17.4C2.40002 17.7313 2.66866 18 3.00002 18H21C21.3313 18 21.6 17.7313 21.6 17.4C21.6 17.0687 21.3313 16.8 21 16.8H3.00002Z"
          fill="#fff"
        />
      </svg>
    </button>

    <transition name="menu-fade">
      <!-- <div
        v-if="showMobileMenu"
        class="
          mobile-bar
          block
          h-screen
          w-screen
          bg-opacity-30 bg-primary
          absolute
          left-0
        "
      > -->
      <div
        v-if="showMobileMenu"
        class="w-full bottom-0 left-0 right-0 top-0 fixed z-30"
        @click="mobileMenuHide()"
      >
        <div
          class="
            bg-primary
            m-4
            p-6
            rounded-lg
            bottom-0
            right-0
            left-0
            absolute
            z-40
          "
        >
          <app-search class="mb-4" />
          <ul class="flex flex-col w-full">
            <!-- Items Section -->
            <li class="hover:bg-primary rounded-lg">
              <router-link
                class="py-2 flex flex-row justify-between items-center"
                :to="'/apps'"
              >
                <span class="text-gray-300">Программы</span>
                <span class="ml-auto text-gray-400">{{ appsCount }}</span>
              </router-link>
            </li>
            <li class="hover:bg-primary rounded-lg">
              <router-link
                class="py-2 flex flex-row justify-between items-center"
                :to="'/os'"
              >
                <span class="text-gray-300">ОС</span>
                <span class="ml-auto text-gray-400">8</span>
              </router-link>
            </li>
            <li class="hover:bg-primary rounded-lg">
              <router-link
                class="py-2 flex flex-row justify-between items-center"
                :to="'/articles'"
              >
                <span class="text-gray-300">Статьи</span>
                <span class="ml-auto text-gray-400">12</span>
              </router-link>
            </li>
            <!-- <li class="hover:bg-primary rounded-lg">
              <router-link
                class="py-2 flex flex-row justify-between items-center"
                :to="'/products'"
              >
                <span class="text-gray-300">Товары</span>
                <span class="ml-auto text-gray-400">1</span>
              </router-link>
            </li> -->
          </ul>
          <div class="mt-2 mb-3 bg-gray-600 w-full h-px" />
          <router-link :to="'/auth'" class="text-secondary-0 w-full"
            >Войти</router-link
          >
          <div class="mt-3 mb-2 bg-gray-600 w-full h-px" />
          <div class="flex flex-row justify-between">
            <button class="px-2 py-2" @click="onShowMobileMenu()">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.60005 3.61424C3.84413 3.37016 4.23985 3.37016 4.48393 3.61424L11.9998 11.1301L19.5156 3.61424C19.7597 3.37016 20.1554 3.37016 20.3995 3.61424C20.6436 3.85832 20.6436 4.25404 20.3995 4.49812L12.8836 12.014L20.3715 19.5019C20.6156 19.746 20.6156 20.1417 20.3715 20.3858C20.1275 20.6299 19.7317 20.6299 19.4877 20.3858L11.9998 12.8979L4.51188 20.3858C4.2678 20.6299 3.87207 20.6299 3.62799 20.3858C3.38392 20.1417 3.38392 19.746 3.62799 19.5019L11.1159 12.014L3.60005 4.49812C3.35597 4.25404 3.35597 3.85832 3.60005 3.61424Z"
                  fill="#fff"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </transition>
  </div>
</template>