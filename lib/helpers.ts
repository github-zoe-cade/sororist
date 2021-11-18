export const random = (array: any[], size: number = 1): any => {
  let cloneArray = array.map((x) => x)
  let randomElements: any[] = []
  for (let i = 0; i < size; i++) {
    const randomIndex = Math.floor(Math.random() * cloneArray.length)
    randomElements.push(cloneArray[randomIndex])
    cloneArray.splice(randomIndex, 1)
  }

  return randomElements
}
