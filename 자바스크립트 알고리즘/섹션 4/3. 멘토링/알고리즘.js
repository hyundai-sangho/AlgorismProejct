// 내가 푼 방법
function 멘토링(입력받은값) {
  let 답 = [];

  let 하나 = [];
  let 둘 = [];
  let 셋 = [];
  let 넷 = [];

  for (const element of 입력받은값) {
    for (let j = 0; j < element.length; j++) {
      if (j === 0) {
        if (element[j] === 1) 하나.push(1);
        if (element[j] === 2) 둘.push(1);
        if (element[j] === 3) 셋.push(1);
        if (element[j] === 4) 넷.push(1);
      } else if (j === 1) {
        if (element[j] === 1) 하나.push(2);
        if (element[j] === 2) 둘.push(2);
        if (element[j] === 3) 셋.push(2);
        if (element[j] === 4) 넷.push(2);
      } else if (j === 2) {
        if (element[j] === 1) 하나.push(3);
        if (element[j] === 2) 둘.push(3);
        if (element[j] === 3) 셋.push(3);
        if (element[j] === 4) 넷.push(3);
      } else if (j === 3) {
        if (element[j] === 1) 하나.push(4);
        if (element[j] === 2) 둘.push(4);
        if (element[j] === 3) 셋.push(4);
        if (element[j] === 4) 넷.push(4);
      }
    }
  }

  if (하나[0] < 둘[0]) if (하나[1] < 둘[1]) if (하나[2] < 둘[2]) 답.push("(멘토: 1, 멘티: 2)");
  if (하나[0] < 셋[0]) if (하나[1] < 셋[1]) if (하나[2] < 셋[2]) 답.push("(멘토: 1, 멘티: 3)");
  if (하나[0] < 넷[0]) if (하나[1] < 넷[1]) if (하나[2] < 넷[2]) 답.push("(멘토: 1, 멘티: 4)");

  if (둘[0] < 하나[0]) if (둘[1] < 하나[1]) if (둘[2] < 하나[2]) 답.push("(멘토: 2, 멘티: 1)");
  if (둘[0] < 셋[0]) if (둘[1] < 셋[1]) if (둘[2] < 셋[2]) 답.push("(멘토: 2, 멘티: 3)");
  if (둘[0] < 넷[0]) if (둘[1] < 넷[1]) if (둘[2] < 넷[2]) 답.push("(멘토: 2, 멘티: 4)");

  if (셋[0] < 하나[0]) if (셋[1] < 하나[1]) if (셋[2] < 하나[2]) 답.push("(멘토: 3, 멘티: 1)");
  if (셋[0] < 둘[0]) if (셋[1] < 둘[1]) if (셋[2] < 둘[2]) 답.push("(멘토: 3, 멘티: 2)");
  if (셋[0] < 넷[0]) if (셋[1] < 넷[1]) if (셋[2] < 넷[2]) 답.push("(멘토: 3, 멘티: 4)");

  if (넷[0] < 하나[0]) if (넷[1] < 하나[1]) if (넷[2] < 하나[2]) 답.push("(멘토: 4, 멘티: 1)");
  if (넷[0] < 둘[0]) if (넷[1] < 둘[1]) if (넷[2] < 둘[2]) 답.push("(멘토: 4, 멘티: 2)");
  if (넷[0] < 셋[0]) if (넷[1] < 셋[1]) if (넷[2] < 셋[2]) 답.push("(멘토: 4, 멘티: 4)");

  return 답;
}

let 입력할숫자배열 = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.time("내가 푼 방법");
console.log(멘토링(입력할숫자배열));
console.timeEnd("내가 푼 방법");

// 선생님이 푼 방법
function solution(test) {
  let answer = 0;
  let tmp = [];

  let m = test.length;
  let n = test[0].length;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;

        for (let s = 0; s < n; s++) {
          if (test[k][s] == i) pi = s;
          if (test[k][s] == j) pj = s;

          // console.log("i:", i, "j:", j);
          // console.log("k:", k, "s:", s);
          // console.log("test[k][s]: " + test[k][s]);
          // console.log("pi: " + pi);
          // console.log("pj: " + pj);
        }
        if (pi < pj) cnt++;
      }
      if (cnt === m) {
        tmp.push([i, j]);
        answer++;
      }
    }
  }

  answer = tmp;
  return answer;
}

let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.time("선생님이 푼 방법");
console.log(solution(arr));
console.timeEnd("선생님이 푼 방법");
