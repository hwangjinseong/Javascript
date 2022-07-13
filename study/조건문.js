console.log(10 > 5);
console.log(10 == 5);
console.log(10 != 5);

// 동등연산자
const a = 1;
const b = "1";

console.log(a == b); // true
console.log(a === b); // false

const age = 30;

if(age > 19) {
    console.log('환연합니다.')
} else if(age === 19) {
    console.log('수능 잘치세요.')
} else {
    console.log('안녕히가세요.')
}