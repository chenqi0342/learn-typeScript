//除 Object 以外的所有类型都是不可变的（值本身无法被改变)
//如，JavaScript 中对字符串的操作一定返回了一个新字符串，原始字符串并没有被改变
//7种原始值
//boolean null undefind number string symbol bigInt

let isDone: boolean = false //需要声明的值后面加上: 类型

let age: number = 20

let binaryNumber: number = 0b1111 //es6新增2进制0b或者0B  8进制0o或者0O

let firstName: string = '111'

let message: string = `hsdad${firstName}`

let u: undefined = undefined

let n: null = null

let num: number = undefined //undefined null是所以类型的子类

let nums: number = null

let notSure: any = '111' //anyscript
notSure = 4
notSure = true

let numberOrString: number | string = 2 //联合类型
numberOrString = '22222'
numberOrString = true


let arrOfNumber: number[] = [1, 2, 3, 4] //数组
arrOfNumber = [1, 2, '3']
arrOfNumber.push(5)
arrOfNumber.push('5')

//类数组
function test() {
    console.log(arguments)
    arguments.length
    arguments[0]
    arguments.forEach
}

//元组 数组只能聚合同种类型的数据
let user: [string, number] = ['111', 111]
user = [1111]
user = ['111', 111, 111]

//interface 接口
