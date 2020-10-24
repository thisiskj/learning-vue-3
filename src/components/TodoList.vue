<template>
  <ul>
    <li v-for="item in items" :key="item.name">{{ item.name }}</li>
  </ul>
  <input v-model="input" @keyup.enter="addItem"/>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "TodoList",
  setup(props) {
    console.log(props)

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