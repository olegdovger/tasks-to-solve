/*
У нас есть набор билетов вида:

[
    { from: 'London', to: 'Moscow' },
    { from: 'NY', to: 'London' },
    { from: 'Moscow', to: 'SPb' }
]

Из этих билетов можно построить единственный, неразрывный маршрут.
Петель и повторов в маршруте нет.

Нужно написать программу, которая возвращает билеты
в порядке следования по маршруту.
*/

import assert from "assert";

function getRoute(tickets = []) {

}

const tickets = [
  { from: 'London', to: 'Moscow' },
  { from: 'NY', to: 'London' },
  { from: 'Moscow', to: 'SPb' },
]

assert.deepEqual(getRoute(tickets), [
  { from: 'NY', to: 'London' },
  { from: 'London', to: 'Moscow' },
  { from: 'Moscow', to: 'SPb' }
])
