class Animal{
    // public name: string; //默认是public,公共属性
    // private name: string //只能在Animal内访问
    // protected name: string //Animal和子类都能访问
    // readonly name: string; //只读
    name: string;
    static categoies: string[] = ['mammal', 'bird'] //不需要实例化，可以直接访问
    static isAnimal(a) {
        return a instanceof  Animal
    }
    constructor(name: string) {
        this.name=name
    }

    run() {
        return `${this.name} is run`
    }
}

const snake = new Animal('liys')
console.log(Animal.categoies)
console.log(Animal.isAnimal(snake))
// console.log(snake.name)
// snake.name='snake'
// console.log(snake.name)

console.log(snake.run()) //封装

class Dog extends Animal{
    break() {
        return `${this.name} is breaking`
    }
}

const xb = new Dog('xb')

console.log(xb.run()) //继承 父类的方法可以使用

class Cat extends Animal{
    constructor(name) {
        super(name)
        console.log(this.name)
    }
    
    run() {
        return 'meoW' + super.run() //通过super能够获取父类的方法
        //在子类完成对父类方法的重写
    }
}

const maomao = new Cat('maomao')

console.log(maomao.run())//多态

interface Raido{
    switchRaido(triggerL: boolean): void
}

interface Battery{
    checkBatteryStatus()
}
class Car implements Raido{
    switchRaido() {
        
    }
}

class cellPhone implements Raido, Battery{
    switchRaido() {
        
    }
    checkBatteryStatus() {
        
    }
}

//面向对象的特点
//class类
//对象 类的实例
//面向对象的三大特点 封装 继承 多态
//封装：不关注内部细节，暴露一些接口给外部
//继承：子元素继承父元素的一些特效
//多态：继承与同一个父类，实现同样的方法不一样
//多态即多种形态，通过调用不同的函数实现不同的功能
//多态的条件
//虚函数的重写(子类定义一个与父类的完全相同的虚函数)
//父类的指针或引用

