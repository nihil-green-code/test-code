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

let stName = prompt('학생명: ');
// 이름 받음.
let sum = 0;
// 점수를 더할 변수 준비.

const subjects = ['국어점수', '영어점수', '수학점수', '과학점수', '합계', '평균'];
// 과목 배열. 과목을 추가하기만 하면 프로그램은 알아서 맞게 동작함.
const scores = new Array(subjects.length);
// 점수 배열 과목배열과 같은 공간으로 만들어야 하므로 이렇게 해줌.

// 입력을 받아서 점수 넣는 것과 점수 합계, 평균을 여기서 다 구함.
for (let i = 0; i < subjects.length; i++) {
  if (i < subjects.length - 2) {
    scores[i] = +prompt(`${subjects[i]}`);
    sum += scores[i];
  } else if (i < subjects.length - 1) {
    scores[i] = sum;
  } else {
    scores[i] = Math.trunc(sum / (subjects.length - 2));
  }
}

// 여기서 출력.
document.write('<table>');
document.write(`<caption>&lt; ${stName} 학생의 성적 &gt;</caption>`);
for (let i = 0, content; i < subjects.length; i++) {
  console.log(subjects.length, i);
  document.write('<tr>');
  // 과목 배열과 점수 배열을 이용해 각 칸을 만듬.
  document.write(`<th scope="col">${subjects[i]}</th>`);
  document.write(`<td>${scores[i]} 점</td>`);
  document.write('</tr>');
}
document.write('</table>');
