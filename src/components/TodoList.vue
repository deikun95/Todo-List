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
              <v-tab>Активные</v-tab>
              <v-tab>Выполненные</v-tab>
            </v-tabs>
          </div>
          <TodoItem />
          <TodoInput />
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";
export default {
  name: "TodoList",
  components: {
    TodoItem,
    TodoInput
  }
};
</script>

<style lang="scss">
.todo-card {
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;
}

.card {
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

.active-list {
  display: block;
}

.done-list {
  display: none;
}

.theme--light.v-tabs > .v-tabs-bar {
  background-color: transparent !important;
}

.v-list-item__content {
  padding: 25px 25px 0 !important;
}
</style>