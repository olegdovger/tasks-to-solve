/*
* Представлен односвязный список 3 -> 4 -> 5 -> 1 -> 2
*
* Дан связный список, поверните список вправо на k мест, где k неотрицательно.
*
* Пример - rotateRight(list, 2)
*
* было  - 3 -> 4 -> 5 -> 1 -> 2
* стало - 1 -> 2 -> 3 -> 4 -> 5
*/

import assert from "assert";

function rotateRight(list, number = 0) {

}

const list = {
  value: 3,
  next: {
    value: 4,
    next: {
      value: 5,
      next: {
        value: 1,
        next: {
          value: 2,
          next: null
        }
      }
    }
  }
};

const result = rotateRight(list, 2);

assert.strictEqual(result.value, 1);
assert.strictEqual(result.next.value, 2);
assert.strictEqual(result.next.next.value, 3);
assert.strictEqual(result.next.next.next.value, 4);
assert.strictEqual(result.next.next.next.next.value, 5);
assert.strictEqual(result.next.next.next.next.next, null);
