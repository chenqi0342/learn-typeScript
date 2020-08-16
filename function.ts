//定义函数的输入输出
//函数声明
function add(x: number, y: number, z: number=10): number {
  if (typeof z === "number") {
    return x + y + z;
  } else {
    return x + y;
  }
}//可选参数只能放在最后面

let res = add(2, 3);
let res2 = add(2, 3, 4);

//函数表达式
const adds = function (x: number, y: number, z: number = 10): number{
    return x+y
}

const adds2: (x: number, y: number, z?: number) => number = adds //函数类型 =>代表返回的结果 ts :代表规定类型

let string = '123'
string=123 //类型推断
