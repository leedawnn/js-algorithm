/* 점수계산

OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제를 말한다. 여러 개의 OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는 가산점을 주기 위해서 다음과 같이 점수 계산을 하기로 하였다. 1번 문제가 맞는 경우에는 1점으로 계산한다. 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산한다. 또한, 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산한다. 틀린 문제는 0점으로 계산한다.
예를 들어, 아래와 같이 10개의 OX 문제에서 답이 맞은 문제의 경우에는 1로 표시하고, 틀린 경우에는 0으로 표시하였을 때, 점수 계산은 아래 표와 같이 계산되어, 총 점수는 1+1+2+3+1+2=10점이다.
*/

let fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().trim().split('\n');

let num = Number(input[0]);
let question = input[1].split(' ').map(Number);
let cnt = (score = 0);

for (let i = 0; i < num; i++) {
  if (question[i] === 1) {
    cnt += 1;
  } else {
    cnt = 0;
  }
  score += cnt;
}

console.log(score);
