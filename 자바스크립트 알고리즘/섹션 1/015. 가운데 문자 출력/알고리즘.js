// 내가 푼 방법

function 문제(입력문자) {
  let 답;
  let 입력문자길이 = 입력문자.length;

  if (입력문자길이 % 2 == 0) {
    답 = 입력문자[입력문자길이 / 2 - 1] + 입력문자[입력문자길이 / 2];
  } else {
    답 = 입력문자[Math.floor(입력문자길이 / 2)];
  }

  return 답;
}

console.log(문제("study"));

// 선생님이 푼 방법
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);

  // 1. substring 함수 사용
  // if (s.length % 2 == 1) {
  //   answer = s.substring(mid, mid + 1);
  // } else {
  //   answer = s.substring(mid - 1, mid + 1);
  // }

  // 2. substr 함수 사용
  if (s.length % 2 == 1) {
    answer = s.substr(mid, 1);
  } else {
    answer = s.substr(mid - 1, 2);
  }

  return answer;
}

console.log(solution("study"));
