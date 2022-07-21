// 내가 푼 방법

function 문제(입력숫자배열) {
  let 답 = 0;
  let 가산점 = 0;

  for (let 요소 of 입력숫자배열) {
    if (요소 === 1) {
      가산점++;
      답 += 가산점;
    } else {
      가산점 = 0;
    }
  }

  return 답 + "점 입니다.";
}

let 입력숫자배열 = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.time("내가 푼 방법");
console.log(문제(입력숫자배열));
console.timeEnd("내가 푼 방법");

// 선생님이 푼 방법
function solution(arr) {
  let answer = 0,
    cnt = 0;

  for (let x of arr) {
    if (x === 1) {
      cnt++;
      answer += cnt;
    } else cnt = 0;
  }

  return answer;
}

let arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.time("선생님이 푼 방법");
console.log(solution(arr));
console.timeEnd("선생님이 푼 방법");
