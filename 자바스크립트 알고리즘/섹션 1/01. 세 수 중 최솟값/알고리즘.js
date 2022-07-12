function 문제(값1, 값2, 값3) {
  let 최솟값;

  if (값1 < 값2) 최솟값 = 값1;
  else 최솟값 = 값2;

  if (값3 < 최솟값) 최솟값 = 값3;

  return 최솟값;
}

console.log(문제(12, 5, 221));
