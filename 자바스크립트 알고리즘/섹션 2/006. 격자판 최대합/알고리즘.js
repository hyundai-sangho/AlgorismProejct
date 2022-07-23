// 내가 푼 방법
function 문제(입력값) {
  let 답 = [];
  let 입력값길이 = 입력값.length;

  // 행의 합을 구한 변수
  let 하나행합 = 0;
  let 둘행합 = 0;
  let 셋행합 = 0;
  let 넷행합 = 0;
  let 다섯행합 = 0;

  // 열의 합을 구한 변수
  let 하나열합 = 0;
  let 둘열합 = 0;
  let 셋열합 = 0;
  let 넷열합 = 0;
  let 다섯열합 = 0;

  // 대각선의 합을 구한 변수
  let 대각선합1 = 0;
  let 대각선합2 = 0;

  for (let i = 0; i < 입력값길이; i++) {
    for (let j = 0; j < 입력값길이; j++) {
      // 행 값 구하기
      if (i == 0) 하나행합 += 입력값[i][j];
      else if (i == 1) 둘행합 += 입력값[i][j];
      else if (i == 2) 셋행합 += 입력값[i][j];
      else if (i == 3) 넷행합 += 입력값[i][j];
      else if (i == 4) 다섯행합 += 입력값[i][j];

      // 열 값 구하기
      if (j == 0) 하나열합 += 입력값[i][j];
      else if (j == 1) 둘열합 += 입력값[i][j];
      else if (j == 2) 셋열합 += 입력값[i][j];
      else if (j == 3) 넷열합 += 입력값[i][j];
      else if (j == 4) 다섯열합 += 입력값[i][j];

      // 대각선 값 구하기
      if (i == 0) 대각선합1 += 입력값[j][j];
      if (i == 4) 대각선합2 += 입력값[i - j][j];
    }
  }

  답 = [
    하나행합,
    둘행합,
    셋행합,
    넷행합,
    다섯행합,
    하나열합,
    둘열합,
    셋열합,
    넷열합,
    다섯열합,
    대각선합1,
    대각선합2,
  ];

  답 = Math.max(...답);

  return 답;
}

let 문자열배열묶음 = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.time("내가 돌아가는 시간");
console.log(문제(문자열배열묶음));
console.timeEnd("내가 돌아가는 시간");

// 선생님이 푼 방법
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);

  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }

    answer = Math.max(answer, sum1, sum2);

    console.log("answer: ", answer);
    console.log("sum1: ", sum1);
    console.log("sum2: ", sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);

  return answer;
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.time("선생님이 돌아가는 시간");
console.log(solution(arr));
console.timeEnd("선생님이 돌아가는 시간");
