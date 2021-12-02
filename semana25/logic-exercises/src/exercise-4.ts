function sumOfTwo1(nums: number[], target: number) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(sumOfTwo1([2, 7, 11, 15], 9))


function sumOfTwo2(nums: number[], target: number) {
    const hash: HashTable = {}
    for (let i = 0; i < nums.length; i++) {
        const value = nums[i]
        const complement = target - value
        if (hash[complement]) {
            return [hash[complement], i]
        } else {
            hash[value] = i
        }
    }
}

console.log(sumOfTwo1([2, 7, 11, 15], 9))