export const weatherNumbersToIcons = (iconNumber: number) => {
  switch (iconNumber) {
    case 1:
    case 2:
    case 3:
    case 4:
      return 'Sun'
    case 5:
      return 'Haze'
    case 6:
      return 'CloudSun'
    case 7:
    case 8:
    case 9:
    case 10:
      return 'Cloudy'
    case 11:
      return 'CloudFog'
    case 12:
    case 13:
    case 14:
      return 'CloudDrizzle'
    case 15:
    case 16:
    case 17:
      return 'CloudLightning'
    case 18:
      return 'CloudRain'
    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
      return 'CloudSnow'
    case 24:
      return 'ThermometerSnowflake'
    case 25:
    case 26:
    case 27:
    case 28:
      return 'CloudHail'
    case 29:
      return 'CloudHail'
    case 30:
      return 'ThermometerSun'
    case 31:
      return 'ThermometerSnowflake'
    case 32:
      return 'Wind'
    case 33:
    case 34:
    case 35:
      return 'MoonStar'
    case 36:
    case 37:
    case 38:
      return 'CloudMoon'
    case 39:
    case 40:
    case 41:
    case 42:
    case 43:
    case 44:
      return 'CloudMoonRain'
    default:
      return 'Cloud'
  }
}
