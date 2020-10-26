<template>
  <div>
    <div class="text-gray-700 uppercase mb-1">{{ list.name }}</div>
    <Item class="item" v-for="item in list.items" :key="item.name" :item="item" />
    <input class="p-2 text-xl focus:border-none" v-model="input" @keyup.enter="addItem"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import Item from "@/components/Item";
import store from "@/store";

export default {
  name: "TodoList",
  components: {Item},
  props: ['list'],
  setup(props) {
    let input = ref('')

    const addItem = () => {
      store().addItemToList({name: input.value}, props.list.name)
      // items.value.push({name: input.value})
      input.value = ''
    }

    return {
      input,
      addItem,
    }
  }
}
</script>

<style scoped>
input {
  border-bottom-width: 1px;
}
</style>