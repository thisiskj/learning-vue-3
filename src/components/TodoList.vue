<template>
  <div ref="draggableContainer" class="absolute z-40 border-2 rounded border-gray-300 bg-white"
       :class="{'border-gray-500 z-50': isDragging}">
    <div id="draggable-header" @mousedown="dragMouseDown" class="bg-gray-300 h-3 cursor-move"></div>
    <div class="p-4">
      <div class="flex justify-between">
        <ListName :list="list" />
        <RemoveList :list="list" />
      </div>
      <Item v-for="item in list.items" :key="item.id" :list="list" :item="item" />
      <AddItem :list="list" />
    </div>
  </div>
</template>

<script>
import Item from "@/components/Item";
import ListName from "@/components/ListName";
import RemoveList from "@/components/RemoveList";
import AddItem from "@/components/AddItem";
import store from "@/store";

export default {
  name: "TodoList",
  components: {AddItem, RemoveList, ListName, Item},
  props: ['list'],
  data: function () {
    return {
      isDragging: false,
      positions: {
        clientX: undefined,
        clientY: undefined,
        movementX: 0,
        movementY: 0
      }
    }
  },
  methods: {
    dragMouseDown: function (event) {
      event.preventDefault()
      this.isDragging = true
      // get the mouse cursor position at startup:
      this.positions.clientX = this.clamp(event.clientX)
      this.positions.clientY = this.clamp(event.clientY)
      document.onmousemove = this.elementDrag
      document.onmouseup = this.closeDragElement
    },
    elementDrag: function (event) {
      event.preventDefault()
      this.positions.movementX = this.positions.clientX - this.clamp(event.clientX)
      this.positions.movementY = this.positions.clientY - this.clamp(event.clientY)
      this.positions.clientX = this.clamp(event.clientX)
      this.positions.clientY = this.clamp(event.clientY)
      // set the element's new position:
      this.$refs.draggableContainer.style.top = (this.$refs.draggableContainer.offsetTop - this.positions.movementY) + 'px'
      this.$refs.draggableContainer.style.left = (this.$refs.draggableContainer.offsetLeft - this.positions.movementX) + 'px'

      console.log(
          (this.$refs.draggableContainer.offsetTop - this.positions.movementY),
          (this.$refs.draggableContainer.offsetLeft - this.positions.movementX),
          this.clamp((this.$refs.draggableContainer.offsetTop - this.positions.movementY)),
          this.clamp((this.$refs.draggableContainer.offsetLeft - this.positions.movementX)),
      )
    },
    closeDragElement () {
      this.isDragging = false
      document.onmouseup = null
      document.onmousemove = null
      store().updateList(this.list.id, 'position', {
        top: this.$refs.draggableContainer.style.top,
        left: this.$refs.draggableContainer.style.left,
      })
    },
    clamp(n) {
      let grip = 25
      return Math.ceil(n / grip) * grip;
    }
  },
  mounted() {
    this.$refs.draggableContainer.style.top = this.list.position.top
    this.$refs.draggableContainer.style.left = this.list.position.left
  }
}
</script>

<style scoped>

</style>