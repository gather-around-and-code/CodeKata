describe("Bowling score board tests", () => {

	class gameBowling {
		frames = [];
		currentFrame = new frame();
		totalScore = 0;

		constructor() {
			this.frames = [new frame(), new frame(), new frame(), new frame(), new frame()];

			this.currentFrame = this.frames[0].frameNumber = 1;
		}

		getCurrnetFrame() {
			return this.currentFrame;
		}

		getFrameScore(frameNumber) {
			return 8;
		}

		getFinalScore() {
			//Todo: 최종 결과 도출
			return 10;
		}
	}

	class frame {
		frameNumber = 0;
		constructor() {
			const score = Array.from({ length: 3 }, () => new Number());
		}

		// To do
		isStrike(score) {
			return true;
		}
	}

	test("Get final Score", () => {
		const game = new gameBowling();
		var finalScore = game.getFinalScore();

		expect(finalScore).toBe(10);
	});

	test("Get Current frame number", () => {
		const game = new gameBowling();
		var currentFrameNumbr = game.getCurrnetFrame();

		expect(currentFrameNumbr).toBe(1);
	});

	test("get hit pin count", () => {
		const game = new gameBowling();
		const currentFrame = game.getCurrnetFrame();
		const isStrikebool = currentFrame.isStrike();

		expect(isStrikebool).toBeTruthy();
	});
	//
});