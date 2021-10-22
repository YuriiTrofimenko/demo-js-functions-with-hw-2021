/* 1: Without custom function */

/* let k1 = 3
let k2 = 4
let h = Math.sqrt(k1 * k1 + k2 * k2)
console.log(h)
k1 = 5
k2 = 6
h = Math.sqrt(k1 * k1 + k2 * k2)
console.log(h) */

/* 2 */
/* // function definition
function hypotenuse(katet1, katet2) {
  return Math.sqrt(katet1 * katet1 + katet2 * katet2)
}

let k1 = 3
let k2 = 4
// function call #1
// let h = hypotenuse(3, 4)
let h = hypotenuse(k1, k2)
console.log(h)
k1 = 5
k2 = 6
h = hypotenuse(k1, k2)
console.log(h) */

/* 3 */

/* const x = Math.random()
const y = Math.random()

console.log(x, y)

function f1() {
  console.log('f1')
}

if (x > 0.5) {
  function f2() {
    console.log(`f2 = ${x}`)
  }
}

if (y > 0.5) {
  f2()
} else {
  f1()
} */

/* 4 */

// 4.1 Without arguments

/* function printRandom() {
  console.log(`Random = ${(Math.random() * 100).toFixed(0)}`)
}

for (let i = 0; i < 3; i++) {
  printRandom()
} */

// 4.2 With arguments

// min - min bound, inclusively
// max - max bound, inclusively
// max must be greather than min
/* function printRandom(min, max) {
  if (max < min) {
    throw new Error(`min = ${min}, max = ${max} but max must be greather than min'`)
  }
  // 1)
  // min = 5, max = 10
  // 5 + 0 = 5
  // 2)
  // min = 5, max = 10
  // 5 + 5 = 10
  console.log(`Random = ${min + Number((Math.random() * (max - min)).toFixed(0))}`)
} */

// min == -2 && max == 5
// 1) 0
// -2 + Number((0 * (5 - -2)).toFixed(0))
// 2) 1
// -2 + Number((1 * (5 - -2)).toFixed(0))
// min + Number((Math.random() * (max - min)).toFixed(0))

/* for (let i = 0; i < 30; i++) {
  printRandom(5, 10)
} */
/* for (let i = 0; i < 30; i++) {
  printRandom(7, 13)
} */
/* for (let i = 0; i < 30; i++) {
  printRandom(-7, 13)
} */

/* for (let i = 0; i < 30; i++) {
  printRandom(7, -13)
} */

/* try {
  printRandom(7, -13)
} catch (error) {
  console.log(error.message)
} */

/* 5. Closures */

// 5.1 pass one function to another as an argument

/* function parent(foo) {
  console.log(`${foo.name} call started`)
  // console.log(`Result: ${foo(1)}`)
  console.log(`Result: ${foo(1, 5)}`)
  console.log(`${foo.name} call finished`)
}

// parent(Math.sin)
parent(function (x, y = 1) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
}) */

// 5.2 higher-order function

/* function parent(initialNumber) {
  let x = initialNumber
  return function () {
    return x++
  }
}

const child = parent(1)
// console.log(child())
// console.log(child())

for (let i = 1; i <= 10; i++) {
  console.log(child())
}

const child2 = parent(-50)

for (let i = 1; i <= 10; i++) {
  console.log(child2())
} */

/* 6 Generator Function */

/* function f1() {
  console.log('f1')
}

function f2() {
  console.log('f2')
  return
}

function f3(flag) {
  console.log('f3')
  if (flag) {
    console.log(`flag is true`)
    return
  }
  console.log(`flag is false`)
}

function add(a, b) {
  return a + b
} */

// f1()
// console.log(f1())

// f2()
// console.log(f2())

// f3()
// f3(true)

// const result = add(2, 3)
// ...
// console.log(`Result is: ${result}`)

/* function* demoGen() {
  yield 12
  yield 100
  yield 120
} */

// const gen = demoGen()
/* console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value) */

/* let result = gen.next()
console.log(result.value, result.done)
result = gen.next()
console.log(result.value, result.done)
result = gen.next()
console.log(result.value, result.done)
result = gen.next()
console.log(result.value, result.done)
result = gen.next()
console.log(result.value, result.done) */

/* let result = gen.next()
while (!result.done) {
  console.log(result.value)
  result = gen.next()
} */

/* HW */
/* function a() {
  let v = 0
  return function (arg) {
    const tmp = v
    v += arg
    return tmp
  }
}

const childFunction = a()
// call #1
console.log(childFunction(3)) // return #1: 0
// call #2
console.log(childFunction(5)) // return #2: 3
// call #3
console.log(childFunction(5000)) // return #3: ?
console.log(childFunction(-5000))
console.log(childFunction(0)) */

/* Lambda */

/* let x = 10
{
  let x = 20
}
console.log(x) */

/* const f1 = () => {
  console.log(this)
}
const f2 = function () {
  console.log(this)
} */

/* const f3 = x => {
  console.log(x)
} */

/* const f4 = (x, y) => {
  console.log(x + y)
} */

// f1()
// f2()
// f3(200)
// f4(10, 30)
// f4(30)

// const integers = [1, 10, -4, 5, 100, 0, 10]
// const strings = ['John', 'Bill', 'Mary', 'Vasyl', 'Noname']
// const strings = [{name: 'John', age: 10}, {name: 'Bill', age: 20}, {name: 'Mary', age: 21}, {name: 'Vasyl', age: 30}, {name: 'Noname', age: 65}]

/* function sort(array) {
  let isSorted
  do {
    isSorted = true
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i + 1].name.localeCompare(array[i].name) > 0) {
        // swap (loop step 2: i === 1)
        const tmp = array[i] // tmp === 1
        array[i] = array[i + 1] // array[i] === array[0] === 10
        array[i + 1] = tmp // array[i + 1] === array[1] === 1
        isSorted = false
      }
    }
  } while (!isSorted)
} */

/* function sort(array, compare) {
  let isSorted
  do {
    isSorted = true
    for (let i = 0; i < array.length - 1; i++) {
      if (compare(array[i], array[i + 1]) > 0) {
        // swap (loop step 2: i === 1)
        const tmp = array[i] // tmp === 10
        array[i] = array[i + 1] // array[i] === array[1] === -4
        array[i + 1] = tmp // array[i + 1] === array[2] === 10
        isSorted = false
      }
    }
  } while (!isSorted)
} */

// sort(integers)
// sort(strings)
// console.log(integers)
// console.log(strings)
// sort(integers, (a, b) => a - b)

/* sort(integers, (a, b) => {
  return b - a
})
console.log(integers)

sort(integers, (a, b) => a - b)
console.log(integers)

// sort(strings, (a, b) => a.localeCompare(b))
// console.log(strings)

sort(strings, (a, b) => b.name.localeCompare(a.name))
console.log(strings) */


/* Recursion (TDD - Test Driven Development)*/

// n -> [0; Infinity]

// 1
// console.log(5, ' -> ', fib(5)) // 5
// console.log(6, ' -> ', fib(6)) // 8
// console.log(7, ' -> ', fib(7)) // 13

// 2
// function fib(n) {}

// 3
/* function fib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

console.log(40, ' -> ', fib(40)) */

// 3! = 1 * 2 * 3
// 5! = 1 * 2 * 3 * 4 * 5

// 4
// console.log('fact(5) === 120 : ', fact(5) === 120)

// 4.1 (Loop Approache)
/* function fact(n) {
  let result = n
  while (n > 1) {
    result *= --n
    // n = n - 1
    // result = result * n
  }
  return result
}

for (let i = 1; i <= 5; i++) {
  console.log(`fact(${i}) = `, fact(i))
} */

// 4.2 (Recursion Approache)
/* function fact(n) {
  return (n <= 1) ? 1 : n * fact(--n)
}

for (let i = 1; i <= 5; i++) {
  console.log(`fact(${i}) = `, fact(i))
} */

// 3 * ?
// 2 * ?
// 1 * 1

// 3 * 2
// 2 * 1
// 1 * 1

function fib(n) {
  if (n < 2) {
    return n
  }
  return fib(n - 1) + fib(n - 2)
}

console.log(40, ' -> ', fib(50))