// method : 객체 프로퍼티로 할당 된 함수
 let boy = {
    name: "Jinseong",
    showName: function() {
        console.log(boy.name);
    }
 };
 boy.showName(); // Jinseong

 let man = boy;
 boy = null;
 man.name = "Tom";

 console.log(boy.name); // Tom

 // method
 let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    alert("안녕하세요!");
  };
  
  user.sayHi(); // 안녕하세요!

// this
  let user = {
    name: "John",
    age: 30,
  
    sayHi() {
      // 'this'는 '현재 객체'를 나타냅니다.
      alert(this.name);
    }
  
  };
  
  user.sayHi(); // John