<template>
  <div class="max-w-7xl">
    <div class="text-3xl fw-700 mb-8">Task List</div>
    <Item class="item" v-for="item in items" :key="item.name" :item="item" />
    <input class="mt-5 border-b-2 p-2" v-model="input" @keyup.enter="addItem"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import Item from "@/components/Item";
export default {
  name: "TodoList",
  components: {Item},
  setup() {
    let items = ref([
      {name: 'Wash Dishes'}
    ])

    let input = ref('')

    const addItem = () => {
      items.value.push({name: input.value})
      input.value = ''
    }

    return {
      items,
      input,
      addItem,
    }
  }
}
</script>

<style scoped>

</style>