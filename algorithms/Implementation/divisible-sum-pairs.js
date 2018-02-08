{
    let testCase = {
        k: 3,
        set: [1, 3, 2, 6, 1, 2]
    }


    function divisibleSumPairs(set, k) {
        let count = 0
        for (let i = 0; i < set.length; i++) {
            for (let j = i + 1; j < set.length; j++) {
                let remainder = (set[i] + set[j]) % k
                if (remainder == 0) {
                    count++
                }
            }
        }
        return count
    }


    let result = divisibleSumPairs(testCase.set, testCase.k)
    console.log(result)
}