<template>
  <div>
    <div class="card__body active-list">
      <div v-if="!todo.editing" class="card__item">
        <div class="card__item-text">
          <v-list-item-title class="headline mb-2 card__item-title">{{ todo.title }}</v-list-item-title>
          <v-list-item-subtitle class="card__item-subtitle">{{ todo.description }}</v-list-item-subtitle>
        </div>
        <div class="card__item-btn">
          <v-btn icon color="#1e88e5" @click="showEditHandler">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn icon color="#ef5081" @click="deleteHandler">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
          <v-btn icon color="#4CAF50">
            <v-icon>mdi-check</v-icon>
          </v-btn>
        </div>
      </div>
      <div v-if="todo.editing" class="card__item edit">
        <div class="card__item-text">
          <v-list-item-title class="headline mb-2 card__item-title">
            <input type="text" class="input-edit" v-model="todo.title" ref="input" />
          </v-list-item-title>
          <v-list-item-subtitle class="card__item-subtitle">
            <input type="text" class="input-edit" v-model="todo.description" />
          </v-list-item-subtitle>
        </div>
        <div class="card__item-btn">
          <v-btn icon color="#4CAF50" @click="hideEditHandler">
            <v-icon>mdi-checkbox-marked-circle</v-icon>
          </v-btn>
        </div>
      </div>
      <!-- <div class="card__body done-list">
        <div class="card__item">
          <div class="card__item-text">
            <v-list-item-title class="headline mb-2 card__item-title">Таска 1</v-list-item-title>
            <v-list-item-subtitle class="card__item-subtitle">Описание 1</v-list-item-subtitle>
          </div>
          <div class="card__item-btn">
            <v-btn icon color="#1e88e5">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon color="#ef5081">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn icon color="#4CAF50">
              <v-icon>mdi-check</v-icon>
            </v-btn>
          </div>
        </div>
        <div class="card__item">
          <div class="card__item-text">
            <v-list-item-title class="headline mb-2 card__item-title">Таска 2</v-list-item-title>
            <v-list-item-subtitle class="card__item-subtitle">Описание 2</v-list-item-subtitle>
          </div>
          <div class="card__item-btn">
            <v-btn icon color="#1e88e5">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <v-btn icon color="#ef5081">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn icon color="#4CAF50">
              <v-icon>mdi-check</v-icon>
            </v-btn>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    todo: {
      type: Object,
      default: () => ({})
    }
  },
  name: "TodoItem",
  methods: {
    ...mapActions(["setDeleteItem", "setEditItem"]),
    deleteHandler() {
      this.setDeleteItem(this.todo.id);
    },
    showEditHandler() {
      this.setEditItem({
        ...this.todo,
        editing: true
      });
      this.$nextTick(() => this.$refs.input.focus());
    },
    hideEditHandler() {
      this.setEditItem({
        ...this.todo,
        editing: false
      });
    }
  }
};
</script>

<style lang="scss">
.card {
  &__item {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #eeeeee;
    padding: 15px;
    border-radius: 4px;
    overflow: hidden;

    &:first-child {
      margin-top: 40px;
    }

    &-title {
      padding-bottom: 10px;
      font-size: 20px;
    }

    &-btn {
      position: absolute;
      right: -110px;
      transition: 0.3s all;
    }

    &:hover > .card__item-btn {
      right: 10px;
    }
  }
}
.input-edit {
  background-color: #fff;
}
</style>UIASD
