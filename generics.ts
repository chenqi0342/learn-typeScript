// function echo(arg: number): number {
//  return arg
// }

function echo<T>(arg: T): T {
    return arg
}
const str: string = 'str'
// const result = echo(str)
const result = echo('str') //类型推断

function swap<T, U>(tuple: [T, U]): [T, U] {
    return [tuple[0], tuple[1]]
}

const result2 = swap(['string', 123])

function echoWithArr<T>(arg: T[]): T[]{
    console.log(arg.length)
    return arg
}
const arrs = echoWithArr([1, 2, 3])

interface IWithLength {
    length: number
}//约束泛型 鸭子法则 只要有length属性，就符合约束
function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length)
    return arg
}
const str2 = echoWithLength('str')
const obj = echoWithLength({ length: 123, abc: 123})
const arr2 = echoWithLength([1, 2, 3])
//泛型 定义的时候不指定类型 使用的时候指定类型

class Queue<T> {
    private data = []; //只能在Queue内使用
    push(item: T) {
        return this.data.push(item)
    }
    pop(): T {
        return this.data.shift()
    }
}

const quque = new Queue<number>() //约定传入跟删除只能是number
quque.push(1)
// quque.push('str')
console.log(quque.pop().toFixed())

const quque2 = new Queue<string>() //约定传入跟删除只能是number
quque2.push('str')
console.log(quque2.pop().length)

interface KeyPair<T, U>{
    key: T;
    value: U;
}
let kp1: KeyPair<number, string> = { key: 123, value: 'string' }
let kp2: KeyPair<string, number> = { key: '123', value: 123 }

let arr: number[] = [1, 2, 3]
let arrTwo: Array<number> = [1, 2, 3]

interface IAdd<T> {
   (a: T, b: T): T
}//加上泛型可以被描述为各种类型
function add(a: number, b: number): number{
    return a + b
}
function connect(a: string, b: string): string{
    return a + b
}
const a: IAdd<number> = add
const b: IAdd<string> = connect //传入不同类型完美适配