export enum GENDER {
  MALE = "MALE",
  FEMALE = "FEMALE",
  OTHER = "OTHER"
}

export class Character {
  private name: string
  private gender: GENDER
  private id?: number
  private description?: string

  constructor(
    charName: string,
    charGender: GENDER,
    charDescription?: string,
    charId?: number
  ) {
    this.name = charName
    this.gender = charGender
    this.id = charId
    this.description = charDescription
  }

  getName() {
    return this.name
  }

  setName(newName: string) {
    this.name = newName
  }
}

