import weatherTranslate from '@/utils/weather.util'
import { getCelsium, getUrl } from '@/utils/weather.util'
//OpenWeather | API
const days = [
  //refactor
  'Воскресенье',
  'Понедельник',
  'Вторник',
  'Среда',
  'Четверг',
  'Пятница',
  'Суббота',
]
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
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
      )
        .then((resp) => resp.json())
        .then((data) => {
          const dt = new Date(data.dt * 1000)
          const currentDay = {
            sky: weatherTranslate[data.weather[0].main].toLowerCase(),
            skyUrl: getUrl(
              data.weather[0].main,
              dt.getHours() > 6 && dt.getHours() < 20
            ),
            temp: getCelsium(data.main.temp),
            ftemp: getCelsium(data.main.feels_like),
            pressure: data.main.pressure,
            wind: data.wind.speed,
            weekDay: days[dt.getDay()],
          }
          commit('setCurrentDay', currentDay)
        })
    },
    async fetchForecasts({ commit }, { city, apiKey }) {
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=4&appid=${apiKey}`
      )
    },
  },
  getters: {
    currentDay: (s) => s.currentDay,
    forecasts: (s) => s.forecasts,
  },
}
