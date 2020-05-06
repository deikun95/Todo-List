import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: "Таска 1",
        desctiption: "Описание таски 1",
        editing: false,
        done: false,
      },
      {
        id: 2,
        title: "Таска 2",
        desctiption: "Описание таски 2",
        editing: false,
        done: false,
      },
      {
        id: 3,
        title: "Таска 3",
        desctiption: "Описание таски 3",
        editing: false,
        done: false,
      },
    ],
  },
  getters: {
    getTodos: (state) => {
      return state.todos;
    },
  },
  mutations: {
    addTodo(state, payload) {
      state.todos.push({
        id: Date.now(),
        title: payload.title,
        desctiption: payload.description,
        editing: false,
        done: false,
      });
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
  actions: {
    setAddItem: ({ commit }, payload) => {
      commit("addTodo", payload);
    },
    setDeleteItem: ({ commit }, payload) => {
      commit("deleteTodo", payload);
    },
  },
});
