<template>
  <v-app id="app">
    <v-app-bar app>
      <v-toolbar-title>Weather | Vue2</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container fluid class="d-flex justify-center">
        <weather-card city="Москва" />
        <!-- Todo main elements -->
      </v-container>
    </v-main>
    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
import WeatherCard from './components/WeatherCard'

export default {
  name: 'App',
  components: { WeatherCard },
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
