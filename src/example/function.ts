{
  // 定义函数类型
  let add: (a: number, b: number) => number
  add = (arg1: number, arg2: number): number => arg1 + arg2

  // 函数重载
  function fn (x: number): number
  function fn (x: string): string
  function fn (x: any): any {
    return x
  }
}
