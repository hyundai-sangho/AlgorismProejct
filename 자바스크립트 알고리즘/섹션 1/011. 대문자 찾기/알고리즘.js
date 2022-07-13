// 내가 푼 방법

function 문제(입력문자열) {
  let 답 = 0;
  let 대문자갯수 = 0;

  for (const 입력문자 of 입력문자열) {
    if (입력문자 == 입력문자.toUpperCase()) {
      대문자갯수++;
    }
  }

  답 = 대문자갯수;

  return 답;
}

let 입력문자열 = "KoreaTimeGood";
console.log(문제(입력문자열));

// 선생님이 푼 방법

function solution(s) {
  let answer = 0;

  // 방법 1. toUpperCase()함수를 이용해서
  // 입력문자와 동일한 문자를 찾아 대문자 갯수 카운팅

  // for (let x of s) {
  //   if (x === x.toUpperCase()) answer++;
  // }

  // 방법 2. 아스키코드 값으로 대문자 구분해서 카운팅
  for (let x of s) {
    let num = x.charCodeAt();

    // 대문자는 아스키코드 65 ~ 90 사이이기 때문에
    // 그 사이의 숫자가 나오면 대문자라 여기고 숫자 카운팅
    if (num >= 65 && num <= 90) answer++;
  }

  return answer;
}

let str = "KoreaTimeGood";
console.log(solution(str));
