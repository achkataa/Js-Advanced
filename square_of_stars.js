function stars(input) {
    let number = input
    let char = '*'
    for (let x = 1; x <= number; x++) {
        console.log(char.repeat(number))
    }
}

stars(5)