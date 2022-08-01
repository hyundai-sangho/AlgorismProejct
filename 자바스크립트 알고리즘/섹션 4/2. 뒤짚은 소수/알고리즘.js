// 내가 푼 방법
function 뒤짚은소수(입력받은값) {
  let 답 = [];
  let 뒤짚은값 = 0;
  let 증가값 = 0;

  for (const element of 입력받은값) {
    증가값 = 0;
    뒤짚은값 = element.toString().split("").reverse().join("").replace(/^0+/, "");

    if (뒤짚은값 == 2 || 뒤짚은값 == 3) {
      답.push(뒤짚은값);
    }

    if (뒤짚은값 > 9) {
      for (let i = 1; i < 10; i++) {
        if (뒤짚은값 % i === 0) {
          증가값++;
        }
      }
      if (뒤짚은값 % 뒤짚은값 === 0) 증가값++;
    } else if (뒤짚은값 > 3 && 뒤짚은값 < 10) {
      for (let i = 1; i < 10; i++) {
        if (뒤짚은값 % i === 0) {
          증가값++;
        }
      }
    }

    if (증가값 === 2) {
      답.push(뒤짚은값);
    }
  }

  답 = 답.map((숫자) => Number(숫자));

  return 답;
}

let 숫자배열입력 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.time("내가 푼 방법");
console.log(뒤짚은소수(숫자배열입력));
console.timeEnd("내가 푼 방법");

// 선생님이 푼 방법
function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function solution(arr) {
  let answer = [];

  for (let x of arr) {
    // 방법 1.
    // let res = 0;
    // while (x) {
    //   let t = x % 10;
    //   res = res * 10 + t;
    //   x = parseInt(x / 10);
    // }

    // 방법 2.
    let res = Number(x.toString().split("").reverse().join(""));
    if (isPrime(res)) answer.push(res);
  }

  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.time("선생님이 푼 방법");
console.log(solution(arr));
console.timeEnd("선생님이 푼 방법");
