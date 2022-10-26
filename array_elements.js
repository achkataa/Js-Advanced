function arrayOperations(input) {
    let numsArray = input
    let numsSum = 0
    for (num of numsArray) {
        numsSum += num
    }

    let inverseSum = 0
    for (num of numsArray) {
        inverseSum += 1/num
    }

    let stringOfArray = numsArray.join('')

    console.log(numsSum)
    console.log(inverseSum)
    console.log(stringOfArray)
    

}

arrayOperations([2, 4, 8, 16])
