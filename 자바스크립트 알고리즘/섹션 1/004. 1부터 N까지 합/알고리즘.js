function 문제(받은숫자) {
  let 답 = 0;

  for (let i = 1; i <= 받은숫자; i++) {
    답 = 답 + i;
  }

  return 답;
}

console.log(문제(6));
