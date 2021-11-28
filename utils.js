


function MultipleMatrix(m1, m2){
    let m1RowElementsSize = m1[0].length // 2
    let m1ColElementsSize = m1.length
    let m2RowElementsSize = m2[0].length // 2
    let m2ColElementsSize = m2.length // 2
    if (m1RowElementsSize!== m2ColElementsSize) return false
    let result = new Array(m1RowElementsSize)
        for (let j = 0 ; j<m1RowElementsSize; j++){
        let value = 0
        result[j] = new Array(m2ColElementsSize);
        for (let i = 0; i<m2ColElementsSize; i++) {
            value = 0
            for (k = 0; k<m2ColElementsSize; k++) {
                value += m1[j][k] * m2[k][i] 
                console.log("---",m1[j][k],m2[k][i])
            }
            result[j][i] =value
            value += m2[j][i] * m1[i][j]
            }
        }        
        console.log("new line-----")
    console.log("res", result)
}



function sumMatrix(m1, m2) {
    let m1RowElementsSize = m1[0].length // 2
    let m1ColElementsSize = m1.length
    let m2RowElementsSize = m1[0].length // 2
    let m2ColElementsSize = m2.length // 2
    if ((m1RowElementsSize !== m2RowElementsSize) || (m1ColElementsSize !== m2ColElementsSize)) {
        return false
    }
    let result = new Array(m1RowElementsSize)
    console.log("res start ===",result )
    for (let i = 0; i < m1RowElementsSize; i++) {
        result[i] = new Array(m1RowElementsSize)

        for (let j = 0; j<m1ColElementsSize; j++) {
            result[i][j] = 0
            result[i][j] = m1[i][j] + m2[i][j]
        }
        
    }
    console.log("sum =", result)
    return result
}


function sumOfArray(arr){
    let sum = 0 
    for (let j = 0; j< arr.length; j++) {
        sum += arr[j]
    }
    return sum
}


function sumOfEachRow(m){
    let mRowSize = m.length
    let mColSize = m[0].length
   
    let result = new Array(mRowSize)
    for (let i = 0; i < mRowSize; i++) {
        let sum = sumOfArray(m[i])
        
        
        result[i] = sum
       

    }
    console.log("sum = ROW", result)
    return result
}





module.exports = { MultipleMatrix, sumMatrix, sumOfEachRow }
