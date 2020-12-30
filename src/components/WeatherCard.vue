<template>
  <v-card max-width="400" width="400" class="mx-auto" elevation="3" shaped>
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">
          {{ value }}
        </v-list-item-title>
        <v-list-item-subtitle>
          Понедельник, {{ currentDay.sky }}
          <!-- {{ days.dayOfWeek }},
          {{ days.sky }} -->
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

    <v-list>
      <!-- <v-list-item v-for="day in currentDay.forecasts" :key="day.id">
        <v-list-item-title class="text-left">{{
          day.dayOfWeek
        }}</v-list-item-title>
        <v-img :src="day.sky | getUrl" width="32px"></v-img>
        <v-list-item-subtitle class="text-right"
          >{{ day.temp }}&deg;C / {{ day.ftemp }}&deg;C</v-list-item-subtitle
        >
      </v-list-item> -->
    </v-list>
  </v-card>
</template>

<script>
import Sky from '@/components/card/sky/Sky'
import { mapGetters, mapActions, mapMutations } from 'vuex' //Get temperature
export default {
  name: 'weather-card',
  props: ['value'],
  components: { Sky },
  computed: mapGetters(['currentDay']),
  methods: mapActions(['fetchCurrentDay']),
  async mounted() {
    await this.fetchCurrentDay({
      city: this.value,
      apiKey: 'eb4160fd777d52bc28b45030bd79a12d',
    })
  },
  // data() {
  //   return {
  //     days: {
  //       dayOfWeek: 'Воскресенье',
  //       temp: -5,
  //       ftemp: -3,
  //       sky: 'Облачно',
  //       forecasts: [
  //         {
  //           dayOfWeek: 'Понедельник',
  //           temp: -8,
  //           ftemp: -4,
  //           sky: 'Облачно',
  //         },
  //         {
  //           dayOfWeek: 'Вторник',
  //           temp: -12,
  //           ftemp: -7,
  //           sky: 'Снег',
  //         },
  //         {
  //           dayOfWeek: 'Среда',
  //           temp: -16,
  //           ftemp: -10,
  //           sky: 'Снег',
  //         },
  //         {
  //           dayOfWeek: 'Четверг',
  //           temp: -5,
  //           ftemp: -1,
  //           sky: 'Солнечно',
  //         },
  //       ],
  //     },
  //   }
  // },
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
