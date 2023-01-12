const Game = require('../js/game');
const Player = require('../js/player');
const Frame = require('../js/frame');

test('get total score in a frame', () => {
  let f = new Frame(-1, 0);
  expect(f.getFrameScore()).toBe(-1)
})

test('check for spare', () => {
  let firstFrame = new Frame(10, 0)
  let secondFrame = new Frame(5, 5)
  let thirdFrame = new Frame(0, 10)

  expect(firstFrame.isSpare()).toBe(false)
  expect(secondFrame.isSpare()).toBe(true)
  expect(thirdFrame.isSpare()).toBe(true)
})

test('check for strike', () => {
  let first = new Frame(10, 0)
  let second = new Frame(0, 4)
  expect(first.isStrike()).toBe(true);
  expect(second.isStrike()).toBe(false);
})

test('strike score calculator', () => {
  
})

test('spair score calculator', () => {

})