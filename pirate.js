class Pirate extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, hp = 10, dmg = 2, mana = 200, status, hasplayed);
    this.ult = 'Gomu Gomu no RedHawk';
  }

  ultMove(victim) {
    this.dmg = 7;
    alert(`${this.name} utilise ${this.ult} sur ${victim.name}.`);
    this.dealDamage(victim);
    this.dmg = 2;
    this.mana -= 25;
  }

  seeUltMove() {
    alert(`${this.ult}\n- Inflige 7 de dégats à l'ennemi.\n- Coûte 25 de mana.`);
  }
}
