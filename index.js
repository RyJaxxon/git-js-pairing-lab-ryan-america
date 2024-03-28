//Code your solutions in this file
// Function 1:
const fiveToHundred = () => {
    let result = []
    for (let i = 5; i < 101; i++) {
        result.push(i)
    }
    return result
}

console.log(fiveToHundred());

// Function 2:
const multiplesOfThree = () => {
    let result = []
    for (let i = 3; i < 100; i += 3) {
        result.push(i);
    }
    return result
}

console.log(multiplesOfThree());

//Function 3: 
const multiplesOfThreeOrFive = () => {
    let result = [];
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 || i % 5 === 0)
            result.push(i);
    }
    return result
}

console.log(multiplesOfThreeOrFive());

//Function 4:
const untilNum = (num) => {
    let result = []
    for (let i = 1; i <= num; i++) {
        result.push(i)
    }
    return result
}
console.log(untilNum(5))

//Function 5:
const multiply = (a, b) => a * b

console.log(multiply(2, 4))

//Function 6:
const add = (a, b) => {
    if (a === b) {
        return (a + b) * 3
    } else {
        return (a + b)
    }
}

console.log(add(2, 4))

// Function 7:
