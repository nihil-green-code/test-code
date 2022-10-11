'use strict';

let beforeWord, afterWord;
let correctCnt = 0;
let endFlag = true;    // true : 계속,  false : 끝

alert('끝말잇기 Start');

outer: for (; endFlag ;){
  beforeWord = prompt('처음 한글 세 글자 단어를 입력하세요!!^^');

  if (beforeWord === null) {
    if (confirm('정말 종료하시겠습니까?')) {
      alert('게임종료!!');
      break;
    }
  } else if (beforeWord.length === 3) {
    alert('Ok!! 게임시작~~');

    for (; ;){
      afterWord = prompt(`한글 세 글자 단어를 입력하세요!! 종료하려면 "끝"이라고 입력하세요^^(  이전 단어 : ${beforeWord})`);

      if (afterWord === null) {
        if (confirm('정말 종료하시겠습니까?')) {
          alert('게임종료!!');
          endFlag = false;
          break;
        }
      } else if (afterWord.length === 3) {
        if (afterWord[0] === beforeWord[beforeWord.length - 1]) {
          correctCnt++;
          beforeWord = afterWord;
          alert('Ok!! Excellent!');
        } else {
          alert('입력한 단어의 첫말이 이전 단어의 끝말과 달라요~~ㅠㅠ');
        }
      } else if (afterWord === '끝') {
        if (confirm('정말 끝내시겠습니까??')) {
          alert(`${correctCnt} 개의 끝말잇기를 성공하셨어요^^`);
          alert('게임종료!!');
          endFlag = false;
          break outer;
        }
      } else {
        alert('세 글자 단어만 입력하세요~~');
      }
    }
  } else {
    alert('세 글자 단어만 입력하세요~~');
  }
}
