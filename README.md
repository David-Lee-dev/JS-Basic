# JS Basic

JS에 관한 기초적인 내용 정리

---

## 1. 개요

> ### 1.1 표기법
>
> ### 1.1 .1dash-case
>
> - ``-``를 이용해서 단어를 연결
> - HTML, CSS에서 사용
>
> ### 1.1.2 snake_case
>
> - ``_``를 이용해서 단어를 연결
> - HTML, CSS에서 사용
>
> ### 1.1.3 camelCase
>
> - 단어의 맨 앞 글자만 대문자로 표시
> - JS에서 **주로** 사용
>
> ### 1.1.4 PascalCase
>
> - 맨 앞 글자도 대문자로 표시
> - JS에서 특수한 경우에 사용
>
> ### 1.1.5 Zero-based Numbering
>
> - JS에서는 0부터 숫자를 매기기 시작
>
>  
>
> ### 1.2 주석
>
> ````js
> // 한 줄 메모
> /* 한 줄 멤모 */
> 
> /**
>  * 여러 줄
>  * 메모1
>  * 메모2
>  */
> ````

---

## 2. 데이터의 종류

> ### 2.1 String
>
> ```js
> let myName = "Dave";
> let email = "aaa@gmail.com";
> let hello = `Hello ${myName}?!`; //보간법
> ```
>
> ### 2.2 Number
>
> ```js
> // 정수 및 부동소수점
> let number = 123;
> let opacity = 1.57;
> ```
>
> ### 2.3 Boolean
>
> ```js
> // true. false의 값을 가지는 논리 데이터
> ```
>
> ### 2.4 Undefined
>
> ```js
> let undef; // 선언된 변수에 값이 들어있지 않을 경우
> let obj = { abc: 123};
> 
> console.log(obj.xyz); // abc 외에 다른 요소를 사용할 경우 = 선언되지 않은 변수
> ```
>
> ### 2.5 Null
>
> ```js
> // 어떤 값이 의도적으로 비어있음을 의미
> ```
>
> ### 2.6 Object(객체 데이터)
>
> ```js
> let user = {
> name: 'Dave',
> age: 27,
> isValid: true
> };
> ```
>
> ### 2.7 Array(배열 데이터)
>
> ```js
> let fruits = ['apple', 'banana', 'cherry', 1, 2, 3];
> ```

---

## 3. 변수

> ### 3.1 let
>
> ```js
> // 변수 선언
> let a = 3;
> console.log(a);	// 3
> // 값 변경(재할당) 가능
> a = 999;
> console.log(a); // 999
> ```
>
> ### 3.2  const
>
> ```js
> const a = 3;
> console.log(a);	// 3
> // 값 변경(재할당) 불가능
> a = 999;
> console.log(a); // TypeError
> ```
>
> - ``const``를 주로 사용하고 재할당이 필요하다면 ``let``으로 고쳐쓴다.

---

## 4. 예약어

> ```js
> let this;
> let if;
> let break;
> // SyntaxError
> ```

---

## 5. 함수

- 특정 동작을 수행하는 코드의 집합

> ```js
> function helloFunc() {			// 함수 선언
> 	console.log(1234);
> }
> 
> helloFunc();					// 함수 호출
> ```
>
> ```js
> function returnFunc() {
>     return 123;					// 반환값
> }
> 
> let a = returnFunc();
> console.log(a);//123
> ```
>
> ```js
> function sum(a, b){ 			// a,b 는 매개변수(Parameters)
> 	return a + b;
> }
> 
> let a = sum(1, 2)				// 1,2는 인수(Arguments)
> ```
>
> ```js
> function hello() {				// 기명 함수 -> 함수 선언
> }
> 
> let world = function() {		// 익명 함수 -> 함수 표현
> }
> ```
>
> ```js
> const a = {
> 	name : 'Dave',
> 	age : '27'
> 
> 	getName: function() {		//메서드(Method) - 익명 함수 표현
> 		return this.name; 
> 	}
> };
> ```

---

## 6. 조건문 - 스킵

---

## 7. DOM API

## (Document Object Model, Application Programming Interface)

```html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
<!--    
  위에서 아래로 읽어 내려가는데 아래의 script를 읽으면
  찾을 수 없기 때문에 사용할 수 없다.
  정보에 해당하는 부분은 head에 작성하는 것이 좋기 때문에
  deffer를 이용해 해결.
    -->
  <script defer src="main.js"></script>
</head>
<body>
  <div class="box">Box!!</div>
</body>
</html>
```

> ### 7.1 정보 검색
>
> ### 7.1.1 querySelector()
>
> - HTML 가장 먼어 찾아진  요소 **1개**만 반환
>
> ### 7.1.2 addEventListener()
>
> - 요소에 적용할 수 있는 메서드
> - 두 개의 인수``(특정 이벤트에 대한 상황, 실행할 함수)``를 이용
>
> ```js
> boxEl.addEventListener('click', function(){
> 	console.log('Click');
> })
> ```
>
>  ### 7.1.3 querySelectorALL()
>
> - 특정 요소 모두 검색
> - 유사 배열의 형태로 반환
>
> 
>
> ### 7.2  정보 활용
>
> ### 7.2.1 classList.add()
>
> - 요소에 클래스 추가
> - 중복으로 같은 클래스 추가 **X**
>
> ### 7.2.2 classList.contains()
>
> - 요소의 클래스 존재 여부 확인
>
> ### 7.2.3 classList.remove()
>
> - 요소의 특정 클래스 제거
>
> ### 7. 2.4 forEach()
>
> ```js
> boxEls = document.querySelectorAll('.box')
> boxEls.forEach(function (boxEl, index) {
>   boxEl.classList.add(`order-${index+1}`);
>   console.log(index, boxEl);
> });
> ```
>
> ### 7.3  Getter, Setter
>
> ```js
> const boxEl = document.querySelector('.box');
> console.log(boxEl.textContent);
> 
> boxEl.textContent = 'BOX ONE'
> console.log(boxEl.textContent);
> ```

---

## 8. 메서드 체이닝 (Method Chaining)

- 메서드를 연쇄적으로 사용할 수 있는 방법

```js
const a = 'Hello~';
// split: 문자를 인수 기준으로 쪼개서 배열로 반환
// reverse: 배열 뒤집기
// join: 배열을 인수 기준으로 문자로 병합해 반환
const b = a.split('').reverse().join('');
```

