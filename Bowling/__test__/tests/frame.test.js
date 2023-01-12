const Game = require('../js/game');
const Player = require('../js/player');
const Frame = require('../js/frame');

test('get total score in a frame', () => {
  let f1 = new Frame(1, 0)
  let f2 = new Frame(10, 0) 

  expect(f1.getFrameScore()).toBe(1)
  expect(f2.getFrameScore()).toBe(10)
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

test('calculate normal', () => { 
  let p = new Player('test')
  let f1 = new Frame(2,5)
  let f2 = new Frame(2,0)

  p.addFrame(f1);
  p.addFrame(f2);

  let expectScore = p.calcualteTotalScore();
  expect(expectScore).toBe(9)
 })

// 2-1. spare -> normal: 현재 프레임의 모든(1,2) 점수 + 다음 프레임의 첫번째 점수 까지
test('calculate spare', () => {
  let p = new Player('test')
  
  let f1 = new Frame(3,7)
  let f2 = new Frame(5,4)

  p.addFrame(f1);
  p.addFrame(f2);
  
  if (f1.isSpare()) {
    let score = f1.getFirstScore() + f1.getSecondScore() + f2.getFirstScore();
    f1.setFrameScore(score);
  }

  let expectScore = f1.getFrameScore();
  expect(expectScore).toBe(15);
})

// 2-2. strike -> normal: frame(n).fristScore + frame(n).secondScore 까지 누적
test('strike -> normal test', () => {
  let p = new Player('test');
  let f1 = new Frame(10, 0); //<- strike 되어야 함!
  let f2 = new Frame(5, 4);

  p.addFrame(f1);
  p.addFrame(f2);

  if (f1.isStrike()) { //<- strike 되어야 함!
    f1.setFrameScore(f1.getFirstScore() + f2.getFirstScore() + f2.getSecondScore());
  }  

  expect(f1.getFrameScore()).toBe(19);
})

// 3-1. strike -> strike -> normal: frame(n).firstScore + frame(n+1).fristScore + frame(n+2).firstScore + frame(n+2).secondScore
test('strike -> strike -> normal test', () => { 
  let p2 = new Player('test2');
  let p2f1 = new Frame(10, 0);
  let p2f2 = new Frame(10, 0);
  let p2f3 = new Frame(1, 4);

  p2.addFrame(p2f1);
  p2.addFrame(p2f2);
  p2.addFrame(p2f3);

  if (p2f1.isStrike()) { //<- strike 되어야 함!
    if (p2f2.isStrike()) {
      p2f1.setFrameScore(p2f1.getFirstScore() + p2f2.getFirstScore() + p2f3.getFirstScore());
    }
    else {
      p2f1.setFrameScore(p2f1.getFirstScore() + p2f2.getFirstScore() + p2f2.getSecondScore());
    }
  }  
  expect(p2f1.getFrameScore()).toBe(21);
})

// 3-2. strike -> spare: 
test('should first', () => { 

})