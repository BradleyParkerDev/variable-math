let a = 2
let b = 10
let c = 3
let denominator = 2 * a
let sRoot = Math.sqrt(Math.pow(b,2) - (4 * a *c))
let negB = b * (-1)

x1 = ((negB + sRoot) / denominator)
x2 = ((negB - sRoot) / denominator)

console.log(x1)
console.log(x2)