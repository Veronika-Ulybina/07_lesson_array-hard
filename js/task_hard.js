'use strict';

const allCashbox = [
  [12, 4500],
  [7, 3210],
  [4, 650],
  [3, 1250],
  [9, 7830],
  [1, 990],
  [6, 13900],
  [1, 370]
];

const getAveragePriceGoods = (arr) => {

  let num = 0;

  arr.forEach((item) => {
    const [x, y] = item;
    const res = y / x;

    num += res;
  })
  return num / arr.length;
}

console.log(getAveragePriceGoods(allCashbox));

