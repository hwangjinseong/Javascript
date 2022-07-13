// switch문은 하나 이상의 case문으로 구성됩니다. 대개 default문도 있지만, 이는 필수는 아닙니다
switch(x) {
    case 'value1':  // if (x === 'value1')
//     ...
      break
  
    case 'value2':  // if (x === 'value2')
//      ...
      break
  
    default:
//     ...
      break
  }

let a = 2 + 2;

switch (a) {
  case 3:
    alert( '비교하려는 값보다 작습니다.' );
    break;
  case 4:
    alert( '비교하려는 값과 일치합니다.' );
    break;
  case 5:
    alert( '비교하려는 값보다 큽니다.' );
    break;
  default:
    alert( "어떤 값인지 파악이 되지 않습니다." );
}

// 수박 : 500원
// 사고 싶은 과일을 물어보고 가격알려주기
let fruit = prompt('무슨 과일을 사고 싶나요?');

switch(fruit) {
    case '사과':
        console.log('100원입니다.');
        break;
    case '키위':
        console.log('200원입니다.');
        break;
    case '복숭아':
        console.log('300원입니다.');
        break;
    case '바나나':
        console.log('400원입니다.');
        break;
    case '수박':
        console.log('500원입니다.');
        break;
    default:
        console.log('그런 과일은 없습니다.');
}