export interface Fighter {
    name: string
    life: number
    defense: number
    attack: number
}

export function validateCharacter(character: Fighter): boolean {

    const { name, life, defense, attack } = character

    if (!name || !life || !defense || !attack) {
        return false
    }

    if (defense <= 0 || attack <= 0) {
        return false
    }

    if (life !== 1500) {
        return false
    }

    return true

}