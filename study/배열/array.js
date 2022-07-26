// 배열은 문자, 숫자, 객체, 함수 등도 포함할 수 있다.
let arr =[
    '진성',
    3,
    false,
    {
        name: 'Jinseong',
        age: 18,
    },
    function() {
        console.log('TEST');
    }
];

// length : 배열의 길이
student.length // 예 : 30

// push : 배열 끝에 추가
let days1 = ['월', '화', '수'];
days1.push('목')
console.log(days1) // 월 화 수 목

// pop : 배열 끝 요소 제거
let days2 = ['월', '화', '수'];
days2.pop('수')
console.log(days) // 월 화

// shift, unshift : 배열 앞에 제거/추가
// 추가
days.unshift('일');
console.log(days); // 일 월 화 수

// 제거
days.shift('월');
console.log(days); // 화 수

// 반복문 for
let day = ['월', '화', '수'];
for(let index = 0; index < day.length; index++) {
    console.log(day[index]);
}

// 반복문 for...of
let days = ['월', '화', '수'];
for(let day of days) {
    console.log(day)
}


