// 못 풀음

// 선생님이 이야기를 들으니 이해가 되는 데 혼자서 생각할 때는
// 저런 방식으로 문제를 풀 수 있다는 생각조차 못했다.

function 문제(입력값) {
  let 답 = [];
  let 최댓값 = Math.max(...입력값);
  let 최솟값 = Math.min(...입력값);

  for (const element of 입력값) {
    답.push(최댓값 - element);
  }

  console.log(최댓값);
  console.log(최솟값);

  return 답;
}

let 입력숫자배열 = [87, 89, 92, 100, 76];
console.time("내가 푼 방법");
console.log(문제(입력숫자배열));
console.timeEnd("내가 푼 방법");

// 선생님이 푼 방법
function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  return answer;
}

let arr = [87, 89, 92, 100, 76];
console.time("선생님이 푼 방법");
console.log(solution(arr));
console.timeEnd("선생님이 푼 방법");
