<template>
  <div
    class="
      bg-body
      md:bg-primary
      w-full
      max-w-screen-sm
      h-auto
      py-3
      px-6
      flex
      justify-between
      rounded-lg
    "
  >
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="
          h-6
          w-6
          text-gray-400
          hover:text-blue-400
          transition
          duration-100
          cursor-pointer
        "
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 20L17 17"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <input
      class="
        ml-4
        flex-grow
        outline-none
        bg-body
        md:bg-primary
        focus:text-white
        transition
        duration-100
        bg-transparent
      "
      type="text"
      placeholder="Поиск по сайту"
    />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>