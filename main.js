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
function a() {
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
console.log(childFunction(0))