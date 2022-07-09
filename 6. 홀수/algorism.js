function solution(숫자배열) {
  /* 내가 푼 방법
  let 답;
  let 합 = 0;
  let 홀수배열 = [];
  let 홀수배열최솟값 = 0;

  for (const 숫자배열요소 of 숫자배열) {
    if (숫자배열요소 % 2 != 0) {
      홀수배열.push(숫자배열요소);
      합 = 합 + 숫자배열요소;
    }
  }

  홀수배열최솟값 = Math.min(...홀수배열);
  답 = [홀수배열최솟값, 합];

  return 답;
  */
  /* 선생님이 푼 방법 
  let answer = [];
  let sum = 0, min = Number.MAX_SAFE_INTEGER;
  for(let x of arr){
    if(x%2 === 1){
      sum += x;
      if (x < min) min = x;
    }
  }

  answer.push(sum);
  answer.push(min);
  return answer;

  */
}

let 숫자배열 = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(숫자배열));
