export default function (value, format = 'datetime') {
  const options = {}

  if (format.includes('date')) {
    options.year = 'numeric'
    options.month = 'numeric'
    options.day = 'numeric'
  }
  if (format.includes('time')) {
    options.hour = 'numeric'
    options.minute = 'numeric'
    options.second = 'numeric'
  }
  return new Intl.DateTimeFormat('ru-RU', options).format(value)
}
