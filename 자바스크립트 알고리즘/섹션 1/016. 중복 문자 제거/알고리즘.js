// 내가 푼 방법
function 문제(입력문자) {
  let 답 = "";

  for (const element of 입력문자) {
    if (답 == "") {
      답 = element;
    } else if (답.indexOf(element) == -1) {
      답 += element;
    }
  }

  return 답;
}

console.log(문제("ksekkset"));

// 선생님이 푼 방법
function solution(s) {
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) {
      answer += s[i];
    }
  }

  return answer;
}

console.log(solution("ksekkset"));
