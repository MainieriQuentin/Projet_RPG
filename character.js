class Character {
  constructor(name, hp, dmg, mana, status = "playing", hasplayed = false) {
    this.name = name;
    this.hp = hp;
    this.dmg = dmg;
    this.mana = mana;
    this.status = status;
    this.hasplayed = hasplayed;
  }

  takeDamage(damage) {
    this.hp -= damage;
    alert(
      `${this.name} reçois ${damage} points de dégats. \nIl ne reste plus que ${this.hp} hp à ${this.name}`
    );
  }

  dealDamage(victim) {
    alert(
      `${this.name} a infligé ${this.dmg} points de dégats ${victim.name}.`
    );
    victim.takeDamage(this.dmg);

    if (this.didItKill(victim) == true) {
      this.mana += 20;
      victim.changeStatusToLoser();
      alert(
        `${this.name} gagne 20 points de mana pour avoir tué ${victim.name}.`
      );
    }
  }

  ultMove() {}

  seeUltMove() {}

  isCharacterKilled() {
    return this.hp <= 0 ? true : false;
  }

  changeStatusToLoser() {
    if (this.isCharacterKilled() == true) {
      this.status = "loser";
      alert(`${this.name} a été tué`);
    }
  }

  changeStatusToWinner() {
    if (this.isCharacterKilled() == false) {
      this.status = "winner";
      alert(`${this.name} a gagné`);
    }
  }

  didItKill(victim) {
    return victim.isCharacterKilled() == true ? true : false;
  }
}
