const assert = require('assert');
const core = require('./es6');
const {Dictionary} = require("./es6");

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        it('экземпляр класса создается', () => {
            const empty = new core.Dictionary();

            assert.strictEqual(!!empty, true);
        });
        it('обрабатываются неверные данные', () => {
            const intWord = new core.Dictionary(1, '1');
            const intDef = new core.Dictionary('1', 1);
            const intBoth = new core.Dictionary(1, 1);

            const nullWord = new core.Dictionary(null, '1');
            const nullDef = new core.Dictionary('1', null);
            const nullBoth = new core.Dictionary(null, null);

            const undefinedWord = new core.Dictionary(undefined, '1');
            const undefinedDef = new core.Dictionary('1', undefined);
            const undefinedBoth = new core.Dictionary(undefined, undefined);

            assert.strictEqual(isNaN(intWord), true);
            assert.strictEqual(isNaN(intDef), true);
            assert.strictEqual(isNaN(intBoth), true);

            assert.strictEqual(isNaN(nullWord), true);
            assert.strictEqual(isNaN(nullDef), true);
            assert.strictEqual(isNaN(nullBoth), true);

            assert.strictEqual(isNaN(undefinedWord), true);
            assert.strictEqual(isNaN(undefinedDef), true);
            assert.strictEqual(isNaN(undefinedBoth), true);
        });
        it('обрабатываются верные данные', () => {
            const okDict = new core.Dictionary('1', '1');

            assert.strictEqual(!!okDict, true);
        });
        it('правильно работает метод get', () => {
            const dictionary = new core.Dictionary('1', '1');

            assert.strictEqual(dictionary.get('1'), '1');
        });
        it('правильно работает метод set', () => {
            const dictionary = new core.Dictionary('1', '1');
            dictionary.set('2', '2');

            assert.strictEqual(dictionary.get('2'), '2');
        });
        it('правильно работает метод remove', () => {
            const dictionary = new core.Dictionary('1', '1');
            dictionary.set('2', '2');
            dictionary.remove('1');

            assert.strictEqual(dictionary.isEqual(new Dictionary('2', '2')), true);
        });
        it('правильно работает метод pop', () => {
            const dictionary = new core.Dictionary('1', '1');
            dictionary.set('2', '2');
            let one = dictionary.pop('1');

            assert.strictEqual((one === '1') && (dictionary.isEqual(new Dictionary('2', '2'))), true);
        });
    });
});