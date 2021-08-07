// let myName = "Dave";
// let email = "aaa@gmail.com";
// let hello = `Hello ${myName}?!`; //보간법

// console.log(myName);
// console.log(email);
// console.log(hello);

// let user = {
//   name: 'Dave',
//   age: 27,
//   isValid: true
//   };
//   console.log(user);
//   console.log(user.age);
//   console.log(user.name);
  
// let boxEl = document.querySelector('.box');

// console.log(boxEl);

// boxEl.addEventListener('click', function() {
//   console.log('click');
//   boxEl.classList.add('active');
//   console.log(
//     boxEl.classList.contains('active')
//   )
//   boxEl.classList.remove('active');
//   console.log(
//     boxEl.classList.contains('active')
//   )
// });

// boxEls = document.querySelectorAll('.box')
// boxEls.forEach(function (boxEl, index) {
//   boxEl.classList.add(`order-${index+1}`);
//   console.log(index, boxEl);
// });

// const boxEl = document.querySelector('.box');
// console.log(boxEl.textContent);

// boxEl.textContent = 'BOX ONE'
// console.log(boxEl.textContent);

const a = 'Hello~';
// split: 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse: 배열 뒤집기
// join: 배열을 인수 기준으로 문자로 병합해 반환
const b = a.split('').reverse().join('');