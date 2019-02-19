const p = Promise.resolve()

const func = async () => {
  console.log('before await')
  await p;
  console.log('after await')
}

func()

p.then(() => {
  console.log('tick:a')
}).then(() => {
  console.log('tick:b')
})