
function solve(year) {
    let isLeap = false
    if (year > 1918) {
        if (year % 400 == 0) {
            isLeap = true
        } else if (year % 4 == 0 && year % 100 != 0) {
            isLeap = true
        } else {
            isLeap = false
        }

        if (isLeap) {
            return (`12.09.${year}`)
        } else {
            return (`13.09.${year}`)
        }
    } else if (year <= 1917 && year >= 1700) {
        if (year % 4 == 0) {
            isLeap = true
        }
        if (isLeap) {
            return (`12.09.${year}`)
        } else {
            return (`13.09.${year}`)
        }
    } else if (year == 1918) {
        return `26.09.${year}`
    }

}

console.log(solve(1800)); 
