// 내가 푼 방법
console.time("내가 푼 알고리즘 구동 시간");
function 문제(입력숫자배열) {
  let 답 = [];

  답.push(입력숫자배열[0]);

  for (let i = 0; i < 입력숫자배열.length; i++) {
    if (입력숫자배열[i] > 입력숫자배열[i - 1]) {
      답.push(입력숫자배열[i]);
    }
  }

  for (let j = 1; j < 답.length; j++) {
    if (답[j] < 답[j - 1]) {
      답.splice(j, 1);
    }
  }

  return 답;
}

let 입력숫자배열 = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(문제(입력숫자배열));

console.timeEnd("내가 푼 알고리즘 구동 시간");

// 선생님이 푼 방법
console.time("선생님이 푼 알고리즘 구동 시간");
function solution(arr) {
  let answer = 1;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }

  return answer;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log("답은: " + solution(arr) + "명");
console.timeEnd("선생님이 푼 알고리즘 구동 시간");
