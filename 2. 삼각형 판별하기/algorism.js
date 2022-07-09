function solution(a, b, c) {
  let 답 = "예스";
  let 최댓값;
  let 총합 = a + b + c;

  if (a > b) 최댓값 = a;
  else 최댓값 = b;
  if (c > 최댓값) 최댓값 = c;
  if (총합 - 최댓값 <= 최댓값) 답 = "노";

  return 답;
}

console.log(solution(6, 7, 14));
