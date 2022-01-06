class Fighter extends Character {
  constructor(name, hp, dmg, mana, status, hasplayed) {
    super(name, (hp = 12), (dmg = 4), (mana = 40), status, hasplayed);
    this.ult = "Dark vision";
    this.ultactivated = false;
  }

  ultMove(victim) {
    this.dmg = 5;
    alert(`${this.name} a utilisé ${this.ult} sur ${victim.name}`);
    this.dealDamage(victim);
    this.dmg = 4;
    this.ultactivated = true;
  }


  seeUltMove() {
    alert(`${this.ult}\n- Cause 5 points de dégats.\n- Diminue les dégats de 2 points de dégats par coup, jusqu'à la fin du tour.`
    );
  }

  takeDamage(damage) {
    if (this.ultactivated == true) {
      damage -= 2;
      this.hp -= damage;
      alert(
        `${this.name} a utilisé ${this.ult} pour diminué les dégats. \n${this.name} prend seulement ${damage} points de dégats. \nIl ne reste plus que ${this.hp} hp à ${this.name}.`
      );
    } else {
      this.hp -= damage;
      alert(
        `${this.name} a prit ${damage} points de dégats. \nIl ne reste plus que ${this.hp} hp à ${this.name}`
      );
    }
  }

  resetUlt() {
    this.ultactivated = false;
  }
}
