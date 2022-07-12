function 문제(난쟁이_키배열) {
  /* 내가 푼 방법 
  // 변수 선언 초기화
  let 답 = [];
  let 총합 = 0;
  let 총몇명;

  // 난쟁이 키배열에 있는 사람키 하나하나 forEach로 돌려서 전부 더하기
  난쟁이_키배열.forEach((난쟁이키) => {
    총합 = 총합 + 난쟁이키;
  });

  // 이중 for문을 써서 총합에서 키배열
  // 순번대로 하나하나 빼서 총합이 100 나올 때 까지 돌리기
  for (let i = 0; i < 난쟁이_키배열.length; i++) {
    for (let j = 0; j < 난쟁이_키배열.length; j++) {
      // 첫번째 for문 배열 값과 두번째 for문 배열 값이 같지 않을 때만 계산하기
      if (i !== j) {
        if (총합 - (난쟁이_키배열[i] + 난쟁이_키배열[j]) == 100) {
          // 총합이 100이 되면 답 배열에 난쟁이 키배열 값 넣기
          답.push(난쟁이_키배열[i]);
          답.push(난쟁이_키배열[j]);
        }
      }
    }
  }

  // 답 배열에 들어있는 중복값 new Set으로 제거
  답 = [...new Set(답)];

  // 난쟁이가 아닌 사람 수 구하기
  총몇명 = 답.length + "명";

  // return 값은 답 배열 값과, 난쟁이가 아닌 사람의 수 함께 리턴
  return {
    답: 답,
    총몇명: 총몇명,
  };
  */
  /* 선생님이 푼 방법 */
  /* 
  let answer = arr;
  let sum = arr.reduce((a, b) => a + b, 0);
  console.log(arr);
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (arr[i] + arr[j]) === 100) {
        arr.splice(j, 1);
        arr.splice(i, 1);
      }
    }
  }

  return answer;
  */
}

let 난쟁이_키배열 = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(문제(난쟁이_키배열));
