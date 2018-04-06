<template>
  <div class="App">
    <div>You are typing: {{ input }}</div>
    <input
      class="App-input"
      autofocus
      autocomplete="off"
      placeholder="Enter a todo"
      v-model="input"
      @keydown.enter="addTodo"
    >
    <div class="App-box">
      <Todo
        v-for="(todo, index) in filteredTodos"
        :key="index"
        :text="todo.txt"
        :done="todo.done"
        @toggle="toggleTodo(todo)"
        @delete="deleteTodo(todo)"
      ></Todo>
    </div>

    <div class="App-box">
      <TodoFilter></TodoFilter>
    </div>
  </div>
</template>

<script lang="ts">
  // Use TSlint Vue (by prograhammer) for linting
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Mutation, State } from 'vuex-class'
  import Todo from './components/Todo.vue'
  import TodoFilter from './components/TodoFilter.vue'
  import store from './store/index'
  import { TodoItem } from './store/types'

  @Component({
    components: {
      Todo, TodoFilter,
    },
  })
  export default class App extends Vue {
    name: string = 'App'
    input: string = ''
    filters: any = {
      ALL: (todos: TodoItem[]) => todos,
      ACTIVE: (todos: TodoItem[]) => todos.filter((todo: TodoItem) => !todo.done),
      COMPLETED: (todos: TodoItem[]) => todos.filter((todo: TodoItem) => todo.done),
    }

    @State todos: TodoItem[]
    @State activeFilter: string
    @Mutation toggleTodo: (todo: TodoItem) => void // Best would be if this could derive the type automatically
    @Mutation deleteTodo: any

    get filteredTodos() {
      return this.filters[this.activeFilter](this.todos)
    }

    addTodo(): void {
      if (!this.input.trim().length) {
        return
      }

      this.$store.commit('addTodo', this.input.trim())
      this.input = ''
    }
  }
</script>

<style scoped>
  .App {
    margin: 20px;
  }
  .App-input {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 16px;
    border: none;
    box-shadow: 0 0px 4px 1px rgba(0, 0, 0, 0.2);
    margin: 16px 0;
    background-color: #fff;
  }
  .App-box {
    margin: 16px 0;
    display: block;
    background-color: #fff;
    width: 100%;
    box-sizing: border-box;
    border: none;
    box-shadow: 0 0px 4px 1px rgba(0, 0, 0, 0.2);
  }
</style>
