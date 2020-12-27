export function getUrl(value) {
  switch (value) {
    case 'Облачно':
      return 'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/cloudy.png'
    case 'Солнечно':
      return 'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/sun.png'
    case 'Снег':
      return 'https://raw.githubusercontent.com/I0xAF/vue-weather/main/src/assets/sky/snow.png'
    default:
      return ''
  }
}
