<template>
  <select
    class="TodoFilter"
    v-model="currentFilter"
  >
    <option v-for="filter in filterTypes" v-bind:key="filter">{{ filter }}</option>
  </select>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Action, State } from 'vuex-class'
  import { filterTypes } from '../store/types'

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
</script>


<style scoped>
  .TodoFilter {
    display: block;
    width: 100%;
    box-sizing: border-box;
    border: none;
    height: 2.5em;
  }
</style>