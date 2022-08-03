// 내가 푼 방법
function 문제(졸업선물예산총액, 살수있는상품데이터) {
  let 답 = 0;

  let 임시배열1 = [];
  let 임시배열2 = [];

  for (let i = 0; i < 살수있는상품데이터.length; i++) {
    for (let j = 0; j < 살수있는상품데이터[i].length; j++) {
      if (j === 0) 임시배열1.push([살수있는상품데이터[i][j] / 2 + 살수있는상품데이터[i][j + 1]]);
    }
  }

  for (let i = 0; i < 살수있는상품데이터.length; i++) {
    for (let j = 0; j < 살수있는상품데이터[i].length; j++) {
      if (j === 0) 임시배열2.push([살수있는상품데이터[i][j] + 살수있는상품데이터[i][j + 1]]);
    }
  }

  for (let i = 0; i < 임시배열1.length; i++) {
    졸업선물예산총액 = 28;
    답 = 0;
    for (let j = 0; j < 임시배열1.length; j++) {
      if (j === 0) {
        졸업선물예산총액 -= 임시배열1[i][0];
        답++;
      } else {
        졸업선물예산총액 -= 임시배열2[j][0];
        // console.log(i, j);
        답++;
      }

      if (졸업선물예산총액 === 0) {
        // console.log("정답: " + i, j);
        break;
      }
    }
    // console.log(졸업선물예산총액);
  }

  // console.log(임시배열1);
  // console.log(임시배열2);

  return 답 + "명";
}

let 졸업선물상품가격과배송비데이터 = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.time("내가 푼 방법");
console.log(문제(28, 졸업선물상품가격과배송비데이터));
console.timeEnd("내가 푼 방법");

// 선생님이 푼 방법
function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let cnt = 1;

    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.time("선생님이 푼 방법");
console.log(solution(28, arr));
console.timeEnd("선생님이 푼 방법");
