function solution(n) {
  let answer;

  answer = Math.ceil(n / 12);

  return answer;
}

console.log("필요한 연필 다스는 " + solution(178) + "다스");
