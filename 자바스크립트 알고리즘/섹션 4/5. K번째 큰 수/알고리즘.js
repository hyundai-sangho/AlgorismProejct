// 내가 푼 방법
function 문제(입력값) {
  let 답;
  let 임시저장 = [];
  let k번째큰수 = 3;

  // 1. 3자리 더할 수 있는 숫자 임시저장 배열에 입력
  for (let i = 0; i < 입력값.length; i++) {
    for (let j = i + 1; j < 입력값.length; j++) {
      for (let k = j + 1; k < 입력값.length; k++) {
        임시저장.push(입력값[i] + 입력값[j] + 입력값[k]);
      }
    }
  }

  // 2. Set() 사용하여 중복 제거
  const set = new Set(임시저장);
  // 3. Set() 사용하여 중복 제거 후 다시 배열로 변환
  const array = new Array(...set);

  // 4. sort 함수로 큰 값부터 내리차순으로 정렬
  array.sort((a, b) => {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  });

  답 = array[k번째큰수 - 1];

  return 답;
}

let 숫자배열 = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.time("내가 푼 문제");
console.log(문제(숫자배열));
console.timeEnd("내가 푼 문제");

// 선생님이 푼 방법
function solution(n, k, card) {
  let answer;

  let tmp = new Set();

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        tmp.add(card[i] + card[j] + card[k]);
      }
    }
  }

  let a = Array.from(tmp).sort((a, b) => b - a);
  answer = a[k - 1];

  return answer;
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.time("선생님이 푼 방법");
console.log(solution(10, 3, arr));
console.timeEnd("선생님이 푼 방법");
