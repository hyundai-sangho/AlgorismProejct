// 내가 푼 방법
// 어떻게 풀긴 했지만 확실히
// 선생님이 한 방법이 for문 사용도 적어서
// 시간이나 메모리 잡아먹는 것도 적고 빠르다.
function 문제(입력값) {
  let 답1 = [],
    답2 = [],
    답3 = [];
  let 최종답 = [];
  let e값의위치 = [];

  // for 반복문으로 e의 위치 찾기
  for (let i = 0; i < 입력값.length; i++) {
    if (입력값[i] === "e") {
      e값의위치.push(i);
    }
  }

  // for 반복문으로 찾아낸 e의 위치와 문자열 인덱스 번호를 빼서
  // 답1, 답2, 답3 배열에 위의 계산한 값을 저장
  for (let i = 0; i < 입력값.length; i++) {
    답1.push(Math.abs(e값의위치[0] - i));
    답2.push(Math.abs(e값의위치[1] - i));
    답3.push(Math.abs(e값의위치[2] - i));
  }

  // for 반복문으로 답1, 답2, 답3을 비교해서 가장 작은 값만 추출해서
  // 최종답 배열에 저장
  for (let i = 0; i < 답1.length; i++) {
    if (답1[i] <= 답2[i]) {
      if (답1[i] <= 답3[i]) {
        최종답.push(답1[i]);
      } else {
        최종답.push(답3[i]);
      }
    } else if (답2[i] <= 답3[i]) {
      최종답.push(답2[i]);
    } else {
      최종답.push(답3[i]);
    }
  }

  return 최종답;
}

let 입력문자열 = "teachermode";
console.time("내가 푼 방법");
console.log(문제(입력문자열));
console.timeEnd("내가 푼 방법");

// 선생님이 푼 방법
function solution(s, t) {
  let answer = [];
  let p = 1000;

  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

let str = "teachermode";
console.time("선생님이 푼 방법");
console.log(solution(str, "e"));
console.timeEnd("선생님이 푼 방법");
