'use strict'

class ExtendedArray extends Array {
    constructor(arr, ...args) {
        super(...args);
        this.arr = arr;
    }

    getString(separator) {
        return this.arr.join(separator);
    }

    getHtml(tagName) {
        let result = '';

        if(tagName === 'li') {
            result += `<ul>`;
            this.arr.forEach(item => {result += `<li>${item}</li>`});
            result += `</ul>`;
        } else {
            this.arr.forEach(item => {result += `<${tagName}>${item}</${tagName}>`});
        }

        return result;
    }
}

const myArray = new ExtendedArray(['test1', 'test2', 'test3']);
console.log(myArray.getString('* '));
document.write(myArray.getHtml('li'));
