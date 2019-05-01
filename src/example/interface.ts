{
  interface Name {
    fastName: string,
    lastName: string,
  }

  const getFullName = ({fastName, lastName}: Name) => {
    return `${fastName} ${lastName}`
  }
  
  console.log(getFullName({
    fastName: 'hu',
    lastName: 'haha'
  }))

  interface Person {
    name: Name,
    readonly gender: string, // 只读属性
    age?: number, // 可选参数
    // [prop: string]: any // 通过索引签名增加其他属性
  }

  const getUserInfo = ({name, gender, age}: Person) => {
    return age ? age : 0
  }
  
  console.log(getUserInfo({
    name: { fastName: 'hu', lastName: 'haha' },
    gender: '男',
    age: 25,
    height: 170 // 类型断言，绕过多余属性检查
  } as Person))

  // 函数接口
  interface Func {
    (num1: number, num2: number): number
  }
  // type Func = (num1: number, num2: number) => number // 类型叠名 等同于Func
  const add: Func = (n1, n2):number => n1 + n2
  add(1, 1)

  // 接口继承
  interface Animal {
    eye: string
  }
  interface Cat extends Animal {
    skill: string
  }
}
