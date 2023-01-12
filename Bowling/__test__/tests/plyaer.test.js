const Game = require('../js/game');
const Player = require('../js/player');
const Frame = require('../js/frame');

test('add player and get players', () => { 
  let g = new Game();
  
  g.addPlayer('9h0st')
  g.addPlayer('b')
  
  expect(g.getPlayers()).toBe(2) 
})

test('get Player score', () => {    
  let p = new Player('9h0st')

  p.addFrame(new Frame(5, 3));
  p.addFrame(new Frame(4, 3));
  
  expect(p.calcualteTotalScore()).toBe(15);
})