const Grace = new Fighter("Grace");
const Ulder = new Paladin("Ulder");
const Moana = new Monk("Moana");
const Draven = new Berzerker("Draven");
const Carl = new Assassin("Carl");
const Luffy = new Pirate("Luffy");
const Naruto = new Ninja("Naruto");

let players = [Grace, Ulder, Moana, Draven, Carl, Luffy, Naruto ];

const GAME = new Game(players);

alert("Bienvenue sur le Battle Royal de THP!");
alert("C'est bon, on est partit ?");

while (GAME.turnLeft > 0 && !GAME.DidSomeoneWin()) {
  GAME.newTurn();
  let turn = new Turn(players, GAME.turnLeft);
  turn.startTurn();
  turn.turnPlay();
}

GAME.gameOver();
