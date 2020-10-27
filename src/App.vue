<template>
  <div class="py-5 px-8 text-gray-600 font-hairline">
    <div class="flex justify-between items-center">
      <AddList />
      <div class="text-3xl font-semibold text-center text-gray-700">Task List App</div>
      <div @click="resetAll" class="text-xs font-light text-center uppercase text-gray-400 hover:text-gray-500 cursor-pointer">reset</div>
    </div>
    <hr class="my-8" />
    <div class="relative">
      <TodoList v-for="list in lists" :key="list.id" :list="list" />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import store from "@/store";
import AddList from "@/components/AddList";

export default {
  name: 'App',
  components: {
    AddList,
    TodoList,
  },
  setup() {
    return {
      lists: store().lists,
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
