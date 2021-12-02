function soleNumber1(nums: number[]): number {
    let result = 0
    for (const num of nums) {
        result ^= num
    }
    return result
}

// ----------------------------------------------------


interface HashTable {
    [key: string]: any
}

function soleNumber2(nums: number[]): number {
    const hash: HashTable = {}  
    
    for (let num of nums) {
        const key = num
        
        if (key in hash) {
            delete hash[key]
        } else {
            hash[key] = true
        }
    }

    console.log(hash)
    
    return Number(Object.keys(hash)[0])
}



console.log('XOR: ', soleNumber1([4,1,2,1,2]))
console.log('Hash Table: ', soleNumber2([4,1,2,1,2]))