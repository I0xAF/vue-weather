export default {
  Drizzle: 'Мелкий дождь',
  Thunderstorm: 'Гроза',
  Rain: 'Дождь',
  Snow: 'Снег',
  Mist: 'Туман',
  Smoke: 'Туман',
  Haze: 'Мгла',
  Dust: 'Пыльная буря',
  Fog: 'Туман',
  Sand: 'Песчаная буря',
  Ash: 'Вулканический смог',
  Tornado: 'Торнадо',
  Clear: 'Ясно',
  Clouds: 'Облачно',
}

export function getCelsium(value) {
  return Math.round(value - 273.15)
}
export function getUrl(value) {
  switch (value) {
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Mist':
      return 'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/foggy.png'
    case 'Snow':
      return 'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/snow.png'
    case 'Rain':
    case 'Drizzle':
      return 'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/rain.png'
    case 'Thunderstorm':
      return 'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/thunderstorm.png'
    case 'Clear':
      return 'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/sun.png'
    case 'Clouds':
      return 'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/cloudy.png'
    case 'Tornado':
      return 'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/tornado.png'
  }
}
