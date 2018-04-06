export interface State {
  todos: TodoItem[],
  activeFilter: string,
}

export interface TodoItem {
  txt: string
  done: boolean
}

export const filterTypes = [
  'ALL',
  'ACTIVE',
  'COMPLETED',
]
