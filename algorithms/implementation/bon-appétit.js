{
    let testCase = {
        n: 4,
        k: 1,
        c: [3, 10, 2, 9],
        b: 7
    }


    function calculateOvercharge() {
        let { n, k, c, b } = testCase
        let actualItems = c.filter((item, index) => index != k)
        let actualCost = actualItems.reduce((a, b) => a + b)
        let annaShare = actualCost / 2
        if (annaShare == b) {
            console.log('Bon Appetit')
        } else {
            console.log(b - annaShare);
        }

    }

    calculateOvercharge()
}