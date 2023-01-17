const Game = require('../js/game');
const Player = require('../js/player');
const Frame = require('../js/frame');

test('add player and get players', () => { 
  let g = new Game();
  
  g.addPlayer('9h0st')
  g.addPlayer('b')
  
  expect(g.getPlayers()).toBe(2) 
})

test('get Player current frame number', () => {
  let p = new Player('test')

  p.addFrame(new Frame(10, 0));
  p.addFrame(new Frame(10, 0));
  p.addFrame(new Frame(10, 0));

  expect(p.getCurrentFrameNumber()).toBe(4);
})

test('strike -> x', () => {
  let p = new Player('test')

  p.addFrame(new Frame(10, 0))
  p.addFrame(new Frame(10, 0))
  
  expect(p.getFrameScore(0)).toBe(undefined);
})

test('turkey score calculate', () => {
  let p = new Player('test')

  p.addFrame(new Frame(10, 0))
  p.addFrame(new Frame(10, 0))
  p.addFrame(new Frame(10, 0))

  //p.addFrame(new Frame(10, 10, 10))

  let frames = p.getFrames();

  for (let i = 0; i < 10; i++) {
    if (i < 8){
      if (frames[i].isStrike()) {
        if (frames[i + 1].isStrike() && frames[i+2].isStrike()) {
            frames[i].setScore(30);
        } else {
            frames[i].setScore(20 + frames[i + 2].getFirstScore())
        }
        }
      }
    }

  expect(p.getFrameScore(0)).toBe(30);
})

