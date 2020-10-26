<template>
  <TodoList class="py-5 px-8"/>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  name: 'App',
  components: {
    TodoList,
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
