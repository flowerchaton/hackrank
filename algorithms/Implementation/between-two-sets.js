{

    let testCase = {
        set1: [2, 4, 8],
        set2: [32, 96],
        set3: [20, 30],
        set4: [15, 25],
        set5: [44, 66],
        set6: [2, 5]
    }




    function getMaxDivisor(num1, num2) {

        let numBig = num1 > num2 ? num1 : num2
        let numSmall = num1 < num2 ? num1 : num2
        if (numBig % numSmall == 0) {
            return numSmall
        }
        let multiplier = Math.floor(numBig / numSmall) + 1
        let divisor = numSmall * multiplier - numBig
        let result = divisor
        if (numSmall % divisor != 0 || numBig % divisor != 0) {
            result = 1
        }
        return result
    }

    function getMinCommon(set) {
        let result = set.reduce((a, b) => {
            if (a % b == 0) {
                return a
            } else if (b % a == 0) {
                return b
            } else {
                let divisor = getMaxDivisor(a, b)
                return (a * b) / divisor
            }
        })
        return result
    }


    function getTotalBetween(set1, set2) {
        let between = []
        let lowerBound = getMinCommon(set1)

        let higherBound = Math.min(...set2)

        let n = lowerBound
        let i = 1
        while (n <= higherBound) {

            let isSuitable = true
            for (let s of set2) {
                if (s % n != 0) {
                    isSuitable = false
                    break
                }
            }

            if (isSuitable) {
                between.push(n)
            }
            i++
            n = lowerBound * i

        }
        return between.length
    }

    // ========================================================

    let total = getTotalBetween(testCase.set6, testCase.set3)
    console.log(total)

}







