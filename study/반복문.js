// 반복문 : 반복하는 것

// for문
for(let i = 0; i <= 10; i++) {
    console.log(i);
}

// for ... in 반복문
for(let key in superman) {
    console.log(key);
    console.log(superman[key]);
}

// while문 
let i = 0;
while(i < 10) {
    console.log(i);
    i++;
}

// do.. while문
let j = 0;
do {
    i++;
} while(i < 10)

// <break, cotinue>

// break : 멈추고 빠져나옴
while(true) {
    let answer = confirm('계속 할까요?')
    if(!answer) {
        break;
    }
}

// continue : 멈추고 다음 반복 진행
for(let i = 0; i < 10; i++) {
    if(i%2) {
        continue;
    }
    console.log(i);
}