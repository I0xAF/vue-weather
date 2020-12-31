<template>
  <v-card max-width="400" width="400" class="mx-auto" elevation="3" shaped>
    <Loader v-if="loading" />
    <v-alert
      v-else-if="currentDay.error"
      color="red lighten-2"
      dark
      border="bottom"
    >
      {{ currentDay.error }}
    </v-alert>
    <div class="pa-2" v-else>
      <weather-header :city="value" />
      <weather-body />

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="blue-grey--text">
            Погода на ближайшие дни
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <weather-forecasts />
    </div>
  </v-card>
</template>

<script>
import WeatherForecasts from '@/components/card/WeatherForecasts'
import WeatherHeader from '@/components/card/WeatherHeader'
import WeatherBody from '@/components/card/WeatherBody'

import { mapGetters } from 'vuex' //Get temperature
import Loader from './Loader.vue'

export default {
  name: 'weather-card',
  props: ['value'],
  components: { WeatherForecasts, WeatherHeader, WeatherBody },
  computed: {
    ...mapGetters(['currentDay']),
    loading() {
      return !this.currentDay
    },
  },
}
</script>

<style lang="scss"></style>
