<template>
  <v-card max-width="400" width="400" class="mx-auto">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ city }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ information }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="6"> {{ temperature }}&deg;C </v-col>
        <v-col cols="6">
          <Sky :skyUrl="skyUrl" />
        </v-col>
      </v-row>
    </v-card-text>

    <v-divider />

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title style="font-size: 17px" class="blue-grey--text">
          Погода на ближайшие дни
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider />

    <v-list>
      <v-list-item v-for="day in wdays" :key="day.id">
        <v-list-item-title class="text-left">{{ day.day }}</v-list-item-title>
        <v-img :src="day.sky | getUrl" width="32px"></v-img>
        <v-list-item-subtitle class="text-right"
          >{{ day.temperature }}&deg;C</v-list-item-subtitle
        >
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import Sky from '@/components/card/sky/Sky'

import { getUrl } from '@/filters/skyToUrl'
import { mapGetters } from 'vuex' //Get temperature
export default {
  filters: { getUrl },
  name: 'weather-card',
  props: ['city'],
  components: { Sky },
  computed: {
    skyUrl() {
      //todo
      return 'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/cloudy.png'
    },
    temperature() {
      return -5
    },
    information() {
      //todo
      return 'Воскресенье, 13:40, Облачно'
    },
  },
  data() {
    return {
      wdays: [
        {
          day: 'Понедельник',
          temperature: '-8',
          sky: 'Облачно',
        },
        {
          day: 'Вторник',
          temperature: '-12',
          sky: 'Снег',
        },
        {
          day: 'Среда',
          temperature: '-16',
          sky: 'Снег',
        },
        {
          day: 'Четверг',
          temperature: '-5',
          sky: 'Солнечно',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.temperature {
  &::after {
    content: '℃';
    position: absolute;
    margin-top: -5px;
    font-size: 10px;
    color: #cccccc;
  }
}
</style>
