// 내가 푼 방법
function 문제(입력문자열) {
  // 방법 1. toUpperCase()함수를 이용해서 문자열 전체를 대문자로 한방에 변경
  // let 답;
  // 입력문자열 = 입력문자열.toUpperCase();
  // 답 = 입력문자열;

  // 방법 2. 아스키코드 값으로 대문자 구분해서 대문자면 answer에 저장
  // 대문자가 아니라면 소문자를 대문자로 변경 후에 answr에 저장
  let 답 = "";
  for (let 입력문자 of 입력문자열) {
    let 아스키코드값 = 입력문자.charCodeAt();

    if (아스키코드값 >= 65 && 아스키코드값 <= 90) {
      답 += 입력문자;
    } else {
      답 += 입력문자.toUpperCase();
    }
  }

  return 답;
}

let 입력문자열 = "ItisTimeToStudy";
console.log(문제(입력문자열));

// // 선생님이 푼 방법
function solution(s) {
  let answer = "";

  //   /* 방법 1. 입력문자가 소문자라면 대문자로 변경해서 answer 변수에 저장
  //   // 소문자가 아니면 변경 없이 그냥 answer에 저장
  //   for (let x of s) {
  //     if (x === x.toLowerCase()) {
  //       answer += x.toUpperCase();
  //     } else {
  //       answer += x;
  //     }
  //   }
  //   */

  //  방법 2. 아스키코드 값으로 소문자만 구분해서 소문자면 32를 빼서 대문자 아스키코드 값으로 변경 후에
  //  String.fromCharCode()함수로 문자로 변환 후에 answer 변수에 저장하고
  //  나머지 대문자는 그대로 answer에 저장
  for (let x of s) {
    let num = x.charCodeAt();
    if (num > 97 && num <= 122) {
      answer += String.fromCharCode(num - 32);
    } else {
      answer += x;
    }
  }

  return answer;
}

let str = "ItisTimeToStudy";
console.log(solution(str));
