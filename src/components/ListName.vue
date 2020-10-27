<template>
  <input type="text" v-model="listName" class="text-gray-700 text-sm font-bold uppercase mb-1 focus:outline-none" />
</template>

<script>
import { ref , watch } from 'vue'
import store from "@/store";

export default {
  name: "ListName",
  props: ['list'],
  setup(props) {
    let listName = ref(props.list.name)

    watch(listName, (listName) => store().updateList(props.list.id, 'name', listName))

    return {
      listName,
    }
  }
}
</script>

<style scoped>

</style>