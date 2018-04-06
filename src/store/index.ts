import Vue from 'vue'
import Vuex, { ActionTree, GetterTree, MutationTree } from 'vuex'
import { filterTypes, State, TodoItem } from './types'

Vue.use(Vuex)

const state: State = {
  todos: [],
  activeFilter: filterTypes[0],
}

const getters: GetterTree<State, any> = {
  allTodos: state => state.todos,
}

const mutations: MutationTree<State> = {
  addTodo(state, txt: string) {
    if (state.todos.map(todo => todo.txt).indexOf(txt) === -1) {
      state.todos.push({
        txt,
        done: false,
      })
    }
  },
  toggleTodo(_state, todo: TodoItem) {
    todo.done = !todo.done
  },
  deleteTodo(state, todo: TodoItem) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },
  selectFilter(state, {filter}) {
    state.activeFilter = filter
  },
}

const actions: ActionTree<State, State> = {
  selectFilter({commit}, filter) {
    commit('selectFilter', { filter })
  },
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
})
