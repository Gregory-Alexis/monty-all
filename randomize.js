exports.randomize = (arr) => {
  let temp = 0
  let random = 0

  for (let i = 0; i < arr.length; i++) {
    random = Math.floor(Math.random() * arr.length)
    temp = arr[i]
    arr[i] = arr[random]
    arr[random] = temp;
  }
  return arr
}