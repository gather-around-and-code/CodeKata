const Game = require('../js/game');
const Player = require('../js/player');
const Frame = require('../js/frame');

test('add player and get players', () => { 
  let g = new Game();
  
  g.addPlayer('9h0st')
  g.addPlayer('b')
  
  expect(g.getPlayers()).toBe(2) 
})

test('get total score in a frame', () => {
  let f = new Frame(0, 0);
  expect(f.getTotalScore()).toBe(0)
})

test('get Player score', () => {    
  let p = new Player('9h0st')

  p.addFrame(new Frame(5, 3));
  p.addFrame(new Frame(4, 3));
  
  expect(p.calcualteTotalScore()).toBe(15);
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

test('get Current frame', () => {
  let p = new Player('b');

  expect(g.getCurrentFrame()).toBe(2)
})

test('adjustive frame score calculate', () => { 
  // https://tootock.tistory.com/5 -> 점수 계산
  // Spare = 그 다음의 프레임의 첫번쨰 투구에서 쓰러뜨린 피의 숫자까지 더한다.
  // Miss = 미스했을 경우 해당 프레임의 점수만 총점으로 기록된다.
  // Strike = 스트라이크의 경우 그 다음 프레임의 두 번째 투구까지 쓰러진 핀 수를 더한다. 
  // Double = 그 다음 프레임의 첫번째 투구한 핀의 수까지 더한 값이 총점
  // 10/0, 10/0, 10/0, 9/1, 8/0= 1프레임 30, 2프레임 59, 3프레임 점수는 79, 4프레임 점수는 97
  firstFrameScore = new Frame(9, 1) // 18
  secondFrameScore = new Frame(8, 0) // 26
  thirdFrameScore = new Frame(10, 0) // 54
  fourFrameScore = new Frame(10, 0) // 72
  fiveFrameScore = new Frame(8, 0) // 80
  sixFrameScore = new Frame(10, 0) // 99
  sevenFrameScore = new Frame(8, 1) // 108
  eightFrameScore = new Frame(9, 1) // 126
  nineFrameScore = new Frame(8, 1) // 135
  // tenFrameScore = new Frame(10, 9, 1) // 155

  expect(firstFrameScore.calcualteScore()).toBe(18)
  expect(secondFrameScore).toBe(26)
  expect(thirdFrameScore).toBe(54)
  expect(fourFrameScore).toBe(72)
  expect(fiveFrameScore).toBe(80)
  
})