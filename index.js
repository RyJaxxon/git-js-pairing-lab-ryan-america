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
const isNegative = (num) => {
    if (num > 0) {
        return false
    } else if (num < 0) {
        return true
    } else {
        return false
    }
}

console.log((isNegative(2)))

// Function 8:
const triangleArea = (num1, num2) => 1 / 2 * num1 * num2

console.log(triangleArea(5, 7))

//Function 9:
const betweenTwentyAndFourty = (num) => {
    if (num >= 20 && num <= 40) {
        return true
    } else {
        return false
    }
}
console.log(betweenTwentyAndFourty(30));

//Function 10:
const largest = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        return num1
    } else if (num2 > num3) {
        return num2
    } else {
        return num3
    }
}

console.log(largest(4, 6, 8))