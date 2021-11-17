export enum LOCATION {
    EUA = "EUA",
    BRAZIL = "BRAZIL"
}

export enum NATIONALITY {
    AMERICAN = "AMERICAN",
    BRAZILIAN = "BRAZILIAN"
}

export interface User {
    name: string
    age: number
    nationality: NATIONALITY
}

export interface Casino {
    name: string
    location: LOCATION
}

export interface ResultItem {
    allowed: string[]
    forbidden: string[]
}

export interface Result {
    brazilians: ResultItem
    americans: ResultItem
}

export function verifyAge(casino: Casino, users: User[]): Result {

    const allowed: User[] = []
    const forbidden: User[] = []

    for (const user of users) {
        if (casino.location === "EUA") {
            if (user.age >= 21) {
                allowed.push(user)
            } else {
                forbidden.push(user)
            }
        } else {
            if (user.age >= 18) {
                allowed.push(user)
            } else {
                forbidden.push(user)
            }
        }
    }

    const allowedBrazilians = allowed.filter(user => user.nationality === NATIONALITY.BRAZILIAN)
    const allowedAmericans = allowed.filter(user => user.nationality === NATIONALITY.AMERICAN)
    const forbiddenBrazilians = forbidden.filter(user => user.nationality === NATIONALITY.BRAZILIAN)
    const forbiddenAmericans = forbidden.filter(user => user.nationality === NATIONALITY.AMERICAN)

    return {
        brazilians: {
            allowed: allowedBrazilians.map(u => u.name),
            forbidden: forbiddenBrazilians.map(u => u.name)
        },
        americans: {
            allowed: allowedAmericans.map(u => u.name),
            forbidden: forbiddenAmericans.map(u => u.name)
        }
    }
}