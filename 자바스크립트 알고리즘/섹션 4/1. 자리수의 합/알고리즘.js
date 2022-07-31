// 내가 푼 방법
function 문제(입력값) {
  let 답 = [];
  let 입력 = 0;
  let 최댓값 = 0;
  let 최댓값위치 = [];
  let 최댓값2 = 0;

  for (const element of 입력값) {
    입력 = 0;
    for (let j = 0; j < element.toString().length; j++) {
      입력 += parseInt(element.toString()[j]);
    }
    답.push(입력);
  }

  for (let i = 0; i < 답.length; i++) {
    if (답[i] >= 최댓값) {
      최댓값 = 답[i];
      최댓값위치.push(i);
    }
  }

  console.log(최댓값위치);

  for (const element of 최댓값위치) {
    if (최댓값2 < parseInt(입력값[element].toString())) {
      최댓값2 = parseInt(입력값[element].toString());
    }
  }

  // console.log(Math.max(...답));
  // console.log(답.indexOf(Math.max(...답)));
  // 답 = 입력값.splice(답.indexOf(Math.max(...답)), 1);
  답 = 최댓값2;
  return 답;
}

let 입력할숫자배열 = [128, 460, 603, 40, 521, 137, 123];
console.time("내가 푼 방법");
console.log(문제(입력할숫자배열));
console.timeEnd("내가 푼 방법");

// 선생님이 푼 방법
function solution(n, arr) {
  let answer;
  let max = Number.MIN_SAFE_INTEGER;

  // 방법 1.
  // for (let x of arr) {
  //   let sum = 0;
  //   let tmp = x;

  //   while (tmp) {
  //     sum += tmp % 10;
  //     tmp = Math.floor(tmp / 10);
  //   }

  //   if (sum > max) {
  //     max = sum;
  //     answer = x;
  //   } else if (sum === max) {
  //     if (x > answer) answer = x;
  //   }
  // }

  for (let x of arr) {
    let sum = x
      .toString()
      .split("")
      .reduce((a, b) => a + Number(b), 0);

    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }

  return answer;
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.time("선생님이 푼 방법");
console.log(solution(7, arr));
console.timeEnd("선생님이 푼 방법");
