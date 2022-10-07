/*
    < 문제 >

- 학생명, 국어점수, 영어점수, 수학점수를 입력받아 테이블 형태로
  입력받은 정보와 성적 합계, 평균이 출력되도록 프로그램 구현.


    < 조건 >

1> 외부 스타일 시트와 외부 스크립트 적용.
2> 국어점수, 영어점수, 수학점수는 0 ~ 100점 사이의 범위로 입력 받는다 가정.
  단, 과목은 국, 영, 수 외에 더 확장이 될 수 있다는 가정하에 구현.
3> 평균은 정수부만 표현되도록 Math.trunc() 함수 활용.
4> 테이블의 제목은 caption 속성을 적용하고 테이블의 구성은 tr, th, td 로만 구성.
5> 테이블 제목과 모든 행의 높이는 30px 적용.
6> 테입블의 개별 열 너비는 각각 100px 적용.
7> 그 외 사항은 출력 예시 참조.
8> 모두 html 태그 구성은 js 를 이용하여 구성.

*/

'use strict';

// 합계 평균 따로 배치
// let stName = prompt('학생명: ');
// let sum = 0;

// const subjects = ['국어점수', '영어점수', '수학점수'];
// const scores = new Array(subjects.length);

// for (let i = 0; i < subjects.length; i++) {
//   scores[i] = +prompt(`${subjects[i]}`);
//   sum += scores[i];
// }

// document.write('<table>');
// document.write(`<caption>&lt; ${stName} 학생의 성적 &gt;</caption>`);
// for (let i = 0; i < subjects.length; i++) {
//   document.write('<tr>');
//   document.write(`<th scope="col">${subjects[i]}</th>`);
//   document.write(`<td>${scores[i]} 점</td>`);
//   document.write('</tr>');
// }

// document.write(`<tr><th>합계</th>`);
// document.write(`<td>${sum} 점</td></tr>`);

// document.write(`<tr><th>평균</th>`);
// document.write(`<td>${Math.trunc(sum / subjects.length)} 점</td></tr>`);

// document.write('</table>');

// 합계 평균 같이 구함
// const subjects = ['국어점수', '영어점수', '수학점수', '합계', '평균'];
// const scores = new Array(subjects.length);

// for (let i = 0; i < subjects.length; i++) {
//   if (i < subjects.length - 2) {
//     scores[i] = +prompt(`${subjects[i]}`);
//     sum += scores[i];
//   } else if (i < subjects.length - 1) {
//     scores[i] = sum;
//   } else {
//     scores[i] = Math.trunc(sum / (subjects.length - 2));
//   }
// }

// document.write('<table>');
// document.write(`<caption>&lt; ${stName} 학생의 성적 &gt;</caption>`);
// for (let i = 0; i < subjects.length; i++) {
//   document.write('<tr>');
//   document.write(`<th scope="col">${subjects[i]}</th>`);
//   document.write(`<td>${scores[i]} 점</td>`);
//   document.write('</tr>');
// }

// document.write('</table>');

// 2차원 배열 이용
/*
  [
    ['학생명', '국어점수', '영어점수', '수학점수', '총점', '평균'],
    ['김태현', 60, 80, 70, 210, 70],
  ]
*/

let stNum = +prompt('학생 수');
const stData = new Array(stNum + 1);
stData[0] = ['학생명', '국어점수', '영어점수', '수학점수', '총점', '평균',];

for (let row = 1; row < stData.length; row++) {
  stData[row] = new Array(stData[0].length);
  stData[row][stData[row].length - 2] = 0;
  stData[row][stData[row].length - 1] = 0;
  stData[row][0] = prompt(stData[0][0]);

  for (let col = 1, sum, average; col < stData[0].length - 2; col++) {
    stData[row][col] = +prompt(stData[0][col]);
    sum = stData[row].length - 2;
    average = stData[row].length - 1;

    if (col > 0 && col < sum) stData[row][sum] += +stData[row][col];
    if (col > 0 && col < average) stData[row][average] = Math.trunc(stData[row][sum] / (stData[row].length - 3));
  }

  document.write('<table>');
  document.write(`<caption>&lt; ${stData[row][0]} 학생의 성적 &gt;</caption>`);

  for (let i = 1; i < stData[0].length; i++) {
    document.write('<tr>');
    document.write(`<th scope="col">${stData[0][i]}</th>`);
    document.write(`<td>${stData[row][i]} 점</td>`);
    document.write('</tr>');
  }

  document.write('</table>');
}

console.log(stData);
