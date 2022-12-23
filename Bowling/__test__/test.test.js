describe("Bowling score board tests", () => {
	// test
	// player -> pin -> getpin -> IsStrike -> score board -> score board show
	// 플레이어 => 공을 굴린다 => 핀이 넘어진다 => 스트라이크? => 점수를 계산한다 => 점수를 표시한다.
	// 게임 단위? 플레이 단위? 플레이는 몇명?
	function calculateScores(frame) {
		// 현재 프레임에 쓰러진 핀 담기
		let pin = frame[0].split(',');

		// 프레임에 점수 계산하기(#2 스코어보드 이미지)
		let score = 0;
		for(let i = 0; i < pin.length; i++){
			score += parseInt(pin[i])
		}

		if (score > 10){
			return -1;
		}
		// 나와라 점수!
		return score;
	}
	
	test("check frame score", () => {
		let frame = [['1,2'], ['2,3'], ['10,0']];

		expect(calculateScores(frame[0])).toBe(3);
		expect(calculateScores(frame[1])).toBe(5);
		expect(calculateScores(frame[2])).toBe(10);
	});

	test("check validation score", () => {
		let frame = [['5,6']];

		expect(calculateScores(frame[0])).toBe(-1);
	})
});

// https://github.com/gather-around-and-code/CodeKata/issues/2
// git commit -am "#2"