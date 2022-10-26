function circleArea(input) {
    let inputType = typeof(input)
    if (inputType === 'number') {
        let number = input
        let area = Math.PI * (number ** 2)
        console.log(Math.round(area * 100) / 100)
    }else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
    }
}


circleArea('name')
