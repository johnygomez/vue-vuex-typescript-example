import Vue from 'vue'
import Component from 'vue-class-component'
import { Action, State } from 'vuex-class'
import { filterTypes } from '../store/types'
import WithRender from '../templates/todo-filter.html'

@WithRender
@Component
export default class TodoFilter extends Vue {
  name = 'TodoFilter'
  filterTypes = filterTypes
  @State activeFilter: string
  @Action selectFilter: any

  get currentFilter() {
    return this.activeFilter
  }
  set currentFilter(val: string) {
    this.selectFilter(val)
  }
}
