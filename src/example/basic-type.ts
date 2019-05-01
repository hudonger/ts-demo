{
  // 布尔类型
  let bool:boolean
  bool = true

  //  数值类型
  let num: number
  num = 222

  // 字符串类型
  let str: string
  str = 'hello world'

  // 数组
  let arr1: number[]
  let arr2: Array<(string | number)>

  // 元组 (长度固定, 类型一一对应)
  let tuple: [number, string, boolean]

  // 枚举类型
  enum Roles {
    SUPER_ADMIN = 999,
    ADMIN = 100,
    USER = 10
  }

  // any类型
  let value: any = 100
  value = 'haha'

  // void类型
  let v: void = undefined
  const fn = (text: string):void => {
    console.log(text)
  }
  fn('hahaha')

  // never类型 (不可能有返回值)
  const errorFunc = (msg: string): never => {
    throw new Error(msg)
  }

  // 对象类型
  const obj: object = {
    name: 'donger'
  }
}
