let 문제 = (입력문자열) => {
  let 답 = "";

  for (let 입력문자 of 입력문자열) {
    if (입력문자 === 입력문자.toUpperCase()) {
      답 += 입력문자.toLowerCase();
    } else {
      답 += 입력문자.toUpperCase();
    }
  }

  return 답;
};

const 입력문자열 = "StuDY";
console.log(문제(입력문자열));
