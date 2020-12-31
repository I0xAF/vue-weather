<template>
  <v-app id="app">
    <v-app-bar app>
      <v-col class="text-left">
        <v-toolbar-title class="font-weight-medium"
          >Weather | Vue2</v-toolbar-title
        >
      </v-col>
    </v-app-bar>
    <v-main>
      <!-- Search Bar -->
      <v-container fluid class="d-flex" style="margin-top: 7%" justify="center">
        <router-view />
        <!-- Todo main elements -->
      </v-container>
      <div class="justify-center d-flex">
        <v-text-field
          @keyup.enter="findCity"
          v-model="search"
          style="padding-top: 1%; position: absolute; width: 360px"
          hide-details
          prepend-icon="mdi-magnify"
          single-line
          placeholder="Ваш город"
        ></v-text-field>
      </div>
    </v-main>
    <v-footer app>
      <v-col class="text-center" cols="12">
        <div class="subtitle-2">
          Powered by OpenWeather
          <v-icon small>mdi-cloud</v-icon>
        </div>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      search: '',
    }
  },
  methods: {
    findCity() {
      this.$router.push('/weather/' + this.search)
      this.search = ''
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
