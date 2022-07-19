function solution(s){
    const stack = [];
    for(let i = 0; i < s.length; i++) {
        if(s[i] == '(') {
            stack.push(s[i]);
        }
        else {
            if(stack.length === 0 && s[i] === ')') return false;
            else stack.pop(s[i]);
        }
    }
    return stack.length === 0; 
}