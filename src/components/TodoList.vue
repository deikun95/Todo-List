<template>
  <div class="card">
    <v-card class="mx-auto todo-card" width="600" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="card__header">
            <div class="overline mb-4 card__header-logo">
              <p class="card__header-title">myToDO</p>
            </div>
            <v-tabs color="#1e88e5">
              <v-tab @click="() => switchHandler('active')">Активные</v-tab>
              <v-tab @click="() => switchHandler('done')">Выполненные</v-tab>
            </v-tabs>
          </div>
          <div class="card__inner">
            <div v-if="!getTodos.length" class="empty-item-list">
              <p>Ты свободен, Добби!</p>
            </div>
            <transition-group name="list">
              <TodoItem v-for="todo in getTodos" :key="todo.id" :todo='todo' />
            </transition-group>
          </div>
          <TodoInput />
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import TodoInput from "./TodoInput";
  import TodoItem from "./TodoItem";
  export default {
    name: "TodoList",
    components: {
      TodoItem,
      TodoInput
    },
    methods: {
      ...mapActions(['setCurrentPage']),
      switchHandler(currentPage) {
        this.setCurrentPage({ currentPage })
        console.log(this.$store.state)
      }
    },
    computed: {
      ...mapGetters(['getTodos']),
    }
  };
</script>

<style lang="scss">
  .todo-card {
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
  }

  .card {
    &__inner {
      height: 383px;
      padding-bottom: 38px;
      overflow-y: auto;
      padding-right: 10px;
    }

    &__header {
      height: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid #e3f2fd;

      &-logo {
        padding-bottom: 7px;
        padding-right: 50px;
      }

      &-title {
        font-size: 25px;
        color: #1e88e5;
      }
    }
  }

  .empty-item-list {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .theme--light.v-tabs>.v-tabs-bar {
    background-color: transparent !important;
  }

  .v-list-item__content {
    padding: 25px 25px 0 !important;
  }

  .list-move {
    transition: all .3s;
  }

  .list-enter-active {
    transition: all .3s;
  }

  .list-leave-active {
    position: absolute;
    width: 75%;
    top: 0;
    left: 0;
  }

  .list-enter,
  .list-leave-to {
    opacity: 0
  }
</style>