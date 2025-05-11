const getRandomNumber = (min: number, max: number): number => {
  const minCeil = Math.ceil(min)
  const maxFloor = Math.floor(max)
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil
}

const wait = (ms: number = 0) => new Promise(resolve => setTimeout(resolve, ms))

export {
  getRandomNumber,
  wait,
}
