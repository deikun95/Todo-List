<template>
  <div>
    <div class="card__body active-list">
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
      <div class="card__item">
        <div class="card__item-text">
          <v-list-item-title class="headline mb-2 card__item-title">Таска 3</v-list-item-title>
          <v-list-item-subtitle class="card__item-subtitle">Описание 3</v-list-item-subtitle>
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
    </div>
    <div class="card__body done-list">
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
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem"
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
    margin-bottom: 40px;
    padding: 15px;
    /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.5); */
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
.active-list {
  display: block;
}
.done-list {
  display: none;
}
</style>