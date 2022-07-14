object = 객체
// 객체: 객체란 이름(name)과 값(value)으로 구성된 프로퍼티(property)의 정렬되지 않은 집합입니다. 
//       프로퍼티의 값으로 함수가 올 수도 있는데, 이러한 프로퍼티를 메소드(method)라고 합니다

const superman = {
    name: 'clark',  // name(key), clark(value)
    agr: 33
}

// 접근
superman.name // clark
superman.age  // 33

// 추가
superman.gender = 'male';
superman.hairColor = 'black';

// 삭제
delete superman.hairColor;

// 단축 프로퍼티
const superman = {
    name,  // name: name
    age,   // age: age
    gender: 'male',
}

// 프로터피 존재 여부 확인
superman.birthDay; //undefined
'birthDay' in superman; // false
'age' in superman; //true

// 객체를 반환하는 함수
function makeObject(name, age) {
    return {
        name: name, // name,
        age: age,   // age,
        hobby: 'football',
    }
}

const Jin1 = makeObject('Jin', 17);
console.log(Jin1)
console.log('age' in Jin1);
console.log('birthDay' in Jin1);


// 성인인지 구분
function isAdult(user) {
    if(!('age' in  user) || user.age < 20) {
        return false;
    }
    return true;
}

const Jin = {
    name: 'Jin',
    age: 17,
};

const Jane = {
    name: 'Jane',
};

console.log(isAdult(Jin));
console.log(isAdult(Jane));

// for ... in문 사용
const Jins = {
    name: 'Jins',
    age: 17,
};

for(x in Jins) {
    console.log(Jins[x]);
}