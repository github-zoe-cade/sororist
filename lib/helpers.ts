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

const _toArray = <T>(value: T[] | T): T[] => (new Array(value).flat() as T[])
export const toArray = <T>(value: T[] | T): T[] | [] => (!!value && _toArray(value)) || []

export const isEmpty = (value: any) => {
  if (value == null) {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true
  }

  if (typeof value === "object") {
    return Object.keys(value).length === 0
  }

  return false;
}

export const compact = <T>(array: Array<T| undefined>): T[] => (
  array.filter((t) => t != null)
)
