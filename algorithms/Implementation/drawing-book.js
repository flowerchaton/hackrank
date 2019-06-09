{
    const testData = {
        case1: {
            pageNum: 6,
            targetPage: 2,
            pageTurns: 1
        },

        case2: {
            pageNum: 5,
            targetPage: 4,
            pageTurns: 0
        }
    }


    const calculatePageTurns = function ( pageNum, targetPage ) {
        let turnDirection, currentPage, pageTurns = 0
        let distFromFirstPage = Math.abs( 1 - targetPage )
        let distFromLastPage = Math.abs( pageNum - targetPage )
        if ( distFromLastPage > distFromFirstPage ) {
            currentPage = 1
            turnDirection = 1
        } else {
            currentPage = pageNum % 2 === 0 ? pageNum + 1 : pageNum
            turnDirection = -1
        }

        while ( currentPage !== targetPage && currentPage - 1 !== targetPage ) {
            currentPage += 2 * turnDirection
            pageTurns += 1
        }
        console.log( pageTurns )
        return pageTurns
    }

    const pageTurns1 = calculatePageTurns(
        testData.case1.pageNum, testData.case1.targetPage )

    console.log( testData.case1.pageTurns === pageTurns1 )


    const pageTurns2 = calculatePageTurns(
        testData.case2.pageNum, testData.case2.targetPage )

    console.log( testData.case2.pageTurns === pageTurns2 )

}
