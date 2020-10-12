export const filters = {
  text: (value) => {
    if (!regexes.text.test(value)) return value.slice(0, -1)
    else return value
  },
  number: (value, decimals = 2) => {
    if (!regexes.number.test(value)) return null

    if (!value && value !== 0) {
      return null
    }

    let val = value

    val = val.toString().replace(/\s/g, '')
    val = parseFloat(val.replace(',', '.')).toFixed(decimals)

    return val
      .toString()
      .replace(/\d(?=(?:\d{3})+(?!\d))/g, '$& ')
      .replace('.00', '')
  },
  capitalizeFirstLetter: (value) => {
    if (!value || !isString(value)) {
      return ''
    }

    return `${value.charAt(0).toUpperCase()}${value.substr(1)}`
  },
  months: (value, decimals = 2) => {
    if (!value && value !== 0) {
      console.log(value)
      return ''
    }

    const val = filters.number(value, decimals)
    const currency = 'mån'

    return `${val} ${currency}`
  }
}

export const regexes = {
  text: /^[a-zA-ZäöåÄÖÅ]+$/g,
  number: /[0-9]/g,
  ip: /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/,
  email: /^[-0-9a-zA-Z."!#$%&'*+/=?^_`{|}~]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}$/
}
