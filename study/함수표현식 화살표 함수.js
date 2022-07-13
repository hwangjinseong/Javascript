// 함수 선언식 : 어디서든 호출 가능(호이스팅)
sayHello();

function sayHello() {
    console.log('hello');
}

// 함수표현식 : 코드에 도달하면 생성
let sayHello = function() {
    console.log('Hello');
}
sayHello();

// 화살표 함수(arrow function)
let add1 = (num1, num2) => {
    return num1 + num2;
}
// return문이 아니면
let add2 = (num1, num2) => (
    num1 + num2
)

// 괄호도 생략가능
let add3 = (num1, num2) => num1 + num2;
let sayHello = name => `Hello, ${name}`;

// 인수가 없는 함수(괄호 생략 불가능)
let showError = () => {
    alert('error!');
}

let add = (num1, num2) => {
    const result = num1 + num2;
    return result;
}