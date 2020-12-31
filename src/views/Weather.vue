<template>
  <weather-card v-model="city" />
</template>

<script>
import { mapMutations, mapActions, mapGetters } from 'vuex'
import WeatherCard from '@/components/WeatherCard'
export default {
  components: { WeatherCard },
  data() {
    return {
      city: 'Москва',
    }
  },
  computed: mapGetters(['currentDay']),
  watch: {
    $route: 'update',
  },
  methods: {
    ...mapMutations(['clearCurrentDay', 'clearForecasts']),
    ...mapActions(['fetchCurrentDay', 'fetchForecasts']),
    async update() {
      this.clearCurrentDay()
      this.clearForecasts()

      this.city = this.$route.params.city
      await this.fetchCurrentDay({
        city: this.city,
        apiKey: '439d4b804bc8187953eb36d2a8c26a02', //?????????
      })
      await this.fetchForecasts({
        coords: this.currentDay.coords,
        apiKey: '439d4b804bc8187953eb36d2a8c26a02',
      })
    },
  },
  async created() {
    await this.update()
  },
}
</script>

<style></style>
