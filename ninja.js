class Ninja extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, hp = 11, dmg = 5, mana = 70, status, hasplayed);
    this.ult = 'Rasengan';
  }

  ultMove(victim) {
    this.dmg = 9;
    alert(`${this.name} utilise ${this.ult} sur ${victim.name}`);
    this.dealDamage(victim);
    this.dmg = 5;
    this.mana -= 30;
    this.hp -= 3;
  }

  seeUltMove() {
    alert(`${this.ult}\n- Inflige 9 points de dégats à l'ennemi.\n- Coûte 3 points de vie.\n- Coûte 30 de mana`);
  }
}