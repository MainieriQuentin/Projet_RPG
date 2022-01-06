class Monk extends Character {
  constructor(name, hp = 8, dmg = 2, mana = 200, status, hasplayed){
    super(name, hp, dmg, mana, status, hasplayed);
    this.ult = "Heal";
  }

  ultMove(){
    this.mana -= 25;
    this.hp += 8;
    alert(`${this.name} a utilisé ${this.ult}, il récupère 8 hp.`)
    alert(`${this.ult} lui coûte 25 de mana.`)
  }



  seeUltMove() {
    alert(`${this.ult}\n- Restaure 8 hp.\n- Coûte 25 de mana.`)
  }
}