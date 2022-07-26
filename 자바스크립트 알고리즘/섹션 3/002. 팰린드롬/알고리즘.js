// 내가 푼 방법
function 문제(입력값) {
  let 답;

  // 치환 ===================================== //
  // 콤마 제거
  입력값 = 입력값.replace(/,/gi, "");
  // 콜론 제거
  입력값 = 입력값.replace(/:/gi, "");
  // 세미콜론 제거
  입력값 = 입력값.replace(/;/gi, "");
  // 문자열 안에 모든 공백 제거
  입력값 = 입력값.replace(/\s/gi, "");
  // 숫자 제거
  입력값 = 입력값.replace(/\d/gi, "");
  // 치환 ===================================== //

  // 입력값 전부 소문자로 변환
  입력값 = 입력값.toLowerCase();

  console.log(입력값);

  // 입력값의 첫번째 문자와 마지막 문자가 같은지 확인
  // 두번째 문자와 마지막 두번째 문자 비교 ...
  // 이런 식으로 순차적으로 같은지 비교해서 팰린드롬인지 확인
  // 팰린드롬이 아니라면 break로 루프를 빠져나감
  for (let i = 0; i < 입력값.length; i++) {
    if (입력값[i] === 입력값[입력값.length - 1 - i]) {
      답 = "Yes";
    } else {
      답 = "No";
      break;
    }
  }

  return 답;
}

let 입력문자열 = "found7, time: study; Yduts; emit, 7Dnuof";
console.time("내가 푼 방법");
console.log(문제(입력문자열));
console.timeEnd("내가 푼 방법");

// 선생님이 푼 방법
function solution(s) {
  let answer = "YES";

  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";

  return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof";

console.time("선생님이 푼 방법");
console.log(solution(str));
console.timeEnd("선생님이 푼 방법");
