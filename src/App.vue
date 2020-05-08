<template>
  <div>
    <div class="todo-container">
      <TodoList />
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import TodoList from "./components/TodoList";
  export default {
    name: "app",
    components: {
      TodoList
    },
    methods: {
      ...mapActions(['getTodosRequest'])
    },
    created() {
      this.getTodosRequest()
    }
  };
</script>

<style lang="scss">
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    background-image: linear-gradient(#fc6c48 0%, #ef5081 100%);
    font-family: Roboto, sans-serif;
  }

  .todo-container {
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100vh;
  }
</style>