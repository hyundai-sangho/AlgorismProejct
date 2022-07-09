function solution(연필수) {
  let 답;

  답 = Math.ceil(연필수 / 12);

  return 답;
}

console.log("필요한 연필 다스는 " + solution(178) + "다스");
