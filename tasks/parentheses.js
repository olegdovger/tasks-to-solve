/*
* Реализовать метод для определения верна ли скобочная последовательность
* */
import assert from "assert";

function parentheses(str = '') {
}

assert.strictEqual(parentheses('{{}{}}'), true);
assert.strictEqual(parentheses('{[{}]}'), true);
assert.strictEqual(parentheses('{[{]}'), false);
assert.strictEqual(parentheses('{[}]'), false);
