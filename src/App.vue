<template>
  <v-app id="app">
    <v-app-bar app>
      <v-col>
        <v-toolbar-title class="font-weight-medium"
          >Weather | Vue2</v-toolbar-title
        >
      </v-col>
    </v-app-bar>
    <v-main>
      <v-container
        fluid
        class="d-flex"
        style="margin-top: 10%"
        justify="center"
      >
        <weather-card v-model="city" />
        <!-- Todo main elements -->
      </v-container>
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
import WeatherCard from './components/WeatherCard'

export default {
  name: 'App',
  components: { WeatherCard },
  data() {
    return {
      city: 'Москва',
    }
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
