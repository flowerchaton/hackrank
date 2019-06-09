{
    const testData = {
        case1: {
            playerScores: [ 100, 100, 50, 40, 40, 20, 10 ],
            myScores: [ 5, 25, 50, 120 ],
        },
        case2: {
            playerScores: [ 100, 90, 90, 80, 75, 60 ],
            myScores: [ 50, 65, 77, 90, 102 ]
        }
    }

    let climbBoard = function ( playerScores, myScores ) {
        const result = []
        const scoreRankMap = {}
        let rNum = 1
        for ( let i = 0; i < playerScores.length; i++ ) {
            if ( i === 0 ) {
                scoreRankMap[ playerScores[ i ].toString() ] = rNum
            } else {
                if ( playerScores[ i ] < playerScores[ i - 1 ] ) {
                    rNum++
                    scoreRankMap[ playerScores[ i ].toString() ] = rNum
                }
            }
        }

        let lastInsertIndex = playerScores.length - 1
        let followByScore = playerScores[ 0 ]
        for ( const myScore of myScores ) {
            let insertIndex = -1
            for ( let i = lastInsertIndex; i >= 0; i-- ) {
                const playScore = playerScores[ i ];
                if ( myScore < playScore ) {
                    insertIndex = i + 1
                    followByScore = playScore
                    break
                }
            }

            if ( insertIndex < 0 ) { result.push( 1 ) }
            else if ( insertIndex === 1 ) { result.push( 2 ) }
            else {
                const rank = scoreRankMap[ followByScore.toString() ]
                result.push( rank + 1 )
            }
            lastInsertIndex = insertIndex
        }
        return result;
    }

    console.log( '------------------------------------' );
    let result = climbBoard( testData.case1.playerScores, testData.case1.myScores )
    console.log( result.join( '\n' ) )
    console.log( '------------------------------------' );

    console.log( '------------------------------------' );
    result = climbBoard( testData.case2.playerScores, testData.case2.myScores )
    console.log( result.join( '\n' ) )
    console.log( '------------------------------------' );

}
