class Assassin extends Character {
  constructor(name, hp = 6, dmg = 6, mana = 20, status, hasplayed) {
    super(name, hp, dmg, mana, status, hasplayed);
    this.ult = "Shadow hit";
    this.target = 0;
    this.successful = 0;
  }

  ultMove(victim) {
    alert(`${this.name} a utlisé ${this.ult} sur ${victim.name}`);
    this.mana -= 20;
    this.target = victim;
  }

  seeUltMove() {
    alert(
      `${this.ult}\n- Cette attaque prend effet au prochain tour, et fait 7 points de dégats à l'ennemi.\n- Si cette attaque réussi, tous les dégats sont annulés pour le prochain tour.\n- Si cela échoue, l'assassin perd 7 hp.\n- Coûte 20 de mana.`
    );
  }


  takeDamage(damage) {
    if (this.successful == 1) {
      damage = 0;
      alert(
        `${this.name} utilise l'effet spécial de ${this.ult} pour annuler l'attaque. \nIl ne reste plus que ${this.hp} hp à ${this.name}`
      );
    } else {
      this.hp -= damage;
      alert(
        `${this.name} reçois ${damage} points de dégats. \nIl ne reste plus que ${this.hp} hp à ${this.name}`
      );
    }
  }

  resetUlt() {
    this.successful = 0;
  }
}
