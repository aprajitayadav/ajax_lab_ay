
const testNum = (num) => new Promise ((resolve, reject) => {
  if (num > 50) {
    resolve('greater than 50')
  } else {
    reject('less than 50')
  }
})

testNum(20)
    .then(function(value) {
  console.log(value)
})
.catch(function(error) {
  console.log(error)
})
    
