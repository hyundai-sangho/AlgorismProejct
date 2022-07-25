// 내가 푼 방법
function 문제(입력값) {
  let 답;
  let 입력값길이 = 입력값.length;
  let 입력값의반 = 입력값길이 / 2;
  let 문자열값1, 문자열값2;

  if (입력값길이 % 2 != 0) {
    console.log("문자열 길이 홀수");
    console.log(입력값.substr(0, 입력값의반));
    console.log(입력값.substr(-입력값의반));
    문자열값1 = 입력값.substr(0, 입력값의반).toLowerCase();
    문자열값2 = 입력값.substr(입력값의반 + 1).toLowerCase();

    let 문자열분해정렬재결합1 = 문자열값1.split("").sort().join("");
    let 문자열분해정렬재결합2 = 문자열값2.split("").sort().join("");

    if (문자열분해정렬재결합1 === 문자열분해정렬재결합2) {
      답 = "Yes";
    } else {
      답 = "No";
    }
  } else {
    console.log("문자열 길이 짝수");
    console.log(입력값.substr(0, 입력값의반));
    console.log(입력값.substr(입력값의반));

    문자열값1 = 입력값.substr(0, 입력값의반).toLowerCase();
    문자열값2 = 입력값.substr(입력값의반).toLowerCase();

    let 문자열분해정렬재결합1 = 문자열값1.split("").sort().join("");
    let 문자열분해정렬재결합2 = 문자열값2.split("").sort().join("");

    if (문자열분해정렬재결합1 === 문자열분해정렬재결합2) {
      답 = "Yes";
    } else {
      답 = "No";
    }
  }

  return 답;
}

let 입력문자열 = "goo2G";

console.time("내가 푼 방법");
console.log(문제(입력문자열));
console.timeEnd("내가 푼 방법");

// 선생님이 푼 방법
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();

  // 방법 1.
  /* let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] !== s[len - i - 1]) return "NO";
  }
 */

  // 방법 2.
  if (s.split("").reverse().join("") !== s) return "NO";

  return answer;
}

let str = "gooG";

console.time("선생님이 푼 방법");
console.log(solution(str));
console.timeEnd("선생님이 푼 방법");
