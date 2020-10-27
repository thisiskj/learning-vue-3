<template>
  <div class="py-5 px-8 text-gray-600 font-hairline">
    <div class="flex justify-between items-end">
      <div></div>
      <div class="text-3xl font-semibold text-center text-gray-700">Task List App</div>
      <div @click="resetAll" class="text-xs font-light text-center uppercase text-gray-400 hover:text-gray-500 cursor-pointer">reset</div>
    </div>
    <hr class="my-8" />
    <div class="flex flex-col items-center justify-center">
      <TodoList v-for="list in lists" :key="list.id" :list="list" class="p-4"/>

      <div @click="addList('New List')" class="flex items-center justify-center text-gray-500 hover:text-gray-700 cursor-pointer">
        <div class="w-6">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div class="ml-2">
          Add List
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import store from "@/store";

export default {
  name: 'App',
  components: {
    TodoList,
  },
  setup() {

    return {
      lists: store().lists,
      addList: store().addList,
      resetAll: store().resetAll,
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
