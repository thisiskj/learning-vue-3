<template>
  <div>
    <div class="flex justify-between">
      <ListName :list="list" />
      <RemoveList :list="list" />
    </div>
    <Item class="item" v-for="item in list.items" :key="item.id" :list="list" :item="item" />
    <input class="ml-6 text-xl focus:outline-none text-gray-400" v-model="input" @keyup.enter="addItem" />
  </div>
</template>

<script>
import { ref } from 'vue'
import Item from "@/components/Item";
import store from "@/store";
import ListName from "@/components/ListName";
import RemoveList from "@/components/RemoveList";

export default {
  name: "TodoList",
  components: {RemoveList, ListName, Item},
  props: ['list'],
  setup(props) {
    let input = ref('')

    const addItem = () => {
      store().addItemToList(props.list.id, input.value)
      input.value = ''
    }

    return {
      input,
      addItem,
      updateListName: store().updateListName,
    }
  }
}
</script>

<style scoped>

</style>