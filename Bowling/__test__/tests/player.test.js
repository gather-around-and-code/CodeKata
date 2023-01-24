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

test('calculate score', () => {
  let p = new Player('test')

  p.addFrame(new Frame(10, 0)) // 30
  p.addFrame(new Frame(9, 1)) 
  p.addFrame(new Frame(10, 0))

  let pins = [];

  const first = p.getFirstScore(1);
  const second = p.getFirstScore(2);
  const third = p.getSecondScore(2);

  pins.push(first, second, third);

  const result = p.calculateScore(pins);
  expect(result).toBe(20);
})

test('total score', () => {
  let p = new Player('test');

  p.addFrame(new Frame(9, 1)); // 17
  p.addFrame(new Frame(7, 2));
  p.addFrame(new Frame(7, 1));

  let pins = p.getPins(1)
  let FirstFrameScore = p.calculateScore(pins);
  
  expect(FirstFrameScore).toBe(17);
})