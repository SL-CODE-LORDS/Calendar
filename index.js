var Month = require('./lib/month')

var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

class Calendar{
    constructor(year) {
        this.year = year
    }
    month(month_number) {
        var mon = new Month(month_number-1,this.year)
        delete mon.firstDay
        delete mon.lastDay
        delete mon.month
        delete mon.days
        delete mon.generate
        delete mon.is_generated
        return mon
    }
    get_year() {
         var _year = {}
         var _string  = '' + this.year + ' Calendar\n\n'
         for (let m = 1; m <= 12; m++) {
            var mon = this.month(m);
            var name =months[m-1]
            _year[name] = {...mon}
            _string += name + '\n' + mon.string + '\n\n'    
         }
         return {year:_year,calendar:_string}
    }
}

module.exports = Calendar