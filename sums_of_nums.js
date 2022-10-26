function sumOfNumbers(string1, string2) {
    let num1 = Number(string1)
    let num2 = Number(string2)

    let sum = 0

    for (let x = num1; x <= num2; x++) {
        sum += x
    }

    console.log(sum)
}


sumOfNumbers('-8', '20')
