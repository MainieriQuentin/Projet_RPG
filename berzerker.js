class Berzerker extends Character {
  constructor(name, hp = 8, dmg = 4, mana = 0, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
    this.ult = "Rage";
  }

  ultMove() {
    this.dmg += 1;
    this.hp -= 1;
    alert(
      `${this.name} a utilisé ${this.ult}.\n ${this.name} augmente de 1 point de dégat et perd 1 hp\n `
    );
  }

  seeUltMove() {
    alert(
      `${this.ult}\n- Augmente les points de dégats de 1.\n- Coûte 1 hp.\n- Cet ult est gratuit en mana.\n`
    );
  }
}3