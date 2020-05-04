<template>
  <div>
    <div class="todo-container">
      <div class="card">
        <v-card class="mx-auto todo-card" width="500" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="card__header">
                <div class="overline mb-4 card__header-logo">
                  <p class="card__header-title">myToDO</p>
                </div>
                <v-tabs>
                  <v-tab>Активные</v-tab>
                  <v-tab>Выполненные</v-tab>
                </v-tabs>
              </div>

              <div class="card__body">
                <div class="card__item">
                  <v-list-item-title class="headline mb-2 card__item-title">Отреставрировать москвич</v-list-item-title>
                  <v-list-item-subtitle class="card__item-subtitle">Купить краску и замутить ремонт</v-list-item-subtitle>
                </div>
                <div class="card__item">
                  <v-list-item-title class="headline mb-2 card__item-title">Доделать диплом</v-list-item-title>
                  <v-list-item-subtitle class="card__item-subtitle">Сделать презентацию и оформление</v-list-item-subtitle>
                </div>
                <div class="card__item">
                  <v-list-item-title class="headline mb-2 card__item-title">Сходить на турнички</v-list-item-title>
                  <v-list-item-subtitle
                    class="card__item-subtitle"
                  >Размяться и подтягиваться до посинения</v-list-item-subtitle>
                </div>
              </div>

              <div class="card__footer">
                <v-card-actions>
                  <div class="text-center">
                    <v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on }">
                        <v-btn class="mx-2" fab dark color="#1E88E5" v-on="on">
                          <v-icon dark>mdi-plus</v-icon>
                        </v-btn>
                      </template>

                      <v-card>
                        <v-card-title class="headline grey lighten-2" primary-title>Добавить задачу:</v-card-title>

                        <v-card-text>
                          <div>
                            <v-text-field label="Название" :rules="rules" hide-details="auto"></v-text-field>
                            <v-text-field label="Описание"></v-text-field>
                          </div>
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="#1E88E5" text @click="dialog = false">Ok</v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </div>
                </v-card-actions>
              </div>
            </v-list-item-content>
            <!-- <v-list-item-avatar tile size="80" color="grey">dasdsa</v-list-item-avatar> -->
          </v-list-item>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  }
};
const app = document.createElement("div");
app.setAttribute("data-app", true);
document.body.append(app);
</script>

<style lang = "scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  width: 100%;
  height: 100%;
  background-color: #e3f2fd;
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
      font-style: bold;
      font-size: 25px;
      color: #1e88e5;
    }
  }
  &__item {
    background-color: #e3f2fd;
    margin-bottom: 40px;
    padding: 15px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
    border-radius: 4px;
    &:first-child {
      margin-top: 40px;
    }
    &-title {
      padding-bottom: 10px;
      font-size: 10px;
    }
  }
  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #e3f2fd;
    padding: 10px;
  }
}
.theme--light.v-tabs > .v-tabs-bar {
  background-color: transparent !important;
}
.v-list-item__content {
  padding: 25px 25px 0 !important;
}
</style>