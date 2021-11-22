function stringCompression(str: string) {

    let charPlusTimesArr = []
    let lastChar = str[0]
    let count = 0

    for (const char of str) {
        
        if (char !== lastChar) {
            charPlusTimesArr.push(lastChar + count)
            lastChar = char
            count = 0
        }
        count++
    }

    charPlusTimesArr.push(lastChar + count)

    const result = charPlusTimesArr.join('')

    return result.length > str.length ? str : result
}

console.log(stringCompression('ebaaaa'))