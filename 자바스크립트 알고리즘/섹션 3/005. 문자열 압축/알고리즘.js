// 내가 푼 방법
function 문제(입력값) {
  let 답 = [];
  let 기본비교값 = 입력값[0];
  let 문자반복횟수 = 1;

  for (let i = 0; i < 입력값.length; i++) {
    if (i > 0 && 기본비교값 === 입력값[i]) {
      문자반복횟수 += 1;
      if (기본비교값 !== 입력값[i + 1]) {
        답.push(입력값[i] + 문자반복횟수);
      }
    } else if (i > 0 && 기본비교값 !== 입력값[i]) {
      문자반복횟수 = 1;
      기본비교값 = 입력값[i];
      if (기본비교값 !== 입력값[i + 1]) {
        답.push(입력값[i]);
      }
    }
  }

  // 배열로 담긴 값을 join() 함수를 이용해 문자열로 변환
  답 = 답.join("");

  return 답;
}

let 입력문자열 = "KKHSSSSSSSE";
console.time("내가 푼 방법");
console.log(문제(입력문자열));
console.timeEnd("내가 푼 방법");

// 선생님이 푼 방법
function solution(s) {
  let answer = "";
  let cnt = 1;
  s = s + " ";

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];

      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }

  return answer;
}

let str = "KKHSSSSSSSE";
console.time("선생님이 푼 방법");
console.log(solution(str));
console.timeEnd("선생님이 푼 방법");
