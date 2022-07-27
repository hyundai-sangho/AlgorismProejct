// 내가 푼 방법
function 문제(입력값) {
  let 답 = "";

  for (const 요소 of 입력값) {
    if (요소 >= "0" && 요소 <= "9") 답 += 요소;
  }

  if (답[0] === "0") 답 = 답.slice(1);

  return 답;
}

let 입력문자열 = "g0en2T0s8eSoft";
console.time("내가 푼 방법");
console.log(문제(입력문자열));
console.timeEnd("내가 푼 방법");

// 선생님이 푼 방법
function solution(str) {
  // 방법 1
  /* let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }

  return parseInt(answer); */

  // 방법 2
  let answer = 0;

  for (let x of str) {
    if (!isNaN(x)) {
      answer = answer * 10 + Number(x);
      console.log(answer);
    }
  }

  return answer;
}

let str = "g0e00n2T0s8eSoft";
console.time("선생님이 푼 방법");
console.log(solution(str));
console.timeEnd("선생님이 푼 방법");
