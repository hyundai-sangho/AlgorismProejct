function solution(숫자배열) {
  /* 
  // 푸는 방법 => 1번
  // 최소값 지정 후 배열을 for of로 돌려서 배열의 값 하나하나와
  // 최소값 비교 후 최소값 보다 작으면
  // 배열의 값을 최소값으로 지정

  // let 답;
  // let 최소값 = Number.MIN_SAFE_INTEGER;

  // for (const 요소 of 숫자배열) {
  //   if (요소 < 최소값) 최소값 = 요소;
  // }
  // 답 = 최소값;
  */

  // 푸는 방법 => 2번
  // Math.min.apply 함수로 한 번에 최소값 구하기
  // let 답 = Math.min.apply(null, 숫자배열);

  // 푸는 방법 => 3법
  // Math.min 함수로 한 번에 최소값 구하기
  // let 답 = Math.min(...숫자배열);

  return 답;
}

let 숫자배열 = [5, 7, 1, 3, 2, 9, 11];
console.log(solution(숫자배열));
