import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentPage: "active",
    todos: [],
  },
  getters: {
    getTodos: (state) => {
      if (state.currentPage === "active") {
        return state.todos.filter((todo) => !todo.done);
      }
      if (state.currentPage === "done") {
        return state.todos.filter((todo) => todo.done);
      }
      return state.todos;
    },
  },
  mutations: {
    setTodos(state, payload) {
      state.todos = payload;
    },
    addTodo(state, payload) {
      state.todos.push({
        id: Date.now(),
        title: payload.title,
        description: payload.description,
        editing: false,
        done: false,
      });
    },
    deleteTodo(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    editTodo(state, payload) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id && payload.title && payload.description) {
          return payload;
        }
        return todo;
      });
    },
    addCheck(state, payload) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === payload.id) {
          return payload;
        }
        return todo;
      });
    },
    switchPage(state, payload) {
      state.currentPage = payload;
      console.log(payload);
    },
  },
  actions: {
    getTodosRequest: ({ commit }) => {
      axios
        .get("http://localhost:3000/api/todos")
        .then((res) => {
          commit("setTodos", res.data);
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setAddItem: ({ commit }, payload) => {
      commit("addTodo", payload);
      axios
        .post("http://localhost:3000/api/todo", payload)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    setDeleteItem: ({ commit }, payload) => {
      commit("deleteTodo", payload);
    },
    setEditItem: ({ commit }, payload) => {
      commit("editTodo", payload);
    },
    setCheckItem: ({ commit }, payload) => {
      commit("addCheck", payload);
    },
    setCurrentPage: ({ commit }, payload) => {
      commit("switchPage", payload.currentPage);
    },
  },
});
