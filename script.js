'use strict';

let rowLength = 5;
let colLength = 5;

/** @type {number[][]} */
const array5 = new Array(rowLength);

for (let row = 0; row < array5.length; row++) {
  array5[row] = new Array(colLength);
}

// 행 고정 구조이고 행이 역방향, 열이 역방향이다.
for (let row = rowLength - 1, value = 1; row >= 0; row--) {
  for (let col = colLength - 1; col >= colLength - 1 - row; col--) {
    array5[row][col] = value++;
  }
}

// 임시 배열을 만들어주고,
const tmp = new Array(rowLength);

for (let row = 0; row < tmp.length; row++) {
  tmp[row] = new Array(colLength);
}

// 임시 배열에 180도 돌린 배열을 넣어준다.
for (let row = rowLength - 1; row >= 0; row--) {
  for (let col = colLength - 1; col >= 0; col--) {
    tmp[rowLength - 1 - row][colLength - 1 - col] = array5[row][col];
  }
}

// 임시 배열을 출력해준다.
for (let row = 0; row < tmp.length; row++) {
  for (let col = 0, value; col < tmp[row].length; col++) {
    value = tmp[row][col];

    if (col >= colLength - row) {
      document.write('&nbsp;&nbsp;&nbsp;');
    } else {
      document.write(`${value / 10 < 1 ? '&nbsp;' : ''}${value++} `);
    }
  }

  document.write('<br />');
}
