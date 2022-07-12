/* 내가 푼 방법
function 문제(입력문자열, 찾을문자) {
  let 답;
  let 문자갯수카운트 = 0;

  for (const 입력문자 of 입력문자열) {
    if (입력문자 === 찾을문자) 문자갯수카운트++;
  }

  답 = 문자갯수카운트;
  return 답;
}

let 입력문자열 = "COMPUTERPROGRAMMING";
console.log(문제(입력문자열, "R")); 
*/

function solution(s, t) {
  /* 선생님이 푼 방법 1. 
  let answer = 0;
  for (let x of s) {
    if (x === t) answer++;
  }
  */
  /* 선생님이 푼 방법 2. 
  let answer = s.split(t).length;

  return answer - 1;
  */
}

let str = "COMPUTERPROGRAMMINGR";
console.log(solution(str, "R"));
