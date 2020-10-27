<template>
  <input class="ml-6 text-xl focus:outline-none text-gray-400" v-model="input" @keyup.enter="addItem" />
</template>

<script>
import { ref } from 'vue'
import store from "@/store"

export default {
  name: "AddItem",
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
    }
  }
}
</script>

<style scoped>

</style>