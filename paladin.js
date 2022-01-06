class Paladin extends Character {
  constructor(name, hp = 16, dmg = 3, mana = 160, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
    this.ult = "Healing lighting";
  }

  ultMove(victim) {
    this.dmg = 4;
    alert(`${this.name} utilise ${this.ult} sur ${victim.name}`);
    this.dealDamage(victim);
    alert(`${this.name} Regagne 5 hp.`);
    this.dmg = 3;
    this.hp += 5;
    this.mana -= 40;
  }

  seeUltMove() {
    alert(`${this.ult}\n- Inflige 4 dégats.\n- Permet de se soigner de 5 hp.\n- Coûte 40 de mana.`)
  }
}
