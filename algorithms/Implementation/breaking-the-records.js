{
    let testCase = {
        scores1: [10, 5, 20, 20, 4, 5, 2, 25, 1],
        scores2: [3, 4, 21, 36, 10, 28, 35, 5, 24, 42]
    }

    function breakingRecords(scores) {
        let currentMax = scores[0]
        let currentMin = scores[0]

        let breakMaxCount = 0
        let breakMinCount = 0

        for (let i = 1; i < scores.length; i++) {
            let currentScore = scores[i]
            if (currentScore < currentMin) {
                breakMinCount++
                currentMin = currentScore
            } else if (currentScore > currentMax) {
                breakMaxCount++
                currentMax = currentScore
            }
        }

        return `${breakMaxCount} ${breakMinCount}`

    }


    let result = breakingRecords(testCase.scores2)
    console.log(result)
}





