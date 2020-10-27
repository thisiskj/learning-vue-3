<template>
  <div class="flex justify-between">
    <svg @click="removeItem(list.id, item.id)" class="text-gray-300 hover:text-gray-500 cursor-pointer w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
    <input type="text" v-model="itemName" class="ml-2 text-xl block focus:outline-none"/>
  </div>
</template>

<script>
import { ref, watch } from 'vue'
import store from "@/store";

export default {
  name: "Item",
  props: ['list', 'item'],
  setup(props) {
    let itemName = ref(props.item.name)

    watch(itemName, (itemName) => store().updateItem(props.list.id, props.item.id, 'name', itemName))

    return {
      itemName,
      removeItem: store().removeItem,
    }
  }
}
</script>

<style scoped>

</style>