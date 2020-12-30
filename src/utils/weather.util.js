const assetsUrl =
  'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/'
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
export function getUrl(value, isDayNow) {
  switch (value) {
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Mist':
      return `${assetsUrl}foggy.png`
    case 'Snow':
      return `${assetsUrl}snow.png`
    case 'Rain':
    case 'Drizzle':
      return `${assetsUrl}rain.png`
    case 'Thunderstorm':
      return `${assetsUrl}thunderstorm.png`
    case 'Clear':
      return isDayNow ? `${assetsUrl}sun.png` : `${assetsUrl}moon.png`
    case 'Clouds':
      return `${assetsUrl}cloudy.png`
    case 'Tornado':
      return `${assetsUrl}tornado.png`
  }
}
