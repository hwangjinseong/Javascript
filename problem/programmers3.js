function solution(n) {
    let primeNum = true;
    let count = 0;
    
    for (let i = 2; i <= n; i++) {
      for (let j = 2; j * j <= i; j++) {
        if (i % j === 0) {
          primeNum = false;
          break;
        }
      }
      if (primeNum === true) {
        count += 1;
      }   
      primeNum = true;
    }
    return(count);
}