const Game = require('../js/game');
const Player = require('../js/player');
const Frame = require('../js/frame');

test('Perfect game', () => { 
  // 모든 프레임에서 strike
  let p = new Player("test");
  for (let i = 0 ; i < 11; i++) {
    p.addFrame(10, 0);
  }

  let pins = p.getPins(10)
  let expectScore = p.calculateScore(pins);

  expect(expectScore).toBe(300);
})