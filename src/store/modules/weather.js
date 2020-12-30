import weatherTranslate from '@/utils/weather.util'
import { getCelsium } from '@/utils/weather.util'
export default {
  state: {
    currentDay: {},
    forecasts: [],
  },
  mutations: {
    setCurrentDay(state, day) {
      state.currentDay = day
    },
  },
  actions: {
    async fetchCurrentDay({ commit }, { city, apiKey }) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ru`
      )
        .then((resp) => resp.json())
        .then((data) => {
          const currentDay = {
            sky: weatherTranslate[data.weather[0].main].toLowerCase(),
            temp: getCelsium(data.main.temp),
            ftemp: getCelsium(data.main.feels_like),
            pressure: data.main.pressure,
            wind: data.wind.speed,
          }
          console.log(currentDay)
          commit('setCurrentDay', currentDay)
        })
    },
  },
  getters: {
    currentDay: (s) => s.currentDay,
    forecasts: (s) => s.forecasts,
  },
}
