let x1 = 2
let y1 = 1
let x2 = 6
let y2 = 5

let xSquared = (Math.pow((x2-x1),2))
let ySquared = (Math.pow((y2-y1),2))

let d = Math.sqrt((xSquared + ySquared))
console.log(`The distance calculated from (${x1}, ${y1}) and (${x2}, ${y2}) is ${d}.`)