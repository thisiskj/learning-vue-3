<template>
  <div class="py-5 px-8 text-gray-600 font-hairline">
    <div class="text-3xl text-gray-700 mb-4">Task List App</div>
    <div class="grid grid-cols-1 gap-4">
      <TodoList v-for="(list, index) in lists" :key="index" :list="list" class="p-4"/>
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
      lists: store().lists
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
