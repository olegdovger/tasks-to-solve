/*
* Реализовать метод для определения верна ли скобочная последовательность
* */
function parentheses(str = '') {
}

const assert = require('assert');

assert.strictEqual(parentheses('{{}{}}'), true);
assert.strictEqual(parentheses('{[{}]}'), true);
assert.strictEqual(parentheses('{[{]}'), false);
assert.strictEqual(parentheses('{[}]'), false);
