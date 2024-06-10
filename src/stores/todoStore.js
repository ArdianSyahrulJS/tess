// stores/todoStore.js
import { defineStore } from 'pinia';

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [],
  }),
  actions: {
    addTodo(task) {
      this.todos.push({ text: task, done: false });
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    toggleTodoStatus(index) {
      this.todos[index].done = !this.todos[index].done;
    },
  },
  getters: {
    remainingTodos: (state) => state.todos.filter(todo => !todo.done).length,
  },
});
