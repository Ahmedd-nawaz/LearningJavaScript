// Primitive deta types 
// 7 premetive deta types 
// Null
// Number
// Symbol
// String
// Boolean
// Bigint
// Undefined


let a = null // wazeh taur par keh rhy hain k iss k andar kuch nhi hai
let b = 345
let c = true //Boolean // fals bhi ho sakti hai 
let d = BigInt("786") + BigInt("3") // Dono integer hi hain 
let e = "Ahmed"
let f = "symbol" // I'm a nyc symbol
let g = undefined // matlab isko koi value assign nhi ki
document.write(a, b, c, d, e, f, g)
document.write(typeof e)

// Object // Non primitive deta type  

const item = {
    "ahmed": true,
    "anas": false,
    "rafiq": 67,
    "farahn": undefined,
}

document.write(item["rafiq"])