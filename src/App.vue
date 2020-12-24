<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <v-alert type="success" border="top">Vuetify init</v-alert>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
