<p align="center">
  <a href="https://www.npmjs.com/package/@sl-code-lords/calendar" rel="noopener">
 <img width=100px height=100px src="calendar.png" alt="SL Code LORDS"></a>
</p>
<h2 align="center">Calendar</h2>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/SL-CODE-LORDS/Calendar.svg)](https://github.com/SL-CODE-LORDS/Calendar/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/SL-CODE-LORDS/Calendar.svg)](https://github.com/SL-CODE-LORDS/Calendar/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> generate a calendar for a specific year using JavaScript
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

generate a calendar for a specific year using JavaScript

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes

### Installing


```sh
yarn add @sl-code-lords/calendar
```

or

```sh
npm i @sl-code-lords/calendar
```

## 🎈 Usage <a name="usage"></a>

```ts
const Calendar = require('@sl-code-lords/calendar')
const calendar = new Calendar(2023)

```
## get Month
```ts
var dec = calendar.month(12)

console.log(dec)
```
```ts
Month {
  name: 'December',
  year: 2023,
  moon: {
    '1': { name: 'waning-gibbous-moon', power: 5.3094445575807185 },
    '2': { name: 'last-quarter-moon', power: 5.580350099515272 },
    '3': { name: 'last-quarter-moon', power: 5.851255641451644 },
    '4': { name: 'last-quarter-moon', power: 6.122161183386197 },
    '5': { name: 'last-quarter-moon', power: 6.393066725322569 },
    '6': { name: 'waning-crescent-moon', power: 6.663972267258941 },
    '7': { name: 'waning-crescent-moon', power: 6.934877809193495 },
    '8': { name: 'waning-crescent-moon', power: 7.205783351129867 },
    '9': { name: 'waning-crescent-moon', power: 7.476688893066239 },
    '10': { name: 'new-moon', power: 7.747594435000792 },
    '11': { name: 'new-moon', power: 0.01849997693716432 },
    '12': { name: 'new-moon', power: 0.2894055188717175 },
    '13': { name: 'waxing-crescent-moon', power: 0.5603110608080897 },
    '14': { name: 'waxing-crescent-moon', power: 0.8312166027444619 },
    '15': { name: 'waxing-crescent-moon', power: 1.102122144679015 },
    '16': { name: 'waxing-crescent-moon', power: 1.3730276866153872 },
    '17': { name: 'quarter-moon', power: 1.6439332285499404 },
    '18': { name: 'quarter-moon', power: 1.9148387704863126 },
    '19': { name: 'quarter-moon', power: 2.1857443124226847 },
    '20': { name: 'quarter-moon', power: 2.456649854357238 },
    '21': { name: 'waxing-gibbous-moon', power: 2.72755539629361 },
    '22': { name: 'waxing-gibbous-moon', power: 2.9984609382299823 },
    '23': { name: 'waxing-gibbous-moon', power: 3.2693664801645355 },
    '24': { name: 'full-moon', power: 3.5402720221009076 },
    '25': { name: 'full-moon', power: 3.811177564035461 },
    '26': { name: 'full-moon', power: 4.082083105971833 },
    '27': { name: 'full-moon', power: 4.352988647908205 },
    '28': { name: 'waning-gibbous-moon', power: 4.623894189842758 },
    '29': { name: 'waning-gibbous-moon', power: 4.8947997317791305 },
    '30': { name: 'waning-gibbous-moon', power: 5.165705273713684 },
    '31': { name: 'waning-gibbous-moon', power: 5.436610815650056 }
  },
  object: {
    Sunday: [ ' *', '03', '10', '17', '24', '31' ],
    Monday: [ ' *', '04', '11', '18', '25', ' *' ],
    Tuesday: [ ' *', '05', '12', '19', '26', ' *' ],
    Wednesday: [ ' *', '06', '13', '20', '27', ' *' ],
    Thursday: [ ' *', '07', '14', '21', '28', ' *' ],
    Friday: [ '01', '08', '15', '22', '29', ' *' ],
    Saturday: [ '02', '09', '16', '23', '30', ' *' ]
  },
  string: 'Su Mo Tu We Th Fr Sa\n' +
    ' *  *  *  *  * 01 02\n' +
    '03 04 05 06 07 08 09\n' +
    '10 11 12 13 14 15 16\n' +
    '17 18 19 20 21 22 23\n' +
    '24 25 26 27 28 29 30\n' +
    '31  *  *  *  *  *  *',
  array: [
    [
      'Su', 'Mo',
      'Tu', 'We',
      'Th', 'Fr',
      'Sa'
    ],
    [
      ' *', ' *',
      ' *', ' *',
      ' *', '01',
      '02'
    [
      '03', '04',
      '05', '06',
      '07', '08',
      '09'
    ],
    [
      '10', '11',
      '12', '13',
      '14', '15',
      '16'
    ],
    [
      '17', '18',
      '19', '20',
      '21', '22',
      '23'
    ],
    [
      '24', '25',
      '26', '27',
      '28', '29',
      '30'
    ],
    [
      '31', ' *',
      ' *', ' *',
      ' *', ' *',
      ' *'
    ]
  ],
  dayNames: [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]
}
```
## Full calendar
```ts
var year = calendar.get_year()
```
### string
```ts
console.log(year.calendar)
```
```ts
2023 Calendar

January
Su Mo Tu We Th Fr Sa
01 02 03 04 05 06 07
08 09 10 11 12 13 14
15 16 17 18 19 20 21
22 23 24 25 26 27 28
29 30 31  *  *  *  *

February
Su Mo Tu We Th Fr Sa
 *  *  * 01 02 03 04
05 06 07 08 09 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28  *  *  *  *

March
Su Mo Tu We Th Fr Sa
 *  *  * 01 02 03 04
05 06 07 08 09 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30 31  *

April
Su Mo Tu We Th Fr Sa
 *  *  *  *  *  * 01
02 03 04 05 06 07 08
09 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28 29
30  *  *  *  *  *  *

May
Su Mo Tu We Th Fr Sa
 * 01 02 03 04 05 06
07 08 09 10 11 12 13
14 15 16 17 18 19 20
21 22 23 24 25 26 27
28 29 30 31  *  *  *

June
Su Mo Tu We Th Fr Sa
 *  *  *  * 01 02 03
04 05 06 07 08 09 10
11 12 13 14 15 16 17
18 19 20 21 22 23 24
25 26 27 28 29 30  *

July
Su Mo Tu We Th Fr Sa
 *  *  *  *  *  * 01
02 03 04 05 06 07 08
09 10 11 12 13 14 15
16 17 18 19 20 21 22
23 24 25 26 27 28 29
30 31  *  *  *  *  *

August
Su Mo Tu We Th Fr Sa
 *  * 01 02 03 04 05
06 07 08 09 10 11 12
13 14 15 16 17 18 19
20 21 22 23 24 25 26
27 28 29 30 31  *  *

September
Su Mo Tu We Th Fr Sa
 *  *  *  *  * 01 02
03 04 05 06 07 08 09
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30

October
Su Mo Tu We Th Fr Sa
01 02 03 04 05 06 07
08 09 10 11 12 13 14
15 16 17 18 19 20 21
22 23 24 25 26 27 28
29 30 31  *  *  *  *

November
Su Mo Tu We Th Fr Sa
 *  *  * 01 02 03 04
05 06 07 08 09 10 11
12 13 14 15 16 17 18
19 20 21 22 23 24 25
26 27 28 29 30  *  *

December
Su Mo Tu We Th Fr Sa
 *  *  *  *  * 01 02
03 04 05 06 07 08 09
10 11 12 13 14 15 16
17 18 19 20 21 22 23
24 25 26 27 28 29 30
31  *  *  *  *  *  *
```
### object
```ts
console.log(year.year)
```

```ts
{
  January: {
    name: 'January',
    year: 2023,
    moon: {
      '1': [Object],
      '2': [Object],
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      '7': [Object],
      '8': [Object],
      '9': [Object],
      '10': [Object],
      ... 21 more items
    },
    object: {
      Sunday: [Array],
      Monday: [Array],
      Tuesday: [Array],
      Wednesday: [Array],
      Thursday: [Array],
      Friday: [Array],
      Saturday: [Array]
    },
    string: 'Su Mo Tu We Th Fr Sa\n' +
      '01 02 03 04 05 06 07\n' +
      '08 09 10 11 12 13 14\n' +
      '15 16 17 18 19 20 21\n' +
      '22 23 24 25 26 27 28\n' +
      '29 30 31  *  *  *  *',
    array: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
  },
  February: {
    name: 'February',
    year: 2023,
    moon: {
      '1': [Object],
      '2': [Object],
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      '7': [Object],
      '8': [Object],
      '9': [Object],
      '10': [Object],
      ... 18 more items
    },
    object: {
      Sunday: [Array],
      Monday: [Array],
      Tuesday: [Array],
      Wednesday: [Array],
      Thursday: [Array],
      Friday: [Array],
      Saturday: [Array]
    },
    string: 'Su Mo Tu We Th Fr Sa\n' +
      ' *  *  * 01 02 03 04\n' +
      '05 06 07 08 09 10 11\n' +
      '12 13 14 15 16 17 18\n' +
      '19 20 21 22 23 24 25\n' +
      '26 27 28  *  *  *  *',
    array: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
  },
  March: {
    name: 'March',
    year: 2023,
    moon: {
      '1': [Object],
      '2': [Object],
      '3': [Object],
      '4': [Object],
      '5': [Object],
      '6': [Object],
      '7': [Object],
      '8': [Object],
      '9': [Object],
      '10': [Object],
      ... 21 more items
    },
    object: {
      Sunday: [Array],
      Monday: [Array],
      Tuesday: [Array],
      Wednesday: [Array],
      Thursday: [Array],
      Friday: [Array],
      Saturday: [Array]
    },
    string: 'Su Mo Tu We Th Fr Sa\n' +
      ' *  *  * 01 02 03 04\n' +
      '05 06 07 08 09 10 11\n' +
      '12 13 14 15 16 17 18\n' +
      '19 20 21 22 23 24 25\n' +
      '26 27 28 29 30 31  *',
    array: [ [Array], [Array], [Array], [Array], [Array], [Array] ],
    dayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ]
  },
  ... 9 more items
}
```
## ✍️ Authors <a name = "authors"></a>

- [@ravindu01manoj](https://github.com/ravindu01manoj) Project Author

See also the list of [contributors](https://github.com/SL-CODE-LORDS/Calendar/contributors) who participated in this project.