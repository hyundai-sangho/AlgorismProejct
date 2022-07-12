function 문제(십부제_요일, 숫자배열) {
  /* 내 풀이 
  let 답 = 0;

  for (const element of 숫자배열) {
    if (element % 10 === 십부제_요일) {
      답++;
    }
  }

  return 답;
  */
  /* 선생님 풀이

  let answer = 0;
  for (let x of arr) {
    if (x % 10 === day) answer++;
  }

  return answer;
}
*/
}

let 숫자배열 = [25, 23, 11, 47, 53, 17, 33];
console.log(문제(3, 숫자배열));
