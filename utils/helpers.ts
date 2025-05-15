const getRandomNumber = (min: number, max: number): number => {
  const minCeil = Math.ceil(min)
  const maxFloor = Math.floor(max)
  return Math.floor(Math.random() * (maxFloor - minCeil + 1)) + minCeil
}

const wait = (ms: number = 0) => new Promise(resolve => setTimeout(resolve, ms))

const toId = (str: string): string => str
  .trim()
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .replace(/[\s_]+/g, '-')
  .replace(/-+/g, '-')

export {
  getRandomNumber,
  toId,
  wait,
}
