"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let splitArr = fio.split(' ');
    let name = splitArr[1];
    let surname = splitArr[0];

    return name + ' ' + surname;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return Array.from(new Set(array));
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    let result = array.reduce((acc, val) => {
        acc[0] = ( acc[0] === undefined || val < acc[0] ) ? val : acc[0]
        acc[1] = ( acc[1] === undefined || val > acc[1] ) ? val : acc[1]
        return acc;
    }, []);

    return result[1] / result[0];
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    dict = new Map();

    constructor(word, definition) {
        if (typeof word == 'string' && typeof definition == 'string' && typeof word != 'undefined' && typeof definition != 'undefined')
            this.dict.set(word, definition);
        else if (!arguments.length) {

        }
        else {
            return new Error('Неверный тип данных!');
        }
    }

    get(word) {
        if (this.dict.has(word) && typeof word == 'string' && typeof word != 'undefined')
            return this.dict.get(word);
        else if (typeof word != 'string') {
            console.log('Неверный тип данных!');
        }
        else {
            console.log('Слово не найдено!');
        }
    }

    set(word, definition) {
        if (typeof word == 'string' && typeof definition == 'string' && typeof word != 'undefined' && typeof definition != 'undefined')
            this.dict.set(word, definition);
        else {
            throw new Error('Неверные типы данных!');
        }
    }

    remove(word) {
        if (this.dict.has(word))
            this.dict.delete(word);
        else {
            console.log('Слово не найдено!');
        }
    }

    pop(word) {
        if (this.dict.has(word)) {
            let result = this.dict.get(word);
            this.dict.delete(word);
            return result
        }
        else {
            console.log('Слово не найдено!');
        }
    }

    getDict() {
        return this.dict;
    }

    isEqual(d) {
        let testVal;
        if (this.dict.size !== d.getDict().size) {
            return false;
        }
        for (let [key, val] of this.dict) {
            testVal = d.get(key);
            if (testVal !== val || (testVal === undefined && !d.has(key))) {
                return false;
            }
        }
        return true;
    }

    show() {
        console.log(this.dict);
    }
}

let dictionary = new Dictionary('1', '1');
dictionary.set('2', '2');
console.log(dictionary);
dictionary.remove('1');
let d = new Dictionary('2', '2');
console.log(dictionary, d);

console.log(dictionary.isEqual(d));

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};