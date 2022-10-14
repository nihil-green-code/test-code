// 'use strict';

console.log(this);

function func() {
  console.log(this);
}

func();

const func2 = () => {
  console.log(this);
};
