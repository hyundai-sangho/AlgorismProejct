// 내가 푼 방법
function 문제(입력값) {
  let 답 = 0;
  let 배열길이 = 입력값.length;

  for (let i = 0; i < 배열길이; i++) {
    for (let j = 0; j < 배열길이; j++) {
      if (i <= 3 && j == 0) {
        if (입력값[i][j] > 입력값[i][j + 1] && 입력값[i][j] > 입력값[i + 1][j]) {
          답++;
        }
      } else if (i <= 3 && j == 4) {
        if (입력값[i][j] > 입력값[i][j - 1] && 입력값[i][j] > 입력값[i + 1][j]) {
          답++;
        }
      } else if (i == 4 && j == 0) {
        if (입력값[i][j] > 입력값[i - 1][j] && 입력값[i][j] > 입력값[i][j + 1]) {
          답++;
        }
      } else if (i == 4 && j == 4) {
        if (입력값[i][j] > 입력값[i - 1][j] && 입력값[i][j] > 입력값[i][j - 1]) {
          답++;
        }
      } else if (i == 0 && j >= 1 && j <= 3) {
        if (
          입력값[i][j] > 입력값[i][j - 1] &&
          입력값[i][j] > 입력값[i][j + 1] &&
          입력값[i][j] > 입력값[i + 1][j]
        ) {
          답++;
        }
      } else if (i == 4 && j >= 1 && j <= 3) {
        if (
          입력값[i][j] > 입력값[i][j - 1] &&
          입력값[i][j] > 입력값[i][j + 1] &&
          입력값[i][j] > 입력값[i - 1][j]
        ) {
          답++;
        }
      } else if (i >= 1 && i <= 3 && j >= 1 && j <= 3) {
        if (
          입력값[i][j] > 입력값[i - 1][j] &&
          입력값[i][j] > 입력값[i + 1][j] &&
          입력값[i][j] > 입력값[i][j + 1] &&
          입력값[i][j] > 입력값[i][j - 1]
        ) {
          답++;
        }
      }
    }
  }

  return 답;
}

let 문자열배열 = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.time("내가 푼 방법");
console.log(문제(문자열배열));
console.timeEnd("내가 푼 방법");

// 선생님이 푼 방법
function solution(arr) {
  let answer = 0;
  let n = arr.length;
  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;

      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];

        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }

  return answer;
}

let arr = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.time("선생님이 푼 방법");
console.log(solution(arr));
console.timeEnd("선생님이 푼 방법");
