function stringLength(string1, string2, string3) {
    let totalStringLength = string1.length + string2.length + string3.length
    let averageStringLength = Math.floor(totalStringLength / 3)

    console.log(totalStringLength)
    console.log(averageStringLength)
}


stringLength('pasta', '5', '22.3')