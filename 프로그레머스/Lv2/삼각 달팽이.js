// 반복문을 사용하여 빈 배열 생성
// var arr = new Array(5);
// for(let i = 0; i < arr.length; i++) {
//   arr[i] = new Array(2);
// }

// var ROW_MAX = 5;
// var COL_MAX = 5;

// //2차원 배열 생성
// var arr = [];
// for(var i=0; i<ROW_MAX; i++){
//   arr[i] = [];
//   for(var j=0; j<COL_MAX; j++){
//     arr[i][j] = null;
//   }
// }

// 4
function solution(n) {
  let graph = [];
  let answer = [];
  //초기값을 위해서 -1로 변수 지정
  let y = -1;
  let x = 0;
  let number = 1;
  // 요소가 모두 0인 배열 생성
  for (let i = 1; i < n + 1; i++) {
      let tmp = Array(i).fill(0);
      graph.push(tmp)
  }

  for (let i=0; i < n; i++) {
      for (let j = i; j < n; j++) {
          // 밑으로 내려간다.
          if (i % 3 === 0) {
              y +=1;
          // 오른쪽으로 간다.
          }else if (i % 3 === 1) {
              x += 1;
          //위로 올라간다.
          }else{
              y -= 1;
              x -= 1;
          }
          graph[y][x] = number;
          number += 1;
      }
  }
  //graph[i]를 차례대로 answer에 추가
  for (let i = 0; i < n; i++) {
      answer = answer.concat(graph[i])
  }
  return answer;
}