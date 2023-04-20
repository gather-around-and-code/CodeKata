const Player = require("../js/player")

test('normal pin calculator', () => { 
  let p = new Player();
  
  p.addPins(5);
  p.addPins(4);

  expect(p.score()).toBe(9);
})

test('strike pin calculator', () => {
  let p = new Player();

  p.addPins(10);
  p.addPins(5);
  p.addPins(4);

  expect(p.score()).toBe(19);
  expect(p.frameScore(1)).toBe(19);
})