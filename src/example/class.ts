{
  class Person {
    _age: number
    static desc:string = '傻傻的' // 不会被实例继承，只能类本身调用
    constructor (age: number) {
      this._age = age
    }
    get age () {
      return this._age
    }
    set age (newValue: number) {
      console.log(`set age ${this._age} => ${newValue}`)
      this._age = newValue
    }
  }

  const person = new Person(18)
  console.log(person.age)
  person.age = 25
  person.age = 100

  class Point {
    private desc: string = '东西南北' // 私有属性
    constructor (public x: number, public y: number) {}

    public getPosition () {
      return `x:${this.x} y:${this.y}`
    }
  }
}
