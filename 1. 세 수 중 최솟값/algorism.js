function solution(num1, num2, num3) {
  let 최솟값;

  if (num1 < num2) 최솟값 = num1;
  else 최솟값 = num2;

  if (num3 < 최솟값) 최솟값 = num3;

  return 최솟값;
}

console.log(solution(12, 5, 221));
