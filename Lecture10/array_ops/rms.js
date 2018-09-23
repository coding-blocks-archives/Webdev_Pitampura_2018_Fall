let input = [4, 7, 9, 15]

let rms = Math.sqrt(
  input
  .map(v => (v * v) / input.length)
  .reduce((a, b) => a + b)
)

console.log(rms)
