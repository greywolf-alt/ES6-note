// 类的支持还是实验性的
console.log('index.js')
class classDecorator {
  constructor(name) {
    this.name = name
  }
}

const classInstance = new classDecorator('zs')
console.log(classInstance)

function addAge(target) {
  console.log(target)
  target.age = 12
}