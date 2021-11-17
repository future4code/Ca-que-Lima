import { Fighter, validateCharacter } from "./validateCharacter";

export function performAttack(attacker: Fighter, defender: Fighter) {

    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
        throw new Error('Invalid Character')
    }

    const damage = attacker.attack - defender.defense

    if (damage > 0) {
        defender.life -= damage
    }

}

export function performAttack2(attacker: Fighter, defender: Fighter, validator: (character: Fighter) => boolean) {

    if (!validator(attacker) || !validator(defender)) {
        throw new Error('Invalid Character')
    }

    const damage = attacker.attack - defender.defense

    if (damage > 0) {
        defender.life -= damage
    }

}