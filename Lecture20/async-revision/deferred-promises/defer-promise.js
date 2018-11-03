

const wait2sec = function () {
  return new Promise(
  (resolve, reject) => {
    setTimeout(() => {
      console.log('promise over')
      resolve(10)
    }, 2000)
  }
)
}

console.log('wait starts')
const p = wait2sec()
console.log(p)

setTimeout(() => {
  console.log(p)
  p.then(() => {
    console.log('wait over')
  })
  p.then(() => {
    console.log('wait2 over')
  })
}, 3000)

// async function doTask () {
//   try {
//     console.log('wait starts')
//     await wait2sec()
//     console.log('wait ends')
//   } catch (e) {
//     console.error(e)
//   }
// }

// doTask()


let t = task()

t.then(() => {
  secondTask()
})

async () => {
  let t = task()
  await t
  secondTask()
}
