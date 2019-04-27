// symbol 是基础数据类型，他的值是独一无二的
{
  const s = Symbol()
  console.log(s)

  const name = Symbol('name')
  const person = {
    [name]: 'donger', // 唯一的key 不会被覆盖
    age: 25
  }
  console.log(person[name])
  console.log(Object.keys(person))
  console.log(Reflect.ownKeys(person))
  console.log(Object.getOwnPropertySymbols(person))

  // for
  const s2 = Symbol.for('test')
  const s3 = Symbol.for('test')
  // console.log(s2 === s3) // true

  // keyFor
  console.log(Symbol.keyFor(s2)) // 返回 symbol.for 的标识
}
