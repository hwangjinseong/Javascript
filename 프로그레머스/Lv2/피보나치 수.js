// top-down
function solution(n) {
  let d = new Array(100).fill(0);
  if (n == 1 || n == 2) {
    return 1;
  }
  if (d[n] != 0) return d[n];
  d[n] = solution(n - 1) + solution(n - 2);
  return d[n];
}
console.log(solution(30));