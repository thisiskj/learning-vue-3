<template>
  <div @click="addList('New List')" class="text-gray-500 hover:text-gray-700 cursor-pointer">
    <div class="w-10">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "AddList",
  setup() {
    return {
      addList: store().addList,
    }
  }
}
</script>

<style scoped>

</style>