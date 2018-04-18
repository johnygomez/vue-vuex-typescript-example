import Vue from 'vue'
import Component from 'vue-class-component'
import { Mutation, State } from 'vuex-class'
import Todo from './components/Todo'
import TodoFilter from './components/TodoFilter'
import store from './store/index'
import { TodoItem } from './store/types'
import WithRender from './templates/app.html'

@WithRender
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
