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
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="headline">
            {{ value }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ currentDay.weekDay }}, {{ currentDay.sky }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <v-row align="center">
          <v-col
            class="display-3"
            style="font-family: 'Consolas' !important;"
            cols="6"
          >
            {{ currentDay.temp }}&deg;C
            <p class="subtitle-2" style="font-size: 12px !important;">
              Ощущается как {{ currentDay.ftemp }}&deg;C
            </p>
          </v-col>
          <v-col cols="6">
            <Sky :skyUrl="currentDay.skyUrl" />
          </v-col>
        </v-row>
      </v-card-text>

      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="blue-grey--text">
            Погода на ближайшие дни
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <Forecasts />
    </div>
  </v-card>
</template>

<script>
import Sky from '@/components/card/sky/Sky'
import Forecasts from '@/components/card/Forecasts'
import { mapGetters, mapActions, mapMutations } from 'vuex' //Get temperature
import Loader from './Loader.vue'
export default {
  name: 'weather-card',
  props: ['value'],
  components: { Sky, Forecasts },
  computed: {
    ...mapGetters(['currentDay']),
    loading() {
      return !this.currentDay
    },
  },
}
</script>

<style lang="scss"></style>
