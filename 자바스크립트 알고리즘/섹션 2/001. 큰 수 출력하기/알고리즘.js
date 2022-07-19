// 내가 푼 방법
console.time("내가 푼 알고리즘 시간");

let 입력숫자배열 = [7, 3, 9, 5, 6, 12];
console.log(문제(입력숫자배열));

function 문제(입력숫자배열) {
  let 답 = [];

  for (let i = 0; i < 입력숫자배열.length; i++) {
    if (i == 0) {
      답.push(입력숫자배열[0]);
    } else if (입력숫자배열[i - 1] < 입력숫자배열[i]) {
      답.push(입력숫자배열[i]);
    }
  }

  return 답;
}

console.timeEnd("내가 푼 알고리즘 시간");

// 선생님이 푼 방법
console.time("선생님이 푼 알고리즘 시간");

function solution(arr) {
  let answer = [];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }

  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

console.timeEnd("선생님이 푼 알고리즘 시간");
