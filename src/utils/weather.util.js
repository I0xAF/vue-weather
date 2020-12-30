export default {
  Drizzle: 'Мелкий дождь',
  Thunderstorm: 'Гроза',
  Rain: 'Дождь',
  Snow: 'Снег',
  Mist: 'Туман',
  Smoke: 'Туман',
  Haze: 'Мгла',
  Dust: 'Пыль',
  Fog: 'Туман',
  Sand: 'Песок',
  Ash: 'Вулканический смог',
  Squall: 'Буря',
  Tornado: 'Торнадо',
  Clear: 'Ясно',
  Clouds: 'Облачно',
}

export function getCelsium(value) {
  return Math.round(value - 273.15)
}
export function getUrl(value) {
  switch (value) {
    case 'Drizzle':
      return 'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/rain.png'
  }
}
