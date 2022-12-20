const exp = require("constants");

test('테스트 코드의 설명', () => {
	const test = 1;
	expect(test).toBe(1);
});

test("1 is 1", () => {
	expect(1).toBe(1);
});

test("abcd test", () => {
	const test = "abcd";
	expect(test).toEqual("abcd");
});

test('strike over 10 pin test', () => {
	const strike = function (pin) {
		if (pin === 10) {
			return "X";
		}
		else {
			pin.toString();
		}
	}

	const pin = 11;
	const result = strike(pin);
	expect(result).not.toBe("X");
});

test('IsStrike test', () => {
	const IsStrike = function (pin) {
		if (pin === 10) {
			return true;
		}
		return false;
	}

	expect(IsStrike(10)).toBeTruthy();
	expect(IsStrike(9)).toBeFalsy();
	expect(IsStrike(0)).toBeFalsy();
	expect(IsStrike(-10)).toBeFalsy();
});