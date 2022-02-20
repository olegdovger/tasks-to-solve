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

function getRoute(tickets = []) {

}

const tickets = [
  { from: 'NY', to: 'London' },
  { from: 'Moscow', to: 'SPb' },
  { from: 'London', to: 'Moscow' },
]

getRoute(tickets)
