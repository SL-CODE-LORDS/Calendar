const Calendar = require('..')

const calendar = new Calendar(2023)

var dec = calendar.month(12)
console.log(dec)

var year = calendar.get_year()
console.log(year)