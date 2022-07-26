// 함수 : 함수란 자신의 외부(재귀 함수의 경우 스스로) 코드가 '호출'할 수 있는 하위 프로그램입니다. 
//        프로그램과 마찬가지로, 함수 역시 명령문의 시퀀스로 구성된 함수 본문을 가집니다. 함수에 값을 '전달'하면, 함수는 값을 '반환'할 것입니다.

// 매개변수가 있는 함수
function sayHello(name) {
    console.log(name);
    let msg = `Hello`;
    if(name) {
        msg += `Hello ${name}`;
    }
    console("함수 내부")
    console.log(msg);
}
sayHello();
sayHello('Mike');
console.log("함수 호출 후");
console.log(msg);

 
// 전역 변수와 지역 변수
let msg = "welcome";
console.log(msg);

function sayHello(name) {
    let msg = "Hello";
    console.log(msg + ' ' + name);
}
sayHello('Mike');
console.log(msg);


// default value
function sayHello(name = 'friend') {
    let msg = `Hello, ${name}`;
    console.log(msg);
}
sayHello();
sayHello("jane");


// return으로 값 반환
function add(num1, num2) {
    return num1 + num2;
}
const result = add(2, 3);
console.log(result);

function showError() {
    alert("에러가 발생");
    return;
    alert("이 코드는 절대 실행되지 않습니다.")
}
const re = showError();
console.log(re);


// 함수 'myFunc' 선언 
function myFunc(theObject) {
    theObject.brand = "쌍용";
  }
  /*
     변수 'mycar' 선언;
     새 객체를 만들고 초기화;
     'mycar'에 객체 참조를 할당
   */
  var mycar = {
    brand: "현대",
    model: "엑셀",
    year: 1994
  };
 
 // '현대' 기록
  console.log(mycar.brand);
 
// 객체 참조를 함수에 전달
  myFunc(mycar);
 
  /*
     함수가 객체의 'brand' 속성을 바꿨으므로
     '쌍용' 출력.
   */
  console.log(mycar.brand);

