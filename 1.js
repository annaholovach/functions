// 1
const calculateDiscountedPrice = (array, sale) => array.map(item => item * (1 - sale/100)).map(item => Math.round(item))

console.log(calculateDiscountedPrice([50, 60, 70], 50))

const  calculateTotalPrice = array => array.reduce((prev, curr) => prev + curr, 0)

console.log(calculateTotalPrice([50, 60, 70]))

//2

const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
const getFullName = ({ firstName, lastName }) => fullName(firstName, lastName)

let person = {
    firstName: 'Ryan',
    lastName: 'Gosling',
    sigma: true,
    age: 40,
}

console.log(getFullName(person))

const filterUniqueWords = str => Array.from(str
                                                .split(' ')
                                                .map(word => word.toLowerCase())
                                                .sort()
                                                .reduce((uniqueWords, word) => uniqueWords.add(word),
                                                    new Set()))

console.log(filterUniqueWords('Хочешь хочешь хочешь жить жить моей жизнью жизнью жизнью жизнью, я Бы так не думал, моя моя моя моя жизнь не сахар сахар сахар сахар кто вообще ее придумал'))

const avarage = arr => arr.reduce((prev, curr) => prev + curr, 0) / arr.length
const fixed = number => Math.round(number)
const getAvarageGrade = arr => fixed(avarage(arr.map(student => student.grade)))

let vasya = { name: "Вася", grade: 1 }
let petya = { name: "Петя", grade: 5 }
let masha = { name: "Маша", grade: 12 }
let students = [ vasya, petya, masha ]

console.log(getAvarageGrade(students))

//3

function createCounter () {
    let count = 0
    return () => count++
}

function repeatFunction (func, number) {
    if (number < 0) {
        return function (...args) {
            while (true) {
                return func(...args)
            }
        }
    }
    return function (...args) {
        for (let i = 0; i < number; i++) {
            return func(...args)
        }
    }
}

const counter = createCounter()
const repeatedCounter = repeatFunction(counter, 2)

console.log(repeatedCounter())
console.log(repeatedCounter())
console.log(repeatedCounter())

//4

function calculateFactorial (n, accumulator = 1) {
    return n === 0 ? accumulator : calculateFactorial(n - 1, n * accumulator)
}

console.log(calculateFactorial(5));

function power (base, exponent) {
    return exponent > 0 ? base * power(base, exponent - 1) : exponent < 0 ? 1 / (base * power(base, Math.abs(exponent) - 1)) : 1
}

console.log(power(2, -3));

//5

function lazyMap(arr, mappingFunction) {
    let index = 0

    return {
        next: function () {
            if (index < arr.length) {
                const mappedValue = mappingFunction(arr[index])
                index++
                return { value: mappedValue, done: false }
            } else {
                return { done: true }
            }
        }
    }
}

const numbers = [1, 2, 3, 4, 5]
const squareFunction = (x) => x * x

const lazyMapper = lazyMap(numbers, squareFunction)
console.log(lazyMapper.next().value)
console.log(lazyMapper.next().value)
console.log(lazyMapper.next().value)
console.log(lazyMapper.next().value)
console.log(lazyMapper.next().value)
console.log(lazyMapper.next().done)

function fibonacciGenerator() {
    let prev = 0
    let curr = 1

    return {
        next: function () {
            const result = curr
            curr = prev + curr
            prev = result
            return {value: result}
        }
    }
}

const fibGenerator = fibonacciGenerator()
console.log(fibGenerator.next().value)
console.log(fibGenerator.next().value)
console.log(fibGenerator.next().value)
console.log(fibGenerator.next().value)
console.log(fibGenerator.next().value)
console.log(fibGenerator.next().value)
console.log(fibGenerator.next().value)
console.log(fibGenerator.next().value)





