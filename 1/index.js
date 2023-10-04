'use strict'

class Exchange {
    #currencys = {
        'USD': 38.35,
        'EURO': 41.10,
        'PLN': 8.90
    }
    date = new Date;
    arr = [];
    book = [];
    get currencys() {
        return this.#currencys;
    }
    set currencys(value) {
        return this.#currencys = value;
    }
    change(value, currency) {
        this.arr.push(`${this.date.getFullYear()}.${this.date.getMonth() + 1}.${this.date.getDate()} ${this.date.getHours()}:${this.date.getMinutes()}:${this.date.getSeconds()} Change ${value} ${currency} on a ${(this.currencys[`${currency}`] * value)} UAH`);
        return `${value} ${currency} is a ` + (this.currencys[`${currency}`] * value) + ` UAH`;
    }
    fix(value) {
        return this.currencys = value;
    }
}


const ex = new Exchange();
const pro = function () {
    let choice = confirm('want exchange?');
    if (choice === true) {
        let currency = prompt('what a currency you want to exchange?', 'USD');
        let value = +prompt('what a value of currency you want exchange?', '1');
        alert(ex.change(value, currency));
        pro();
    } else {
        console.log(ex.arr);
    }
}
pro();