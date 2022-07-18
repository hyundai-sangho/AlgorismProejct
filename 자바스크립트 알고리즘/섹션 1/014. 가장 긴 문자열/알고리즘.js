// 내가 푼 방법
// 문제를 제대로 이해 못해서 잘못 푼 문제
// 문제는 문자 배열 중에 문자의 길이가 가장 긴 문자를 반환해야 하는데
// 가장 긴 문자의 숫자를 반환하는 문제라 착각해서 틀림
function 문제(입력문자열) {
  let 답 = [];

  for (let 문자 of 입력문자열) {
    답.push(문자.length);
  }

  답 = Math.max(...답);

  return 답;
}

let 입력문자열 = ["teacher", "time", "student", "beautiful", "good"];
console.log(문제(입력문자열));

// 선생님이 푼 방법
function solution(s) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}

let str = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(str));
