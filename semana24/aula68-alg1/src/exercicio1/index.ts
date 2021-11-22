function checkOneEditDistance(string1: string, string2: string): boolean {

    if (string1 === string2) {
        return false
    }

    const l1: number = string1.length
    const l2:number = string2.length

    if (Math.abs(l1 - l2) > 1) {
        return false
    }

    if (l1 > l2) {
        return string1.includes(string2)
    }

    if (l2 > l1) {
        return string2.includes(string1)
    }

    let count: number = 0
    let i: number = 0

    while(i < l1) {

        if (string1[i] !== string2[i]) {

            if (count === 1) {
                return false
            }

            i++
            count++
        } else {
            i++
        }
    }

    return count === 1
}


console.log(checkOneEditDistance('banana', 'banana'))