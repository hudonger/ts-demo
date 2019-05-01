{
  // 泛型可以让API支持多种类型的数据，同时支持类型解构的检查
  const getArray = <T>(value: T, len: number = 5): T[] => {
    return new Array(len).fill(value)
  }
  console.log(getArray<number>(2, 10))

  interface Person<T> {
    name: T,
    eat: (a: T) => T[]
  }

  // 泛型约束
  interface ValueWithLength {
    length: number
  }

  const getList = <T extends ValueWithLength>(arg: T) => {
    return arg.length
  }
  // console.log(getList(123))
  console.log(getList('123'))
}
