class Creature {
    static number = 0;

    constructor(name, healthPoints, damage) {
        this.id = ++Creature.number;
        this.name = name;
        this.healthPoints = healthPoints;
        this.damage = damage;
    }

    get getId() {
        return this.id;
    }

    defeat() {
        console.log(`${this.name} has been defeated.`);
    }
}

class Player extends Creature {
    #lvl = 1;

    get lvl() {
        return this.#lvl;
    }

    attack(other) {
        other.healthPoints -= this.damage;
        if (other.healthPoints <= 0) {
            other.defeat();
            this.#lvl++;
            return true;
        }
        return false;
    }
}

class Enemy extends Creature {
    attack(other) {
        other.healthPoints -= this.damage;
        if (other.healthPoints <= 0) {
            other.defeat();
            return true;
        }
        return false;
    }
}

const player = new Player("Player", 100, 20);
const enemy = new Enemy("Enemy", 80, 15);

while (player.healthPoints > 0 && enemy.healthPoints > 0) {
    if (Math.random() < 0.5) {
        if (player.attack(enemy)) {
            console.log("Player wins!");
            break;
        }
    } else {
        if (enemy.attack(player)) {
            console.log("Enemy wins!");
            break;
        }
    }
}