<template>
  <div class="todo">
    <input
      type="checkbox"
      class="todo-done"
      :checked="done"
      @click="$emit('toggle')"
    />
    <div class="todo-text">{{ text }}</div>
    <div class="todo-delete">
      <button class="close-btn" @click="$emit('delete')">
        X
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Component from 'vue-class-component'
import { Prop, Vue } from 'vue-property-decorator'

@Component
export default class ToDo extends Vue {
  @Prop() name: string
  @Prop({ default: 'Default' }) text: string
  @Prop({ default: false }) done: boolean
  // This works only if @Component imported from vue-class-component, otherwise must be specified in decorator properties
  created() {
    console.log('created')
  }
}
</script>

<style scoped>
  .todo {
    padding: 16px;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 0 1px 1px #ccc;
    display: flex;
  }
  .todo-text {
    padding: 0 4px;
    flex: 1 0 auto;
  }
  .close-btn {
    border: 1px solid rgba(0,0,0,.2);
    padding: .5em;
  }
</style>