'use strict';

/*
step1 : "http://" 부분은 제외하고 추출.                             =>      daum.net
step2 : 닷(.)부터 표시되는 문자열을 제외하여 추출.                   =>      daum
step3 : '$' + 처음 3자리 + 총 글자 수 + url 의 14번째 문자.         =>      $dau4e

※ url 의 14번째 문자가 존재하지 않을 때는 ? 문자로 표시.            =>      $dau4?
*/

let url = 'http://daum.net';
let step1, step2, step3;

// step1 = url.slice(url.indexOf('//')+2);
step1 = url.split('//')[1];
console.log(step1);

// url의 //부터 .까지 출력해야함.
// = step1에서 0부터 .까지 출력해야함.
// step2 = url.slice(url.indexOf('//')+2, url.indexOf('.'));
// step2 = step1.slice(0, step1.indexOf('.'));
step2 = step1.split('.')[1];
console.log(step2);

// 배열은 1번째가 아닌 0번째부터 시작임에 유의.
step3 = '$' + step2.slice(0, 3) + step2.length + (url[13] ? url[13] : '?');

// (url.length > 13 ? url[13] : '?')
// length는 길이. url[13]는 인덱스 값 > 14번째 값 의미
// 배열 연산자 url[13] 자체로도 논리 연산 가능!!!
console.log(step3);

console.log(parseInt('1', 10));
