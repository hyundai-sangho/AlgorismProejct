// 1. 가위
// 2. 바위
// 3. 보

// 내가 푼 방법
function 문제(숫자배열1, 숫자배열2) {
  let 답 = [];

  for (let i = 0; i < 숫자배열1.length; i++) {
    if (숫자배열1[i] == 1 && 숫자배열2[i] == 1) {
      답.push("D");
    } else if (숫자배열1[i] == 1 && 숫자배열2[i] == 2) {
      답.push("B");
    } else if (숫자배열1[i] == 1 && 숫자배열2[i] == 3) {
      답.push("A");
    }

    if (숫자배열1[i] == 2 && 숫자배열2[i] == 1) {
      답.push("A");
    } else if (숫자배열1[i] == 2 && 숫자배열2[i] == 2) {
      답.push("D");
    } else if (숫자배열1[i] == 2 && 숫자배열2[i] == 3) {
      답.push("B");
    }

    if (숫자배열1[i] == 3 && 숫자배열2[i] == 1) {
      답.push("B");
    } else if (숫자배열1[i] == 3 && 숫자배열2[i] == 2) {
      답.push("A");
    } else if (숫자배열1[i] == 3 && 숫자배열2[i] == 3) {
      답.push("D");
    }
  }

  return 답;
}

let 숫자배열1 = [2, 3, 3, 1, 3];
let 숫자배열2 = [1, 1, 2, 2, 3];

console.time("내가 푼 알고리즘 구동 시간");
console.log(문제(숫자배열1, 숫자배열2));
console.timeEnd("내가 푼 알고리즘 구동 시간");

// 선생님이 푼 방법
function solution(a, b) {
  let answer = "";

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D" + " ";
    else if (a[i] === 1 && b[i] === 3) answer += "A" + " ";
    else if (a[i] === 2 && b[i] === 1) answer += "A" + " ";
    else if (a[i] === 3 && b[i] === 2) answer += "A" + " ";
    else answer += "B" + " ";
  }

  return answer;
}

let a = [2, 3, 3, 1, 3];
let b = [1, 1, 2, 2, 3];
console.log(solution(a, b));
