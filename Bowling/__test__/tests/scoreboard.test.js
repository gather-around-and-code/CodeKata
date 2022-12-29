const Game = require('../js/game');
const Player = require('../js/player');
const Frame = require('../js/frame');

test('add player and get players', () => { 
  let g = new Game();
  
  g.addPlayer('9h0st')
  g.addPlayer('b')
  
  expect(g.getPlayers()).toBe(2) 
})
  
// improve
test('get Player score', () => {    
  let p = new Player('9h0st')

  expect(p.getScore()).toBe(300);
})

// improve
test('get Current frame', () => {
  let g = new Player('b');

  expect(g.getCurrentFrame()).toBe(2)
})

test('get total score in a frame', () => {
  let f = new Frame(0, 0);
  expect(f.getTotalScore()).toBe(0)
})
