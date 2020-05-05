<template>
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
                <v-text-field label="Название" color="#1E88E5" hide-details="auto"></v-text-field>
                <v-text-field label="Описание" color="#1E88E5"></v-text-field>
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
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    };
  },
  name: "TodoInput"
};
const app = document.createElement("div");
app.setAttribute("data-app", true);
document.body.append(app);
</script>

<style lang="scss">
.card {
  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid #e3f2fd;
    padding: 10px;
  }
}
</style>