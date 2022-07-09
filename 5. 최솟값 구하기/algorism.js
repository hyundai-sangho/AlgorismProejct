function solution(arr) {
  /* 
  let answer;
  let min = Number.MAX_SAFE_INTEGER;

  for (const element of arr) {
    if (element < min) min = element;
  }
  answer = min;

  return answer;
  */

  // let answer = Math.min.apply(null, arr);
  let answer = Math.min(...arr);

  return answer;
}

let arr = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(arr));
