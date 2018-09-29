const b64 = require('base64-js')

console.log(b64)

let decoded = b64.toByteArray("jhgJAGD2")
let encoded = b64.fromByteArray(decoded)

console.log(encoded)
console.log(decoded)
