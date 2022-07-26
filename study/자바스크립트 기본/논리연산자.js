// ||(OR)
// 여러개 중 하나라도 true이면 true입니다

// &&(AND)
// 모두 ture이면 ture이다.

// !(NOT)
// true면 false
// false면 true

// AND
const name1 = "Mike";
const age1 = 20;

if(name === "Mike" && age > 19) {
    console.log("통과");
} else {
    console.log("돌아가");
}

// NOT
const age2 = prompt('나이');
const isAduit1 = age2 > 19;

if(!isAduit) {
    console.log("돌아가");
}

// OR
const gender = 'M';
const name = 'jane';
const isAduit2 = true;

if(gender === 'M' & (name === 'jane' || isAduit2)) {
    console.log("통과");
} else {
    console.log("돌아가")
}
