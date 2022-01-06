class Turn extends Game {
  constructor(players, turnLeft) {
    super(players, turnLeft );
    this.turnNumber = 10 - turnLeft;
  }

  startTurn() {
    alert(`C'est ton tour ${this.turnNumber}`);
    this.setHasplayedToFalse(this.playersAlive());
    this.deactivateFigthersUlt(this.playersAlive());
    this.performAssassination(this.playersAlive());
  }

  pickPlayerRandomly(players) {
    let randomPlayer = players[Math.floor(Math.random() * players.length)];
    alert(`${randomPlayer.name}, c'est ton tour`);
    return randomPlayer;
  }

  playerActionsMenu(player) {
    let playerResponse = prompt(`${player.name}, que veux-tu faire ?\nAppuyer [0] pour voir tes stats \nAppuyer [1] pour voir les stats des autres joueurs. \nAppuyer [2] pour attaquer un joueur. \nAppuyer [3] pour voir ton move spécial. \nAppuyer [4] pour utiliser ton move spécial.`);

    switch (playerResponse) {
      case '0':
        this.watchStatsCurrentPlayer(player);
        this.playerActionsMenu(player);
      break;

      case '1':
        this.watchStatsOtherPlayers(player);
        this.playerActionsMenu(player);
      break;

      case '2':
        player.dealDamage(this.chooseTarget(player))     
      break;

      case '3':
        player.seeUltMove();     
        this.playerActionsMenu(player);
      break;

      case '4':
        if (player.constructor.name == "Fighter" || player.constructor.name == "Paladin" || player.constructor.name == "Pirate"|| player.constructor.name == "Ninja" || player.constructor.name == "Assassin") {
          player.ultMove(this.chooseTarget(player));
        } else {
          player.ultMove();
        }    
      break;
       
      default:
        alert("Je n'ai pas comprit, recommencez!");
        this.playerActionsMenu(player);
    }

    player.hasplayed = true;
  }

  chooseTarget(player) {
    //Removing oneself fron the targets 
    let targets = this.playersAlive().filter(target => target != player);

    //Array of indexes of target, later used to match the user response with targets array
    let indexes = Array.from(Array(targets.length).keys());

    //Code to get the whole question in one prompt only
    let question = `${player.name}, Qui voulez vous attaquer ?`;
    for (let i in targets) {
      question += `\nAppuyer [${i}] pour attaquer ${targets[i].name}`;
    }
    let playerResponse = prompt(question);


    if (indexes.includes(parseInt(playerResponse))) {
      return targets[parseInt(playerResponse)];
    } else {
      alert("Je n'ai pas comprit, recommencez!");
      this.chooseTarget(player);
    }
  }

  playersAliveAndHaventPlayed() {
    return this.playersAlive().filter(player => player.hasplayed == false);
  }

  turnPlay() {
    while (this.playersAliveAndHaventPlayed().length > 0 && this.playersAlive().length > 1) {
      this.playerActionsMenu(this.pickPlayerRandomly(this.playersAliveAndHaventPlayed()));
    }
    this.deactivateAssassinsUlt(this.playersAlive());
  }

  watchStatsOtherPlayers(player) {
    this.watchStats(this.playersAlive().filter(p => p != player))
  }

  watchStatsCurrentPlayer(player) {
    this.watchStats(this.playersAlive().filter(p => p == player))
  }

  setHasplayedToFalse(players) {
    players.map(player => player.hasplayed = false);
  }

  deactivateFigthersUlt(players) {
    players.filter(player => player.constructor.name == 'Fighter').map(player => player.resetUlt());
  }

  deactivateAssassinsUlt(players) {
    players.filter(player => player.constructor.name == 'Assassin').map(player => player.resetUlt());
  }

  performAssassination(players) {
    players.filter(player => player.constructor.name == 'Assassin').filter(player => player.target != 0).map(player => player.assassination());
  }
}