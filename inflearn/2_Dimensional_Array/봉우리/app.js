let arr = [
	[5, 3, 7, 2, 3],
	[3, 7, 1, 6, 1],
	[7, 2, 5, 3, 4],
	[4, 3, 6, 4, 1],
	[8, 7, 3, 5, 2],
];
let n = arr.length;
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let answer = 0;

for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		let flag = 1; // 봉우리인지 알려주는 신호 변수
		for (let k = 0; k < 4; k++) {
			let nx = i + dx[k]; // 행 좌표 탐색
			let ny = j + dy[k]; // 열 좌표 탐색
			// 봉우리 인지 판단하는 로직
			if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
				flag = 0;
				break;
			}
		}
		if (flag) answer++;
	}
}

console.log(answer);
