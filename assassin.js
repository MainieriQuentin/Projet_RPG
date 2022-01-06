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
    alert(`${this.ult}\n- Cette attaque prend effet au prochain tour, et cause 7 points de dégats à l'ennemi.\n- Si l'attaque est un succès, tous les dégats seront annulés pour le prochain tour.\n- S'il échoue, l'assassin perd 7 points de vie.\n- Cette attaque lui 20 points de mana.`);
  }

  assassination() {
    this.dmg = 7;
    alert(`${this.name} tente une assassination sur ${this.target.name}`);
    this.dealDamage(this.target);
    this.dmg = 6;

    if (this.target.isCharacterKilled() == true) {
      alert('Assassination réussie');
      this.successful = 1;
    } else {
      alert('Assassination échouée');
      this.successful = -1;
      this.takeDamage(7);
      this.changeStatusToLoser();
    }
    this.target = 0;
  }

  takeDamage(damage) {
    if (this.successful == 1) {
      damage = 0;
      alert(`${this.name} utilise l'effet spécial de ${this.ult} pour annuler l'attaque. \nIl ne reste plus que ${this.hp} hp à ${this.name}.`);
    } else {
      this.hp -= damage;
      alert(`${this.name} reçois ${damage} points de dégats. \nIl ne reste plus que ${this.hp} hp à ${this.name}.`);
    }
  }

  resetUlt() {
    this.successful = 0;
  }

}