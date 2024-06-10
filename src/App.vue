<template>
  <div id="app">
    <h1>Todo List</h1>
    <div class="input-group">
      <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new task" />
      <button @click="addTodo">Add</button>
    </div>
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.done" @change="toggleTodoStatus(index)" />
        <span :class="{ done: todo.done }">{{ todo.text }}</span>
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
    <p>{{ remainingTodos }} tasks remaining</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useTodoStore } from './stores/todoStore';

const newTodo = ref('');
const todoStore = useTodoStore();

const addTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value);
    newTodo.value = '';
  }
};

const removeTodo = (index) => {
  todoStore.removeTodo(index);
};

const toggleTodoStatus = (index) => {
  todoStore.toggleTodoStatus(index);
};

const todos = todoStore.todos;
const remainingTodos = todoStore.remainingTodos;
</script>

<style scoped>
/* Latar Belakang dan Penataan Umum */
#app {
  font-family: 'Arial', sans-serif;
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  background: linear-gradient(to right, #0080ff, #00c1d4);
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

/* Judul */
h1 {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #333;
  text-align: center;
  font-weight: bold;
}

/* Input dan Tombol */
.input-group {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
}

input[type="text"] {
  flex: 1;
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px 0 0 8px;
  outline: none;
  transition: border-color 0.3s;
}

input[type="text"]:focus {
  border-color: #84ff00;
}

button {
  padding: 12px 20px;
  font-size: 1rem;
  color: white;
  background-color: #84ff00;
  border: none;
  border-radius: 0 8px 8px 0;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #00c1d4;
}

/* Daftar Tugas */
ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s;
  border-radius: 8px;
  margin-bottom: 8px;
}

li:hover {
  background-color: #e6f7ff;
}

/* Checkbox dan Teks Tugas */
input[type="checkbox"] {
  margin-right: 10px;
  cursor: pointer;
}

span {
  flex-grow: 1;
  font-size: 1rem;
}

.done {
  text-decoration: line-through;
  color: #999;
}

/* Tombol Hapus */
li button {
  background-color: #ff4d4f;
  border: none;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

li button:hover {
  background-color: #d9363e;
}

/* Pesan Tugas Tersisa */
p {
  font-size: 1rem;
  color: #666;
  margin-top: 1rem;
  text-align: center;
}

/* Responsif untuk Layar Kecil */
@media (max-width: 600px) {
  #app {
    padding: 1rem;
  }

  .input-group {
    flex-direction: column;
  }

  input[type="text"] {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    border-radius: 8px;
  }
}
</style>
